/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePostInput } from './Global';

// ====================================================
// GraphQL mutation operation: UpdatePost
// ====================================================

export interface UpdatePost_updatePost {
  __typename: 'Post';
  id: string | null;
  title: string | null;
  body: string | null;
}

export interface UpdatePost {
  updatePost: UpdatePost_updatePost | null;
}

export interface UpdatePostVariables {
  id: string;
  input: UpdatePostInput;
}
