import React, { useState } from 'react';
import axios from 'axios';
// import styles from './RegistrationForm.module.css';
import { Button, Form, Input, Typography, Modal } from 'antd';
import API_BASE_URL from '../../api/BASE_URL';
import AntdConfig from '../../config/AntdConfig';

const { Text } = Typography;

function RegistrationForm() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const headers = {
      'accept': 'application/json',
      'X-CSRFToken': 'YfvpG5L7YMT3tm30vBQAROFzWALhMG1XBDUr0EzsrRlhzS2VmGOafmY9biSOUosM'
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/account/register/`, values, { headers });
      console.log('Успешный ответ от сервера:', response.data);
      setRegistrationSuccess(true);
      showModal();
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      showModal();
    }
  };

  const validatePassword = (rule, value, callback) => {
    const containsCapitalLetter = /[A-Z]/.test(value);
    const containsNumber = /\d/.test(value);
    const isLengthValid = value.length >= 8;

    if (!containsCapitalLetter || !containsNumber || !isLengthValid) {
      callback('Пароль должен содержать хотя бы одну заглавную букву, одну цифру и быть не менее 8 символов длиной');
    } else {
      callback();
    }
  };

  const validatePassword2 = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Пароли не совпадают');
    } else {
      callback();
    }
  };

  const validateAllFields = () => {
    form.validateFields().then(() => {
      setIsButtonDisabled(false);
    }).catch(() => {
      setIsButtonDisabled(true);
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  return (
    <AntdConfig>
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Введите настоящий email!',
              type: 'email',
            },
          ]}
        >
          <Input onChange={validateAllFields} />
        </Form.Item>

        <Form.Item
          label="пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите пароль!',
            },
            {
              validator: validatePassword,
            },
          ]}
        >
          <Input.Password onChange={validateAllFields} />
        </Form.Item>
        <Form.Item
          label="подтвердите пароль"
          name="password2"
          rules={[
            {
              required: true,
              message: 'Подтвердите пароль!',
            },
            {
              validator: validatePassword2,
            },
          ]}
        >
          <Input.Password onChange={validateAllFields} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" disabled={isButtonDisabled}>
            Зарегистрироваться
          </Button>
        </Form.Item>

        <Form.Item>
          <Text type="warning">Пароль должен содержать хотя бы одну заглавную букву, одну цифру и быть не менее 8 символов длиной</Text>
        </Form.Item>
      </Form>
      <Modal
        title={registrationSuccess ? 'Регистрация успешна' : 'Ошибка при регистрации'}
        visible={isModalVisible}
        onOk={handleModalOk}
        okText="OK"
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        {registrationSuccess ? 'Вы успешно зарегистрировались. Проверьте свой email чтобы подтвердить свой аккаунт.' : 'Произошла ошибка при регистрации. Попробуйте еще раз.'}
      </Modal>
    </AntdConfig>
  );
}

export default RegistrationForm;
