import { List } from 'antd';
import React from 'react';
import { GetUserPosts_user_posts_data } from '../../types/GetUserPosts';
import ErrorAlert from '../ErrorAlert';
import PostListItem from '../PostListItem';

interface PostsListProps {
  data?: (GetUserPosts_user_posts_data | null)[];
  totalCount?: number;
  loading?: boolean;
  error?: boolean;
  page?: number;
  onPageChange?: (page: number) => void;
  pageSize?: number;
  onItemDoubleClick?: (post?: GetUserPosts_user_posts_data | null) => void;
  onItemDetails?: (post?: GetUserPosts_user_posts_data | null) => void;
  onItemDelete?: (post?: GetUserPosts_user_posts_data | null) => void;
}

function PostsList({
  loading,
  error,
  data = [],
  totalCount = 0,
  page = 1,
  onPageChange,
  pageSize = 10,
  onItemDoubleClick,
  onItemDetails,
  onItemDelete,
}: PostsListProps) {
  return (
    <div>
      {error && <ErrorAlert />}
      <List
        dataSource={data}
        pagination={{
          pageSize,
          current: page,
          total: totalCount,
          hideOnSinglePage: true,
          onChange: (page) => onPageChange?.(page),
        }}
        loading={loading}
        rowKey={(post) => post?.id || ''}
        renderItem={(post) => (
          <List.Item>
            <PostListItem
              post={post}
              onDoubleClick={onItemDoubleClick}
              onDetails={onItemDetails}
              onDelete={onItemDelete}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default PostsList;
