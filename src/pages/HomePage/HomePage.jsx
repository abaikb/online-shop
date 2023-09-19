import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import BlackButton from '../../components/antdConfig/AntdConfig';

const HomePage = () => {

  return (
    <main className={styles.homePage}>
      <div className={styles.heroSection}>
        <h2>Добро пожаловать на главную страницу!</h2>
        <p>Здесь вы можете найти широкий выбор женских сумок.</p>
        <p>Просто перейдите в <BlackButton to="/catalog">каталог</BlackButton>, чтобы начать покупки.</p>
      </div>
    </main>
  );
};

export default HomePage;
