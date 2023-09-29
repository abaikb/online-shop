import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import API_BASE_URL from '../../api/BASE_URL';

const onFinish = async (values) => {
  const headers = {
    'accept': 'application/json',
    'X-CSRFToken': 'YfvpG5L7YMT3tm30vBQAROFzWALhMG1XBDUr0EzsrRlhzS2VmGOafmY9biSOUosM'
  };

  try {
    const response = await axios.post(`${API_BASE_URL}/account/login/`, values, { headers });
    console.log('Успешный ответ от сервера:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
  }
};


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginForm = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input type="email" />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Войти
      </Button>
    </Form.Item>
  </Form>
);

export default LoginForm;
