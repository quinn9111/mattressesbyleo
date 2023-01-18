const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Mattress {
    mattress_Id: ID
    name: String
    vendor: String
    description: String
    image: String
    size: String
    price: Float
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
    mattress: [Mattress]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
