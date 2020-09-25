import { PlusOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import PostsList from '../../components/PostsList';
import userPostsQuery from '../../queries/userPostsQuery';
import { AddPost_createPost } from '../../types/AddPost';
import {
  GetUserPosts,
  GetUserPostsVariables,
  GetUserPosts_user_posts_data,
} from '../../types/GetUserPosts';
import { UpdatePost_updatePost } from '../../types/UpdatePost';
import DeletePostModal from './DeletePostModal';
import PostFormModal from './PostFormModal';

function PostsPage() {
  const { url } = useRouteMatch();
  const { push } = useHistory();
  const { userId } = useParams<{ userId: string }>();
  const pageSize = 3;
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<(GetUserPosts_user_posts_data | null)[]>(
    [],
  );

  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery<GetUserPosts, GetUserPostsVariables>(userPostsQuery, {
    variables: {
      id: userId,
      postsOptions: {
        paginate: {
          page,
          limit: pageSize,
        },
      },
    },
    onCompleted: (data) => setPosts(data.user?.posts?.data || []),
  });

  const [postModal, setPostModal] = useState<{
    post?: GetUserPosts_user_posts_data | null;
    visible?: boolean;
  }>({});

  const [deleteModal, setDeleteModal] = useState<{
    post?: GetUserPosts_user_posts_data | null;
    visible?: boolean;
  }>({});

  const handleFormSuccess = (
    post: AddPost_createPost | UpdatePost_updatePost | null,
  ) => {
    if (postModal.post?.id && postModal.post?.id === post?.id) {
      const index = posts.findIndex((c) => c?.id === post?.id);
      if (index >= 0) {
        setPosts([...posts.slice(0, index), post, ...posts.slice(index + 1)]);
      }
    } else {
      setPosts([post, ...posts]);
    }
    setPostModal({});
  };

  const handleDeleteSuccess = (post?: GetUserPosts_user_posts_data | null) => {
    if (deleteModal.post?.id && deleteModal.post?.id === post?.id) {
      setPosts(posts.filter((p) => p?.id !== post.id));
    }
    setDeleteModal({});
  };

  return (
    <div>
      <div style={{ textAlign: 'right' }}>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={() => setPostModal({ visible: true })}
        />
      </div>

      <PostsList
        loading={postsLoading}
        error={postsError != null}
        data={posts}
        totalCount={postsData?.user?.posts?.meta?.totalCount || 0}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onItemDoubleClick={(post) => setPostModal({ visible: true, post })}
        onItemDetails={(post) => post?.id && push(`${url}/${post?.id}`)}
        onItemDelete={(post) => setDeleteModal({ visible: true, post })}
      />

      <PostFormModal
        visible={postModal.visible}
        post={postModal.post}
        onCancel={() => setPostModal({})}
        onSuccess={handleFormSuccess}
      />

      <DeletePostModal
        visible={deleteModal.visible}
        post={deleteModal.post}
        onCancel={() => setDeleteModal({})}
        onSuccess={handleDeleteSuccess}
      />
    </div>
  );
}

export default PostsPage;
