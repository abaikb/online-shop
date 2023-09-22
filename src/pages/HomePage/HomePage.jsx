import React from 'react';
import styles from './HomePage.module.css';
import bg from '../../assets/images/hero-bg.png';
import AntdConfig from '../../components/antdConfig/AntdConfig';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const HomePage = () => {

  return (
    <main className={styles.home}>
      <AntdConfig>
        <div className="container">
          <div className={styles.home_wrapper}>
            <div className={styles.home_bg}>
              <img src={bg} alt="Background" />
            </div>
            <div>
              <h2>Добро пожаловать на главную страницу!</h2>
              <p>Здесь вы можете найти широкий выбор женских сумок. Просто перейдите в <Link to="/catalog"><Button>каталог</Button></Link>, чтобы начать покупки.</p>
            </div>
          </div>
        </div>
      </AntdConfig>
    </main>
  );
};

export default HomePage;
