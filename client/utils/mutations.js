import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const CREATE_LISTING = gql`
  mutation CreateListing(
    $title: String!
    $description: String!
    $price: Float!
    $size: String!
    $gender: String!
    $category: String!
    $active: Boolean!
    $pictures: String,
  ) {
    createListing(
      title: $title
      description: $description
      price: $price
      size: $size
      gender: $gender
      category: $category
      active: $active
      pictures: $pictures
    ) {
      id
      title
      description
      price
      size
      gender
      category
      active
      pictures
    }
  }
`;
export const EDIT_LISTING_MUTATION = gql`
  mutation EditListing(
    $id: ID!
    $title: String
    $description: String
    $price: Float
    $size: String
    $gender: String
    $category: String
    $pictures: String
    $active: Boolean
  ) {
    editListing(
      id: $id
      title: $title
      description: $description
      price: $price
      size: $size
      gender: $gender
      category: $category
      pictures: $pictures
      active: $active
    ) {
      id
      title
      description
      price
      size
      gender
      category
      pictures
      active
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($userId: ID!, $listingId: ID!, $quantity: Int!) {
    addToCart(userId: $userId, listingId: $listingId, quantity: $quantity) {
      id
      cart {
        listing {
          id
          title
          description
          price
          size
          gender
          category
          active
          pictures
        }
      }
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($userId: ID!, $cartItemId: ID!) {
    removeFromCart(userId: $userId, cartItemId: $cartItemId) {
      id
      cart {
        listing {
          id
          title
          description
          price
          size
          gender
          category
          active
          pictures
        }
      }
    }
  }
`;
