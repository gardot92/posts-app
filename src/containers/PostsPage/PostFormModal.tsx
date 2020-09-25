import { useMutation } from '@apollo/client';
import { Modal } from 'antd';
import React, { useState } from 'react';
import ErrorAlert from '../../components/ErrorAlert';
import PostForm, { PostFormValues } from '../../components/PostForm';
import addPostMutation from '../../mutations/addPostMutation';
import updatePostMutation from '../../mutations/updatePostMutation';
import {
  AddPost,
  AddPostVariables,
  AddPost_createPost,
} from '../../types/AddPost';
import { GetUserPosts_user_posts_data } from '../../types/GetUserPosts';
import {
  UpdatePost,
  UpdatePostVariables,
  UpdatePost_updatePost,
} from '../../types/UpdatePost';

interface PostFormModalProps {
  visible?: boolean;
  post?: GetUserPosts_user_posts_data | null;
  onSuccess?: (post: AddPost_createPost | UpdatePost_updatePost | null) => void;
  onCancel?: () => void;
}

function PostFormModal({
  visible,
  post,
  onSuccess,
  onCancel,
}: PostFormModalProps) {
  const [customError, setCustomError] = useState(false);

  const [addPost, { loading: adding, error: addingError }] = useMutation<
    AddPost,
    AddPostVariables
  >(addPostMutation, {
    onCompleted: ({ createPost }) => {
      if (createPost?.id) {
        onSuccess?.(createPost);
      } else {
        setCustomError(true);
      }
    },
  });

  const [updatePost, { loading: updating, error: updatingError }] = useMutation<
    UpdatePost,
    UpdatePostVariables
  >(updatePostMutation, {
    onCompleted: ({ updatePost }) => {
      if (updatePost?.id) {
        onSuccess?.(updatePost);
      } else {
        setCustomError(true);
      }
    },
  });

  const isError = addingError || updatingError || customError;
  const saving = adding || updating;

  const handleSubmit = (values: PostFormValues) => {
    setCustomError(false);
    if (post?.id) {
      updatePost({ variables: { id: post.id, input: values } });
    } else {
      addPost({ variables: { input: values } });
    }
  };

  return (
    <Modal
      title={post?.id ? 'Edit post' : 'Add post'}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      keyboard={!saving}
      maskClosable={!saving}
    >
      {isError && <ErrorAlert />}
      <PostForm
        onCancel={onCancel}
        onFinish={handleSubmit}
        loading={saving}
        initialValue={post}
      />
    </Modal>
  );
}

export default PostFormModal;
