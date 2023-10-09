import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/icons/logo.png';
import { BsTelegram, BsInstagram } from 'react-icons/bs';
import { FaViber, FaTiktok, FaGooglePay, FaApplePay } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import AntdConfig from '../../config/AntdConfig';
import { Input } from 'antd';
import payments from '../../assets/images/icons/payment-methods.png';

const { Search } = Input;

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 748);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onSearch = () => {
    console.log('search');
  };

  return (
    <footer className={styles.footer}>
      {isMobile === false && (
        <AntdConfig>
          <div className="container">
            <div className={styles.footer_wrapper}>
              <div className={styles.footer_logo}>
                <Link to="/">
                  <img src={logo} alt="Логотип магазина" />
                </Link>
                <div className={styles.footer_payments}>
                  <img src={payments} alt="Методы оплаты" />
                </div>
              </div>
              <div className={styles.footer_categories}>
                <h6>Категории</h6>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
              </div>
              <div className={styles.footer_faq}>
                <h6>Клиентам</h6>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
                <Link to="#">lorem</Link>
              </div>
              <div className={styles.footer_contacts}>
                <h6>подписка на рассылку</h6>
                <div className={styles.footer_input}>
                  <Search
                    placeholder="Ваш Email"
                    enterButton="Подписаться"
                    size="large"
                    bordered={false}
                    onSearch={onSearch}
                  />
                </div>
                <Link>katysoho.ua@gmail.com</Link>
                <Link>+380 (97) 407 92 83</Link>
                <Link><FaViber />Написать в Viber</Link>
                <Link><BsTelegram /> Написать в Telegram</Link>
                <Link><HiOutlineLocationMarker />Location</Link>
                <div className={styles.footer_socials}>
                  <Link><BsInstagram />Instagram</Link>
                  <Link><FaTiktok />TikTok</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer_legal}>@2023 - ENOT. Все права защищены.</div>
        </AntdConfig>
      )}
      {isMobile === true && (
        <section>
          mobile
        </section>
      )}
    </footer>
  );
};

export default Footer;
