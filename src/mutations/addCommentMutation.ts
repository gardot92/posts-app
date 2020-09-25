import { gql } from '@apollo/client';

export default gql`
  mutation AddComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      email
      body
    }
  }
`;
