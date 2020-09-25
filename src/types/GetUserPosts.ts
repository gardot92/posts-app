/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageQueryOptions } from './Global';

// ====================================================
// GraphQL query operation: GetUserPosts
// ====================================================

export interface GetUserPosts_user_posts_data {
  __typename: 'Post';
  id: string | null;
  title: string | null;
  body: string | null;
}

export interface GetUserPosts_user_posts_meta {
  __typename: 'PageMetadata';
  totalCount: number | null;
}

export interface GetUserPosts_user_posts {
  __typename: 'PostsPage';
  data: (GetUserPosts_user_posts_data | null)[] | null;
  meta: GetUserPosts_user_posts_meta | null;
}

export interface GetUserPosts_user {
  __typename: 'User';
  posts: GetUserPosts_user_posts | null;
}

export interface GetUserPosts {
  user: GetUserPosts_user | null;
}

export interface GetUserPostsVariables {
  id: string;
  postsOptions?: PageQueryOptions | null;
}
