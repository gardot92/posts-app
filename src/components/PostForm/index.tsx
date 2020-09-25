import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import './index.scss';

export interface PostFormInitialValues {
  title?: string | null;
  body?: string | null;
}

export interface PostFormValues {
  title: string;
  body: string;
}

interface PostFormProps {
  onFinish?: (values: PostFormValues) => void;
  onCancel?: () => void;
  initialValue?: PostFormInitialValues | null;
  loading?: boolean;
}

function PostForm({
  onFinish,
  onCancel,
  initialValue,
  loading,
}: PostFormProps) {
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
      className="post-form"
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true }]}
        initialValue={initialValue?.title}
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
        <div className="post-form__actions">
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

export default PostForm;
