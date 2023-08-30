import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5) {
      setPasswordError('Password should be at least 5 characters long');
      return;
    }
    if (!email.includes('@')) {
      setEmailError('Invalid email format');
      return;
    }
    // Здесь обработка логина
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError('');
        }}
      />
      {emailError && <p className={styles.error}>{emailError}</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError('');
        }}
      />
      {passwordError && <p className={styles.error}>{passwordError}</p>}
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
