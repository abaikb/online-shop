import React from 'react';
import styles from './HomePage.module.css';
import AntdConfig from '../../config/AntdConfig';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/hero-bg.png';
import MainButton from '../../components/ui/MainButton/MainButton';

const HomePage = () => {

  return (
    <main className={styles.home}>
      <AntdConfig>
        <div className="container">
          <div className={styles.home_wrapper}>
            <div className={styles.home_bg}>
              <img src={bg} alt="Фон" />
            </div>
            <div className={styles.desc}>
              <h1 className='page_title'>Добро пожаловать на главную страницу!</h1>
              <Link to="/catalog">
                <MainButton size="large" type="primary">каталог</MainButton>
              </Link>
            </div>
          </div>
        </div>
      </AntdConfig>
    </main>
  );
};

export default HomePage;
