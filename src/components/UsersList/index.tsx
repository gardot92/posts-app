import { List } from 'antd';
import React from 'react';
import { GetUsers_users_data } from '../../types/GetUsers';
import ErrorAlert from '../ErrorAlert';
import UserCard from '../UserCad';

interface UsersListProps {
  data?: (GetUsers_users_data | null)[];
  totalCount?: number;
  loading?: boolean;
  error?: boolean;
  page?: number;
  onPageChange?: (page: number) => void;
  pageSize?: number;
  onItemDetails?: (userId: string) => void;
}

function UsersList({
  loading,
  error,
  data = [],
  totalCount = 0,
  page = 1,
  onPageChange,
  pageSize = 10,
  onItemDetails,
}: UsersListProps) {
  return (
    <div>
      {error && <ErrorAlert />}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={data}
        pagination={{
          pageSize,
          current: page,
          total: totalCount,
          hideOnSinglePage: true,
          onChange: (page) => onPageChange?.(page),
        }}
        loading={loading}
        rowKey={(user) => user?.id || ''}
        renderItem={(user) => (
          <List.Item>
            <UserCard user={user} onDetails={onItemDetails} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default UsersList;
