import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUser($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      listings {
        _id
        title
        description
        price
        size
        gender
        category
        active
        pictures
      }
      cart {
        listing {
          _id
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

export const GET_LISTINGS = gql`
  query GetListings($filter: ListingFilterInput, $sort: ListingSortInput) {
    listings(filter: $filter, sort: $sort) {
      _id
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

export const GET_LISTING = gql`
  query GetListing($_id: ID!) {
    listing(_id: $_id) {
      _id
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
