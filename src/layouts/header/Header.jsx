import React, { useState, useContext } from 'react';
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
import BurgerMenu from '../../components/burgerMenu/BurgerMenu';

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
      {/* <BurgerMenu /> */}
      <div className="container">
        <nav className={styles.desktop_nav}>
          <BurgerIcon />
          <Link to="/" className={styles.header_logo}>
            <img src={logo} alt="Логотип" />
          </Link>
          <ul>
            <Link>lorem</Link>
            <Link>lorem</Link>
            <Link>lorem</Link>
            <Link>lorem</Link>
            <Link>lorem</Link>
            <Link>lorem</Link>
          </ul>
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
