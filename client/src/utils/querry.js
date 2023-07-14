import { gql } from '@apollo/client';

export const QUERY = gql` {
    me {
      _id
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
  `