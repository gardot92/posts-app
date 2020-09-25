import { gql } from '@apollo/client';

export default gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
