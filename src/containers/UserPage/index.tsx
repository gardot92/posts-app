import React from 'react';
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GetUser, GetUserVariables } from '../../types/GetUser';
import userQuery from '../../queries/userQuery';
import { PageHeader, Spin } from 'antd';
import PostPage from '../PostPage';
import PostsPage from '../PostsPage';
import ErrorAlert from '../../components/ErrorAlert';

function UserPage() {
  const { path } = useRouteMatch();
  const { goBack } = useHistory();
  const { userId } = useParams<{ userId: string }>();
  const { loading, error, data } = useQuery<GetUser, GetUserVariables>(
    userQuery,
    {
      variables: {
        id: userId,
      },
    },
  );

  return (
    <div>
      <Spin spinning={loading}>
        <PageHeader ghost={false} onBack={goBack} title={data?.user?.name} />
      </Spin>

      {error && <ErrorAlert />}

      <Switch>
        <Route exact path={path}>
          <PostsPage />
        </Route>
        <Route exact path={`${path}/:postId`}>
          <PostPage />
        </Route>
      </Switch>
    </div>
  );
}

export default UserPage;
