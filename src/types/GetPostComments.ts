/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageQueryOptions } from './Global';

// ====================================================
// GraphQL query operation: GetPostComments
// ====================================================

export interface GetPostComments_post_comments_data {
  __typename: 'Comment';
  id: string | null;
  name: string | null;
  email: string | null;
  body: string | null;
}

export interface GetPostComments_post_comments_meta {
  __typename: 'PageMetadata';
  totalCount: number | null;
}

export interface GetPostComments_post_comments {
  __typename: 'CommentsPage';
  data: (GetPostComments_post_comments_data | null)[] | null;
  meta: GetPostComments_post_comments_meta | null;
}

export interface GetPostComments_post {
  __typename: 'Post';
  comments: GetPostComments_post_comments | null;
}

export interface GetPostComments {
  post: GetPostComments_post | null;
}

export interface GetPostCommentsVariables {
  id: string;
  commentsOptions?: PageQueryOptions | null;
}
