import React, { useState, useContext, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/icons/logo.png';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from '../../context/FavoriteContext';
import SearchIcon from '../../assets/images/icons/svg/searchIcon';
import ProfileIcon from '../../assets/images/icons/svg/profileIcon';
import HeartIcon from '../../assets/images/icons/svg/heartIcon';
import CartIcon from '../../assets/images/icons/svg/cartIcon';
import { BurgerIcon } from '../../assets/images/icons/svg/burgerIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 748);
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoriteContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 748);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      {isMobile && isMenuOpen && (
        <nav className={styles.burger_nav}>
          <div className="container">
            <div className={styles.close_button}>
              <p onClick={closeMenu}>Закрыть</p>
            </div>
            <div className={styles.wrapper}>
              <ul>
                <Link>lorem ipsum</Link>
                <Link>lorem isdfsdfpsum</Link>
                <Link>lorem ipsum</Link>
                <Link>lorem ipsum</Link>
                <Link>lorem ipsum</Link>
                <Link>lorem isfpsum</Link>
                <Link>lorem ipsum</Link>
                <Link>lorem ipsum</Link>
              </ul>
              <ul>
                <Link>contact</Link>
                <Link>contacfsdfsdt</Link>
                <Link>contact</Link>
                <Link>contact</Link>
                <div>
                  <Link>contact</Link>
                  <Link>contact</Link>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      )}
      <div className="container">
        <nav className={styles.desktop_nav}>
          <div className={styles.header_nav}>
            {isMobile && (
              <button className={styles.burger_button} onClick={toggleMenu}>
                <BurgerIcon />
              </button>
            )}
            <Link to="/" className={styles.header_logo}>
              <img src={logo} alt="Логотип" />
            </Link>
          </div>
          {isMobile === false && (
            <ul>
              <Link>lorem</Link>
              <Link>lorem</Link>
              <Link>lorem</Link>
              <Link>lorem</Link>
              <Link>lorem</Link>
              <Link>lorem</Link>
            </ul>
          )}
          <ul>
            <Link>icon</Link>
            <Link>icon</Link>
            <Link>icon</Link>
            <Link>icon</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
