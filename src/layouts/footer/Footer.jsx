import React from 'react';
import logo from '../../assets/images/icons/logo.png';
import { BsTelegram, BsInstagram } from 'react-icons/bs';
import { FaViber, FaTiktok, FaGooglePay, FaApplePay } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiVisaLine } from 'react-icons/ri';
import { BiLogoMastercard } from 'react-icons/bi';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import AntdConfig from '../../config/AntdConfig';
import { Button, Input } from 'antd';
import payments from '../../assets/images/icons/payment-methods.png';

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
    </footer>
  );
};

export default Footer;
