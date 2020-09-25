import { List } from 'antd';
import React from 'react';
import { GetPostComments_post_comments_data } from '../../types/GetPostComments';
import CommentListItem from '../CommentListItem';
import ErrorAlert from '../ErrorAlert';

interface CommentsListProps {
  data?: (GetPostComments_post_comments_data | null)[];
  totalCount?: number;
  loading?: boolean;
  error?: boolean;
  page?: number;
  onPageChange?: (page: number) => void;
  pageSize?: number;
  onItemDoubleClick?: (
    comment?: GetPostComments_post_comments_data | null,
  ) => void;
}

function CommentsList({
  loading,
  error,
  data = [],
  totalCount = 0,
  page = 1,
  onPageChange,
  pageSize = 10,
  onItemDoubleClick,
}: CommentsListProps) {
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
        rowKey={(comment) => comment?.id || ''}
        renderItem={(comment) => (
          <List.Item>
            <CommentListItem
              comment={comment}
              onDoubleClick={onItemDoubleClick}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default CommentsList;
