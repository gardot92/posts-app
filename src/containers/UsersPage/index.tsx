import React, { useState } from 'react';
import usersQuery from '../../queries/usersQuery';
import { GetUsers, GetUsersVariables } from '../../types/GetUsers';
import { useQuery } from '@apollo/client';
import UsersList from '../../components/UsersList';
import { useHistory } from 'react-router-dom';

function UsersPage() {
  const history = useHistory();
  const pageSize = 4;
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery<GetUsers, GetUsersVariables>(
    usersQuery,
    {
      variables: {
        options: {
          paginate: {
            page,
            limit: pageSize,
          },
        },
      },
    },
  );

  return (
    <UsersList
      loading={loading}
      error={error != null}
      data={data?.users?.data || []}
      totalCount={data?.users?.meta?.totalCount || 0}
      page={page}
      pageSize={pageSize}
      onPageChange={setPage}
      onItemDetails={(userId) => history.push(`/user/${userId}`)}
    />
  );
}

export default UsersPage;
