/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePostInput } from './Global';

// ====================================================
// GraphQL mutation operation: AddPost
// ====================================================

export interface AddPost_createPost {
  __typename: 'Post';
  id: string | null;
  title: string | null;
  body: string | null;
}

export interface AddPost {
  createPost: AddPost_createPost | null;
}

export interface AddPostVariables {
  input: CreatePostInput;
}
