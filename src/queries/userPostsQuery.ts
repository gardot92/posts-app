import { gql } from '@apollo/client';

export default gql`
  query GetUserPosts($id: ID!, $postsOptions: PageQueryOptions) {
    user(id: $id) {
      posts(options: $postsOptions) {
        data {
          id
          title
          body
        }
        meta {
          totalCount
        }
      }
    }
  }
`;
