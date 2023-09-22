import React, { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import RegistrationForm from '../../components/register/RegistrationForm';
import styles from './LoginPage.module.css'; 

const LoginPage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  return (
    <div className={styles.loginPage}>
      <div className={styles.formToggle}>
        <button
          onClick={() => setIsLoginFormVisible(true)}
          className={isLoginFormVisible ? styles.active : ''}
        >
          Войти
        </button>
        <button
          onClick={() => setIsLoginFormVisible(false)}
          className={!isLoginFormVisible ? styles.active : ''}
        >
          Зарегаться
        </button>
      </div>
      {isLoginFormVisible ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default LoginPage;
