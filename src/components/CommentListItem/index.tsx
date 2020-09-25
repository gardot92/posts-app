import React from 'react';
import { Comment } from 'antd';
import { GetPostComments_post_comments_data } from '../../types/GetPostComments';

interface CommentListItemProps {
  comment?: GetPostComments_post_comments_data | null;
  onDoubleClick?: (comment?: GetPostComments_post_comments_data | null) => void;
}

function CommentListItem({ comment, onDoubleClick }: CommentListItemProps) {
  return (
    <div
      onDoubleClick={() => onDoubleClick?.(comment)}
      title="double-click to edit"
    >
      <Comment
        author={
          <span>
            <h3>
              {comment?.name}{' '}
              <small>
                <a href={`mailto:${comment?.email}`}>{comment?.email}</a>
              </small>
            </h3>
          </span>
        }
        content={comment?.body}
      />
    </div>
  );
}

export default CommentListItem;
