import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {

  return (
    <div className={styles.homePage}>
      <div >
        {/* <div>
          <img src="https://katysoho.com.ua/wp-content/uploads/2023/04/hero-2.png" alt="" />

        </div> */}
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
