/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetComment
// ====================================================

export interface GetComment_comment {
  __typename: 'Comment';
  id: string | null;
  name: string | null;
  email: string | null;
  body: string | null;
}

export interface GetComment {
  comment: GetComment_comment | null;
}

export interface GetCommentVariables {
  id: string;
}
