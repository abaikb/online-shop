import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import axios from 'axios';
import API_BASE_URL from '../../api/BASE_URL';
import AntdConfig from '../../config/AntdConfig';
import styles from './LoginPage.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const postLogin = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/account/login/`, values);
      console.log('Login successful:', response.data);
      setModalContent('Вы успешно вошли в аккаунт!');
      setIsModalVisible(true);
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
    } catch (error) {
      console.error('Login error:', error);
      setModalContent('Возникла ошибка при входе в аккаунт!');
      setIsModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    if (modalContent === 'Вы успешно вошли в аккаунт!') {
      window.location.href = '/catalog';
    }
  };

  return (
    <section className={styles.login}>
      <div className="container">
        <AntdConfig>
          <h1 className="page_title">вход в аккаунт</h1>
          <div className={styles.wrapper}>
            <Form
              name="login"
              onFinish={postLogin}
              initialValues={{
                email: '',
                password: '',
              }}
              className={styles.form}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'введите email!',
                  },
                ]}
              >
                <Input placeholder="Email" size='large' />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'введите пароль!',
                  },
                ]}
              >
                <Input.Password placeholder="пароль" size='large' />
              </Form.Item>
              <Form.Item>
                <div className={styles.btn}>
                  <Button type="primary" htmlType="submit" loading={loading} size='large'>войти</Button>
                  <Link to="/register">
                    <Button size='large'>у меня нет аккаунта</Button>
                  </Link>
                </div>
              </Form.Item>
            </Form>
          </div>
          <Modal
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={() => setIsModalVisible(false)}
            footer={[
              <Button key="ok" type="primary" onClick={handleModalOk}>
                OK
              </Button>,
            ]}
            closable={false}
            className={styles.modal}
          >
            <p>{modalContent}</p>
          </Modal>
        </AntdConfig>
      </div>
    </section>
  );
};

export default LoginPage;
