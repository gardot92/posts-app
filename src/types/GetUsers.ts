/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageQueryOptions } from './Global';

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users_data {
  __typename: 'User';
  id: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  website: string | null;
}

export interface GetUsers_users_meta {
  __typename: 'PageMetadata';
  totalCount: number | null;
}

export interface GetUsers_users {
  __typename: 'UsersPage';
  data: (GetUsers_users_data | null)[] | null;
  meta: GetUsers_users_meta | null;
}

export interface GetUsers {
  users: GetUsers_users | null;
}

export interface GetUsersVariables {
  options?: PageQueryOptions | null;
}
