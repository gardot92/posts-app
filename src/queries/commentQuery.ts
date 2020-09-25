import { gql } from '@apollo/client';

export default gql`
  query GetComment($id: ID!) {
    comment(id: $id) {
      id
      name
      email
      body
    }
  }
`;
