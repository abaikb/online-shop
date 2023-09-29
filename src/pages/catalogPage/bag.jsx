import React, { useEffect, useContext, useState } from 'react';
import BagCard from '../../components/BagCard/BagCard';
import styles from './CatalogPage.module.css';
import { CartContext } from '../../context/CartContext';
import { useFavorite } from "../../context/FavoriteContext";

function CatalogPage() {
  const [bags, setBags] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites, isItemInFavorites } =
  useFavorite();

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
    <section className={styles.CatalogPage}>
      <div className="container">
        
      <h2 className="page_title">каталог</h2>
      <div className={styles.bag_grid}>
        {bags.map((bag) => (
          <BagCard
          key={bag.id}
          bag={bag}
          addToCart={addToCart}
          addToFavorites={() => addToFavorites(bag)}
          removeFromFavorites={() => removeFromFavorites(bag.id)}
          isFavorite={isItemInFavorites(bag.id)
          }
          />
          ))}
          </div>
      </div>
    </section>
  );
}

export default CatalogPage;
