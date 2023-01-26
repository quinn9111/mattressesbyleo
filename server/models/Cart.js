const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  mattress: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Mattress'
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
