import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import './index.scss';

export interface CommentFormInitialValues {
  name?: string | null;
  email?: string | null;
  body?: string | null;
}

export interface CommentFormValues {
  name: string;
  email: string;
  body: string;
}

interface CommentFormProps {
  onFinish?: (values: CommentFormValues) => void;
  onCancel?: () => void;
  initialValue?: CommentFormInitialValues | null;
  loading?: boolean;
}

function CommentForm({
  onFinish,
  onCancel,
  initialValue,
  loading,
}: CommentFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValue) {
      form.setFieldsValue(initialValue);
    } else {
      form.resetFields();
    }
  }, [form, initialValue]);

  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      className="comment-form"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true }]}
        initialValue={initialValue?.name}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true }, { type: 'email' }]}
        initialValue={initialValue?.email}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="body"
        label="Body"
        rules={[{ required: true }]}
        initialValue={initialValue?.body}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <div className="comment-form__actions">
          <Button type="default" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;
