import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import API_BASE_URL from '../../api/BASE_URL';
import axios from 'axios';
import styles from './ProfilePage.module.css';

export default function ProfilePage() {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    date_birth: '',
    city: '',
    first_name: '',
    last_name: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token')).access;

        const response = await axios.get(`${API_BASE_URL}/account/get_profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { date_birth, city, first_name, last_name } = response.data;
        setUserData({
          date_birth: moment(date_birth),
          city,
          first_name,
          last_name,
        });

        form.setFieldsValue({
          date_birth: moment(date_birth),
          city,
          first_name,
          last_name,
        });
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    setIsLoading(true);

    values.date_birth = moment(values.date_birth).format('YYYY-MM-DD');

    try {
      const token = JSON.parse(localStorage.getItem('token')).access;

      const response = await axios.patch(
        `${API_BASE_URL}/account/edit_profile/`,
        values, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Updated user profile:', values);
    } catch (error) {
      console.error('Error updating user profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        date_birth: userData.date_birth,
        city: userData.city,
        password: '', 
        first_name: userData.first_name,
        last_name: userData.last_name,
      }}
    >
      <Form.Item label="Date of Birth" name="date_birth">
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>
      <Form.Item label="City" name="city">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item label="First Name" name="first_name">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="last_name">
        <Input />
      </Form.Item>
      <Form.Item label="Profile Image" name="profile_image">
        <Upload>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
