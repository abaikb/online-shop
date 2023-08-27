// CatalogPage.js
import React, { useEffect, useContext, useState } from 'react';
import BagCard from '../../components/BagCard/BagCard';
import styles from './CatalogPage.module.css';
import { CartContext } from '../../CartContext';

function CatalogPage() {
  const [bags, setBags] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://645366c8c18adbbdfe9c3b99.mockapi.io/shop/events');
        const data = await response.json();
        setBags(data);
      } catch (error) {
        console.error('Error fetching bags:', error);
      }
    }
    fetchData();
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className={styles.CatalogPage}>
      <h1>Женские сумки</h1>
      <div className={styles['bag-list']}>
        {bags.map((bag) => (
          <BagCard key={bag.id} bag={bag} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
