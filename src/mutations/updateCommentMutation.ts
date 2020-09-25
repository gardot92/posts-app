import { gql } from '@apollo/client';

export default gql`
  mutation UpdateComment($id: ID!, $input: UpdateCommentInput!) {
    updateComment(id: $id, input: $input) {
      id
      name
      email
      body
    }
  }
`;
