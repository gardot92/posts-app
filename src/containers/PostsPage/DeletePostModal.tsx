import { useMutation } from '@apollo/client';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import ErrorAlert from '../../components/ErrorAlert';
import deletePostMutation from '../../mutations/deletePostMutation';
import { DeletePost, DeletePostVariables } from '../../types/DeletePost';
import { GetUserPosts_user_posts_data } from '../../types/GetUserPosts';

interface DeletePostModalProps {
  visible?: boolean;
  post?: GetUserPosts_user_posts_data | null;
  onSuccess?: (post?: GetUserPosts_user_posts_data | null) => void;
  onCancel?: () => void;
}

function DeletePostModal({
  visible,
  post,
  onSuccess,
  onCancel,
}: DeletePostModalProps) {
  const [customError, setCustomError] = useState(false);
  const [deletePost, { loading, error }] = useMutation<
    DeletePost,
    DeletePostVariables
  >(deletePostMutation, {
    variables: {
      id: post?.id || '',
    },
    onCompleted: ({ deletePost }) => {
      if (deletePost) {
        onSuccess?.(post);
      } else {
        setCustomError(true);
      }
    },
  });

  return (
    <Modal
      title="Confirm"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      keyboard={!loading}
      maskClosable={!loading}
    >
      {(error || customError) && <ErrorAlert />}
      <p>Are you sure you want to delete post "{post?.title}"?</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="default" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button
          type="primary"
          onClick={() => deletePost()}
          loading={loading}
          style={{ marginLeft: 5 }}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}

export default DeletePostModal;
