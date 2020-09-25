import { DeleteOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { GetUserPosts_user_posts_data } from '../../types/GetUserPosts';
import './index.scss';

interface PostListItemProps {
  post?: GetUserPosts_user_posts_data | null;
  onDoubleClick?: (post?: GetUserPosts_user_posts_data | null) => void;
  onDetails?: (post?: GetUserPosts_user_posts_data | null) => void;
  onDelete?: (post?: GetUserPosts_user_posts_data | null) => void;
}

function PostListItem({
  post,
  onDoubleClick,
  onDetails,
  onDelete,
}: PostListItemProps) {
  return (
    <div className="post-list-item">
      <div className="post-list-item__btn--delete">
        <Button
          type="link"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => onDelete?.(post)}
        />
      </div>
      <div
        className="post-list-item__title"
        onDoubleClick={() => onDoubleClick?.(post)}
        title="double-click to edit"
      >
        {post?.title}
      </div>
      <div className="post-list-item__btn--details">
        <Button
          type="link"
          shape="circle"
          icon={<RightOutlined />}
          onClick={() => onDetails?.(post)}
        />
      </div>
    </div>
  );
}

export default PostListItem;
