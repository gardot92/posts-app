/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPost
// ====================================================

export interface GetPost_post {
  __typename: 'Post';
  id: string | null;
  title: string | null;
  body: string | null;
}

export interface GetPost {
  post: GetPost_post | null;
}

export interface GetPostVariables {
  id: string;
}
