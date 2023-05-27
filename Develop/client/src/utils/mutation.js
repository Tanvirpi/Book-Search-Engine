import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput) {
    saveBook(bookData:$bookData) {
    _id
    username
    email
    savedBooks {
        authors
        link
        title
        bookId
        description
        image
    }
  }
`;

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        savedBooks {
          image
          authors
          link
          title
          bookId
          description
        }
      }
    }
  }
  `

