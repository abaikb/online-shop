import React, { useState, useContext } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/icons/logo.png';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from '../../context/FavoriteContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoriteContext);

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
      <div className={styles.header_categories}>
        <li onClick={closeMenu}><Link>lorem</Link></li>
        <li onClick={closeMenu}><Link>lorem</Link></li>
        <li onClick={closeMenu}><Link>lorem</Link></li>
        <li onClick={closeMenu}><Link>lorem</Link></li>
        <li onClick={closeMenu}><Link>lorem</Link></li>
        <li onClick={closeMenu}><Link>lorem</Link></li>
      </div>
      <div className={`${styles.burger} ${styles.mobileOnly}`} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`${styles.navigation} ${styles.mobileOnly} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.header_nav}>
          <div className={styles.header_icons}>
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
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
