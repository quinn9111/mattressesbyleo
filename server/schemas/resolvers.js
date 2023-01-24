const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { User, Mattress, Vendor, Cart } = require('../models');

const resolvers = {
  Query: {
    vendors: async () => {
      return await Vendor.find();
    },
    mattresses: async (parent, { vendor, name }) => {
      const params = {};

      if (vendor) {
        params.vendor = vendor;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }
      return await Mattress.find(params).populate('vendor');
    },
    mattress: async (parent, { _id }) => {
      return await Mattress.findById(_id).populate('vendor');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'carts.mattresses',
          populate: 'vendor'
        });

        user.carts.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    cart: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'carts.mattresses',
          populate: 'vendor'
        });

        return user.carts.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const cart = new Cart({ mattresses: args.mattresses });
      const line_items = [];

      const { mattresses } = await order.populate('mattresses');

      for (let i = 0; i < mattresses.length; i++) {
        const mattress = await stripe.mattresses.create({
          name: mattresses[i].name,
          description: mattresses[i].description,
          images: [`${url}/images/${mattresses[i].image}`]
        });

        const price = await stripe.prices.create({
          mattress: mattress.id,
          unit_amount: mattresses[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addCart: async (parent, { mattresses }, context) => {
      console.log(context);
      if (context.user) {
        const cart = new Cart({ mattresses });

        await User.findByIdAndUpdate(context.user._id, { $push: { carts: cart } });

        return cart;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateMattress: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Mattress.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
