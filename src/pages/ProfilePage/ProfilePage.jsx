import React from 'react';
import AntdConfig from '../../config/AntdConfig';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import API_BASE_URL from '../../api/BASE_URL';

export default function ProfilePage() {

  const signOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const token = localStorage.getItem('accessToken');

  const requestHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/account/profile/`, requestHeaders);
      console.log('Success:', response.data);
    }
    catch (error) {
      console.error("Error:", error);
    }
  };

  getProfile();

  const patchProfile = async (values) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/account/profile/`, values, requestHeaders);
      console.log('Success:', response.data);
    }
    catch (error) {
      console.error("Произошла ошибка:", error);
    }
  };

  return (
    <section>
      <div className="container">
        <AntdConfig>
          <Form
            name="patch_profile"
            onFinish={patchProfile}
            initialValues={{
              last_login: "",
              is_superuser: false,
              first_name: "",
              is_staff: false,
              date_joined: "",
              email: "",
              password: "",
              name: "",
              last_name: "",
              date_birth: "",
              city: "",
              is_active: true,
              is_company: false,
              is_user: true,
              activation_code: "",
              groups: [0],
              user_permissions: [0]
            }}
          >
            <Form.Item name="first_name">
              <Input placeholder='name' />
            </Form.Item>
            <Form.Item name="last_name">
              <Input placeholder='last name' />
            </Form.Item>
            <Form.Item name="city">
              <Input placeholder='city' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>изменить</Button>
              <Button type='primary' danger onClick={signOut}>выйти</Button>
            </Form.Item>
          </Form>
        </AntdConfig>
      </div>
    </section>
  );
}
