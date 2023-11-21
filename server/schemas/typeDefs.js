const { ApolloServer, gql } = require("@apollo/server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    cart: [CartItem]!
    listings: [Listing]!
  }

  type Listing {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    size: String!
    gender: String!
    category: String!
    active: Boolean!
    pictures: [String]!
    createdBy: User!
  }

  type Query {
    getlisting(id: ID!): Listing
    getUsers: [User]!
    getListings: [Listing]!
    getUserCart(userId: ID!): [CartItem]!
  }

  type Mutation {
    createUser(username: String!, email: String!): User!
    createListing(
      title: String!
      description: String!
      price: Float!
      size: String!
      gender: String!
      category: String!
      active: Boolean!
      pictures: [String]!
    ): Listing
    editListing(
      id: ID!
      title: String
      description: String
      price: Float
      size: String
      gender: String
      category: String
      active: Boolean
      pictures: [String]
    ): Listing
    addToCart(userId: ID!, listingId: ID!, quantity: Int!): User!
    removeFromCart(userId: ID!, cartItemId: ID!): User!
  }
`;

module.exports = typeDefs;
