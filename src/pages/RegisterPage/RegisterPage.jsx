import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import axios from 'axios';
import API_BASE_URL from '../../api/BASE_URL';
import AntdConfig from '../../config/AntdConfig';
import styles from './RegisterPage.module.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const postLogin = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/account/register/`, values);
      console.log('Login successful:', response.data);
      setModalContent('Вы успешно зарегистрировали аккаунт! Проверьте свой email чтобы подтвердить аккаунт.');
      setIsModalVisible(true);
    } catch (error) {
      console.error('Login error:', error);
      setModalContent('Возникла ошибка при регистрации аккаунта!');
      setIsModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    if (modalContent === 'Вы успешно зарегистрировали аккаунт! Проверьте свой email чтобы подтвердить аккаунт.') {
      window.location.href = '/login';
    }
  };

  return (
    <section className={styles.register}>
      <div className="container">
        <AntdConfig>
          <h1 className="page_title">регистрация аккаунта</h1>
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
                    message: 'Please enter your email!',
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
                    message: 'Please enter your password!',
                  },
                ]}
              >
                <Input.Password placeholder="пароль" size='large' />
              </Form.Item>
              <Form.Item
                name="password2"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password!',
                  },
                ]}
              >
                <Input.Password placeholder="подтвердите пароль" size='large' />
              </Form.Item>
              <Form.Item>
                <div className={styles.btn}>
                  <Button type="primary" htmlType="submit" loading={loading} size='large'>зарегистрироваться</Button>
                  <Link to="/login">
                    <Button size='large'>у меня есть аккаунт</Button>
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

export default RegisterPage;
