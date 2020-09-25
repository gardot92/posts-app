import { useQuery } from '@apollo/client';
import { Button, Spin } from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from '../../components/CommentsList';
import ErrorAlert from '../../components/ErrorAlert';
import postCommentsQuery from '../../queries/postCommentsQuery';
import postQuery from '../../queries/postQuery';
import { AddComment_createComment } from '../../types/AddComment';
import { GetPost, GetPostVariables } from '../../types/GetPost';
import {
  GetPostComments,
  GetPostCommentsVariables,
  GetPostComments_post_comments_data,
} from '../../types/GetPostComments';
import { UpdateComment_updateComment } from '../../types/UpdateComment';
import CommentFormModal from './CommentFormModal';

function PostPage() {
  const pageSize = 3;
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState<
    (GetPostComments_post_comments_data | null)[]
  >([]);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const { postId } = useParams<{ postId: string }>();

  const { loading: postLoading, error: postError, data: postData } = useQuery<
    GetPost,
    GetPostVariables
  >(postQuery, {
    variables: {
      id: postId,
    },
  });

  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery<GetPostComments, GetPostCommentsVariables>(postCommentsQuery, {
    variables: {
      id: postId,
      commentsOptions: {
        paginate: {
          page,
          limit: pageSize,
        },
      },
    },
    skip: !commentsVisible,
    onCompleted: (data) => setComments(data.post?.comments?.data || []),
  });

  const [commentModal, setCommentModal] = useState<{
    comment?: GetPostComments_post_comments_data | null;
    visible?: boolean;
  }>({});

  const handleFormSuccess = (
    comment: UpdateComment_updateComment | AddComment_createComment | null,
  ) => {
    if (commentModal?.comment?.id && commentModal.comment.id === comment?.id) {
      const index = comments.findIndex((c) => c?.id === comment?.id);
      if (index >= 0) {
        setComments([
          ...comments.slice(0, index),
          comment,
          ...comments.slice(index + 1),
        ]);
      }
    } else {
      setComments([comment, ...comments]);
    }
    setCommentModal({});
  };

  return (
    <div>
      {(postError || (!postLoading && !postData?.post?.id)) && <ErrorAlert />}

      <Spin spinning={postLoading}>
        <h2>{postData?.post?.title}</h2>
        <p>{postData?.post?.body}</p>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            style={{ padding: 0 }}
            type="link"
            onClick={() => setCommentsVisible(!commentsVisible)}
          >
            {commentsVisible ? 'Hide comments' : 'Show comments'}
          </Button>
          {commentsVisible && (
            <Button
              style={{ padding: 0 }}
              type="link"
              onClick={() => setCommentModal({ visible: true })}
            >
              Add comment
            </Button>
          )}
        </div>
      </Spin>

      {commentsVisible && (
        <CommentsList
          loading={commentsLoading}
          error={commentsError != null}
          data={comments}
          totalCount={commentsData?.post?.comments?.meta?.totalCount || 0}
          page={page}
          pageSize={pageSize}
          onPageChange={setPage}
          onItemDoubleClick={(comment) =>
            setCommentModal({ visible: true, comment })
          }
        />
      )}

      <CommentFormModal
        visible={commentModal.visible}
        comment={commentModal.comment}
        onCancel={() => setCommentModal({})}
        onSuccess={handleFormSuccess}
      />
    </div>
  );
}

export default PostPage;
