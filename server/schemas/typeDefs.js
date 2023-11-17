const { ApolloServer, gql } = require('@apollo/server');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    # Add other user-related fields as needed
    cart: [Listing] # Assuming a user has a cart that contains listings
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
`;

module.exports = typeDefs;
