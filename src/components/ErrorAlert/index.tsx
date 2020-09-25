import { Alert } from 'antd';
import React from 'react';

interface ErrorAlertProps {
  message?: string;
}

function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <Alert
      message={message || 'Something went wrong'}
      type="warning"
      showIcon
      style={{ marginBottom: 20 }}
    />
  );
}

export default ErrorAlert;
