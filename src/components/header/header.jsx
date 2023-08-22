import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './image/icon/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.logo} ${styles.img}`}>
        <Link to="/" ><img src={logo} alt="Логотип магазина" /></Link>
      </div>

      {/* Добавляем класс burger только на мобильных устройствах */}
      <div className={`${styles.burger} ${styles.mobileOnly}`} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Добавляем класс navigation только на мобильных устройствах */}
      <nav className={`${styles.navigation} ${styles.mobileOnly} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles['nav-list']}>
          <li><Link to="tel:+1234567890"> +1234567890</Link></li>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/favorites"><FaHeart /></Link></li>
          <li><Link to="/cart"><FaShoppingCart /></Link></li>
          <li><Link to="/profile"><FaUser /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
