import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fontawesome/free-solid-svg-icons'; // Импортируйте useNavigate
import styles from './LoginForm.module.css';
import BlackButton from '../blackButton/BlackButton';
import { Input } from 'antd'

function LoginForm() {
  const navigate = useNavigate(); // Получите объект navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://34.107.117.216/account/login/';
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': 'Rl6v9oBwdXPRDrmB5iEExQENJl85CuGfMjvkpDMRLQCrRJKd6AmGzoimhNpVOL0u'
    };

    const data = {
      email,
      password
    };

    try {
      const response = await axios.post(url, data, { headers });
      const token = response.data;
      localStorage.setItem('token', JSON.stringify(token));
      console.log('Успешный ответ от сервера:', response.data);

      navigate('/catalog');
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      setLoginError(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h1 className={styles.title}>Вход</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Email:</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Пароль:</label>
            <div className={styles.passwordInput}>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                required
              />
              {/* <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              /> */}
            </div>
          </div>
          {loginError && (
            <p className={styles.error}>Ошибка входа. Проверьте email и пароль.</p>
          )}
          <BlackButton type="submit" className={styles.button}>Войти</BlackButton>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;