import React from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import styles from './Header.module.css';
import logo from './image/icon/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.logo} ${styles.img}`}>
        <img src={logo} alt="Логотип магазина" />
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Поиск" />
        <button>Найти</button>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles['nav-list']}>
          <li><a href="/">Главная</a></li>
          <li><a href="/catalog">Каталог</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/contact">Контакты</a></li>
          <li><a href="/favorites"><FaHeart /> </a></li>
          <li><a href="/cart"><FaShoppingCart /> </a></li>
          <li><a href="/profile"><FaUser /> </a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
