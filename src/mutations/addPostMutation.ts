import { gql } from '@apollo/client';

export default gql`
  mutation AddPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;
