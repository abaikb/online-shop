import React, { useState, useContext, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/icons/logo.png';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from '../../context/FavoriteContext';
import { BurgerIcon, SearchIcon, CartIcon, ProfileIcon, HeartIcon } from '../../components/icons/Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
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

  const accessToken = localStorage.getItem('accessToken');

  return (
    <header className={styles.header}>
      {isMobile && isMenuOpen && (
        <nav className={styles.burger_nav}>
          <div className="container">
            <div className={styles.close_button}>
              <p onClick={closeMenu} className={styles.burger_link}>Закрыть</p>
            </div>
            <div className={styles.wrapper}>
              <ul>
                <Link className={styles.burger_link}>lorem ipsum</Link>
                <Link className={styles.burger_link}>lorem isdfsdfpsum</Link>
                <Link className={styles.burger_link}>lorem ipsum</Link>
                <Link className={styles.burger_link}>lorem ipsum</Link>
                <Link className={styles.burger_link}>lorem ipsum</Link>
                <Link className={styles.burger_link}>lorem isfpsum</Link>
                <Link className={styles.burger_link}>lorem ipsum</Link>
                <Link className={styles.burger_link}>lorem ipsum</Link>
              </ul>
              <ul>
                <Link className={styles.burger_link}>contact</Link>
                <Link className={styles.burger_link}>contacfsdfsdt</Link>
                <Link className={styles.burger_link}>contact</Link>
                <Link className={styles.burger_link}>contact</Link>
                <div>
                  <Link className={styles.burger_link}>contact</Link>
                  <Link className={styles.burger_link}>contact</Link>
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
              <button className={styles.burger_button} onClick={toggleMenu} >
                <BurgerIcon />
              </button>
            )}
            <Link to="/" className={styles.header_logo}>
              <img src={logo} alt="Логотип" />
            </Link>
          </div>
          {isMobile === false && (
            <ul>
              <Link to="/categories/clothes" className={styles.header_link}>lorem</Link>
              <Link to="/categories/clothes" className={styles.header_link}>lorem</Link>
              <Link to="/categories/clothes" className={styles.header_link}>lorem</Link>
              <Link to="/categories/clothes" className={styles.header_link}>lorem</Link>
              <Link to="/categories/clothes" className={styles.header_link}>lorem</Link>
              <Link to="/categories/clothes" className={styles.header_link}>lorem</Link>
            </ul>
          )}
          <ul className={styles.header_btn}>
            <Link to="/">
              <SearchIcon />
            </Link>
            {accessToken ? (
              <Link to="/profile">
                <ProfileIcon />
              </Link>
            ) : (
              <Link to="/login">
                <ProfileIcon />
              </Link>
            )}
            <Link to="/favorites">
              <HeartIcon />
              {favorites.length > 0 && <div className={styles.indicator}>{favorites.length}</div>}
            </Link>
            <Link to="/cart">
              <CartIcon />
              {cartItems.length > 0 && <div className={styles.indicator}>{cartItems.length}</div>}
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
