import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      username
      email
      listings {
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

export const GET_LISTINGS = gql`
  query GetListings($filter: ListingFilterInput, $sort: ListingSortInput) {
    listings(filter: $filter, sort: $sort) {
      id
      title
      description
      price
      size
      gender
      category
      active
      pictures
      createdBy {
        id
        username
        email
      }
    }
  }
`;

export const GET_LISTING = gql`
  query GetListing($id: ID!) {
    listing(id: $id) {
      id
      title
      description
      price
      size
      gender
      category
      active
      pictures
      createdBy {
        id
        username
        email
      }
    }
  }
`;
