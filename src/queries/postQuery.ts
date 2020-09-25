import { gql } from '@apollo/client';

export default gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;
