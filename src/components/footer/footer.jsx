import React from 'react';
import logo from '../image/icon/logo.png';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import AntdConfig from '../antdConfig/AntdConfig';
import { Button, Input } from 'antd';
const { Search } = Input;

const Footer = () => {
  
  const onSearch = () => {
    console.log('search')
  }

  return (
    <footer className={styles.footer}>
      <AntdConfig>
        <div className="container">
          <div className={styles.footer_wrapper}>
            <div className={styles.footer_logo}>
              <Link to="/">
                <img src={logo} alt="Логотип магазина" />
              </Link>
            </div>
            <div className={styles.footer_categories}>
              <h6>Категории</h6>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
            </div>
            <div className={styles.footer_faq}>
              <h6>Клиентам</h6>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
              <Link to="#">lorem ipsum dolor</Link>
            </div>
            <div className={styles.footer_contacts}>
              <h6>подписка на рассылку</h6>
              <Search
                placeholder="Ваш Email"
                allowClear
                enterButton="Подписаться"
                size="large"
                onSearch={onSearch}
              />
              <Link>katysoho.ua@gmail.com</Link>
              <Link>+380 (97) 407 92 83</Link>
              <Link>Написать в Viber</Link>
              <Link>Написать в Telegram</Link>
              <Link>lorem ipsum</Link>
              <div className={styles.footer_socials}>
                <Link>insta</Link>
                <Link>tiktok</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_legal}>@2023 - ENOT. Все права защищены.</div>
      </AntdConfig>
    </footer>
  );
};

export default Footer;
