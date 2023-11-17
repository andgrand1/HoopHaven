import { gql } from '@apollo/client';

export const EDIT_LISTING_MUTATION = gql`
  mutation EditListing(
    $id: ID!
    $title: String
    $description: String
    $price: Float
    $size: String
    $gender: String
    $category: String
    $pictures: [String]
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
      _id
      title
      description
      price
      size
      gender
      category
      pictures
      active
      createdBy {
        _id
        username
      }
    }
  }
`;
