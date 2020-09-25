import { gql } from '@apollo/client';

export default gql`
  query GetPostComments($id: ID!, $commentsOptions: PageQueryOptions) {
    post(id: $id) {
      comments(options: $commentsOptions) {
        data {
          id
          name
          email
          body
        }
        meta {
          totalCount
        }
      }
    }
  }
`;
