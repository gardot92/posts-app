/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum OperatorKindEnum {
  GTE = 'GTE',
  LIKE = 'LIKE',
  LTE = 'LTE',
  NE = 'NE',
}

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface CreateCommentInput {
  name: string;
  email: string;
  body: string;
}

export interface CreatePostInput {
  title: string;
  body: string;
}

export interface OperatorOptions {
  kind?: OperatorKindEnum | null;
  field?: string | null;
  value?: string | null;
}

export interface PageQueryOptions {
  paginate?: PaginateOptions | null;
  slice?: SliceOptions | null;
  sort?: (SortOptions | null)[] | null;
  operators?: (OperatorOptions | null)[] | null;
  search?: SearchOptions | null;
}

export interface PaginateOptions {
  page?: number | null;
  limit?: number | null;
}

export interface SearchOptions {
  q?: string | null;
}

export interface SliceOptions {
  start?: number | null;
  end?: number | null;
  limit?: number | null;
}

export interface SortOptions {
  field?: string | null;
  order?: SortOrderEnum | null;
}

export interface UpdateCommentInput {
  name?: string | null;
  email?: string | null;
  body?: string | null;
}

export interface UpdatePostInput {
  title?: string | null;
  body?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
