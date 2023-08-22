import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Логотип магазина" />
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li><a href="/">Главная</a></li>
          <li><a href="/catalog">Каталог</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Поиск" />
        <button>Найти</button>
      </div>
      <div className="cart">
        <a href="/cart">
          <img src="/path/to/cart-icon.png" alt="Иконка корзины" />
          <span>Корзина</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
