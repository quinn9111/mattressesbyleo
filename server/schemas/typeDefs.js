const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Mattress {
    mattress_Id: ID
    name: String
    description: String
    image: String
    size: String
    price: Float
    vendor: [Vendor]
  }

  type User {
    user_id: ID
    firstName: String
    lastName: String
    email: String
    address: String
    address_2: String
    zipCode: String
    city: String
    state: String
    phoneNumber: String
    carts: [Cart]
  }

  type Vendor {
    vendor_id: ID
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Cart {
    _id: ID
    purchaseDate: String
    mattresses: [Mattress]
  }

  type Query {
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    vendors: [Vendor]
    mattresses(vendor: ID, name: String): [Mattress]
    mattress(_id: ID!): Mattress
    user: User
    checkout(mattress: [ID]!): Checkout
    cart(_id: ID!): Cart
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addCart(mattresses: [ID]!): Cart
    updateMattress(_id: ID!, quantity: Int!): Mattress
  }
`;

module.exports = typeDefs;
