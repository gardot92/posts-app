import { gql } from '@apollo/client';

export default gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;
