import { gql } from '@apollo/client';

export default gql`
  query GetUsers($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        name
        email
        phone
        website
      }
      meta {
        totalCount
      }
    }
  }
`;
