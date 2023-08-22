import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const videoURL = 'https://katysoho.com.ua/wp-content/uploads/2023/07/herovideo2.mp4';

  return (
    <div className={styles.homePage}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.heroSection}>
          <h2>Добро пожаловать на главную страницу!</h2>
          <p>Здесь вы можете найти широкий выбор женских сумок.</p>
          <p>Просто перейдите в <Link className={styles.btn_catalog} to="/catalog">каталог</Link>, чтобы начать покупки.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
