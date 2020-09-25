import { Button, Card } from 'antd';
import React from 'react';
import { GetUsers_users_data } from '../../types/GetUsers';

interface UserCardProps {
  user?: GetUsers_users_data | null;
  onDetails?: (userId: string) => void;
}

function UserCard({ user, onDetails }: UserCardProps) {
  return (
    <Card title={user?.name}>
      <p>{user?.phone}</p>
      <p>{user?.email}</p>
      <p>{user?.website}</p>
      <Button type="primary" onClick={() => user?.id && onDetails?.(user.id)}>
        Details
      </Button>
    </Card>
  );
}

export default UserCard;
