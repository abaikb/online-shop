import React, { useState } from 'react';
import axios from 'axios';
import styles from './RegistrationForm.module.css';
import BlackButton from '../blackButton/BlackButton';
import { Input } from 'antd';
import API_BASE_URL from '../../api/BASE_URL'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      'accept': 'application/json',
      'X-CSRFToken': 'Rl6v9oBwdXPRDrmB5iEExQENJl85CuGfMjvkpDMRLQCrRJKd6AmGzoimhNpVOL0u'
    };

    const data = {
      email,
      password,
      password2
    };

    try {
      const response = await axios.post({API_BASE_URL}, data, { headers });
      console.log('Успешный ответ от сервера:', response.data);
      setRegistrationSuccess(true); // Устанавливаем состояние успешной регистрации
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className={styles.Register} >
      <div className={styles.container}>
      <h1 className={styles.title}>Регистрация</h1>
      {registrationSuccess ? ( // Отображаем модальное окно при успешной регистрации
        <div className={styles.successModal}>
          <p>Регистрация успешна! Теперь вы можете войти на сайт.</p>
        </div>
      ) : (
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
          <div className={styles.inputContainer}>
            <label className={styles.label}>Подтвердите пароль:</label>
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <BlackButton type="submit" className={styles.button}>Зарегистрироваться</BlackButton>
        </form>
      )}
    </div>
    </div>
  );
}

export default RegistrationForm;
