import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../image/icon/logo.png';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerLogo}>
                    <Link to="/" ><img src={logo} alt="Логотип магазина" /></Link>
                    {/* <p>Ваш лучший выбор сумок</p> */}
                </div>
                <div className={styles.footerLinks}>
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/catalog">Каталог</a></li>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/contact">Контакты</a></li>
                    </ul>
                </div>
                <div className={styles.footerContact}>
                    <p>Свяжитесь с нами:</p>
                    <p>Email: <a href="mailto:info@example.com">enot-store@gmail.com</a></p>
                    <p>Телефон: 0776259215</p>
                </div>
            </div>
            <div className={styles.footerLaw}>
                @2023 - ENOT. Все права защищены.
            </div>
        </footer>
    );
};

export default Footer;
