import { useMutation } from '@apollo/client';
import { Modal } from 'antd';
import React, { useState } from 'react';
import CommentForm, { CommentFormValues } from '../../components/CommentForm';
import ErrorAlert from '../../components/ErrorAlert';
import addCommentMutation from '../../mutations/addCommentMutation';
import updateCommentMutation from '../../mutations/updateCommentMutation';
import {
  AddComment,
  AddCommentVariables,
  AddComment_createComment,
} from '../../types/AddComment';
import { GetPostComments_post_comments_data } from '../../types/GetPostComments';
import {
  UpdateComment,
  UpdateCommentVariables,
  UpdateComment_updateComment,
} from '../../types/UpdateComment';

interface CommentFormModalProps {
  visible?: boolean;
  comment?: GetPostComments_post_comments_data | null;
  onSuccess?: (
    comment: UpdateComment_updateComment | AddComment_createComment | null,
  ) => void;
  onCancel?: () => void;
}

function CommentFormModal({
  visible,
  comment,
  onSuccess,
  onCancel,
}: CommentFormModalProps) {
  const [customError, setCustomError] = useState(false);

  const [addComment, { loading: adding, error: addingError }] = useMutation<
    AddComment,
    AddCommentVariables
  >(addCommentMutation, {
    onCompleted: ({ createComment }) => {
      if (createComment?.id) {
        onSuccess?.(createComment);
      } else {
        setCustomError(true);
      }
    },
  });

  const [
    updateComment,
    { loading: updating, error: updatingError },
  ] = useMutation<UpdateComment, UpdateCommentVariables>(
    updateCommentMutation,
    {
      onCompleted: ({ updateComment }) => {
        if (updateComment?.id) {
          onSuccess?.(updateComment);
        } else {
          setCustomError(true);
        }
      },
    },
  );

  const isError = addingError || updatingError || customError;
  const saving = adding || updating;

  const handleSubmit = (values: CommentFormValues) => {
    setCustomError(false);
    if (comment?.id) {
      updateComment({ variables: { id: comment.id, input: values } });
    } else {
      addComment({ variables: { input: values } });
    }
  };

  return (
    <Modal
      title={comment?.id ? 'Edit comment' : 'Add comment'}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      keyboard={!saving}
      maskClosable={!saving}
    >
      {isError && <ErrorAlert />}
      <CommentForm
        onCancel={onCancel}
        onFinish={handleSubmit}
        loading={saving}
        initialValue={comment}
      />
    </Modal>
  );
}

export default CommentFormModal;
