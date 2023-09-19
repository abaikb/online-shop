import React, { useState, useContext } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../image/icon/logo.png';
import { CartContext } from '../../CartContext'; // Импортируйте контекст для корзины
import { FavoriteContext } from '../../FavoriteContext'; // Импортируйте контекст для избранного

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // Получите данные о корзине из контекста
  const { favorites } = useContext(FavoriteContext); // Получите данные об избранном из контекста

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.logo} ${styles.img}`}>
        <Link to="/">
          <img src={logo} alt="Логотип магазина" />
        </Link>
      </div>

      <div className={`${styles.burger} ${styles.mobileOnly}`} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`${styles.navigation} ${styles.mobileOnly} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles['nav-list']}>
          <li onClick={closeMenu}>
            <Link to="tel:+1234567890"> +1234567890</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link>
              <FaSearch />
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/favorites">
              <FaHeart />
              {favorites.length > 0 && <span className={styles.indicator}>{favorites.length}</span>}
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/cart">
              <FaShoppingCart />
              {cartItems.length > 0 && <span className={styles.indicator}>{cartItems.length}</span>}
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/profile">


              <FaUser />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
