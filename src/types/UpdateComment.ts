/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateCommentInput } from './Global';

// ====================================================
// GraphQL mutation operation: UpdateComment
// ====================================================

export interface UpdateComment_updateComment {
  __typename: 'Comment';
  id: string | null;
  name: string | null;
  email: string | null;
  body: string | null;
}

export interface UpdateComment {
  updateComment: UpdateComment_updateComment | null;
}

export interface UpdateCommentVariables {
  id: string;
  input: UpdateCommentInput;
}
