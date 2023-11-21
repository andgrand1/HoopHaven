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
    id: ID!
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

  type CartItem {
    id: ID!
    listing: Listing!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  input ListingFilterInput {
    price: Float
    size: String
    gender: String
    category: String
  }

  input ListingSortInput {
    field: String
    order: String
  }

  type Query {
    user(id: ID!): User
    listing(id: ID!): Listing
    listings(filter: ListingFilterInput, sort: ListingSortInput): [Listing]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    authenticateUser(username: String!, password: String!): AuthPayload!
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
    addToCart(userId: ID!, listingId: ID!): User!
    removeFromCart(userId: ID!, cartItemId: ID!): User!
  }
`;

module.exports = typeDefs;
