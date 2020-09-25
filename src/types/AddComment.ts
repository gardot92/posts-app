/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCommentInput } from './Global';

// ====================================================
// GraphQL mutation operation: AddComment
// ====================================================

export interface AddComment_createComment {
  __typename: 'Comment';
  id: string | null;
  name: string | null;
  email: string | null;
  body: string | null;
}

export interface AddComment {
  createComment: AddComment_createComment | null;
}

export interface AddCommentVariables {
  input: CreateCommentInput;
}
