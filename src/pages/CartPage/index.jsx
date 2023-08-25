import React, { useState, useEffect } from 'react';
import Cart from '../../components/cart/cart';
import BagCard from '../../components/BagCard/BagCard';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [bags, setBags] = useState([]);

  useEffect(() => {
    async function fetchBags() {
      try {
        const response = await fetch('https://645366c8c18adbbdfe9c3b99.mockapi.io/shop/events');
        const data = await response.json();
        setBags(data);
      } catch (error) {
        console.error('Error fetching bags:', error);
      }
    }

    fetchBags();

    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever cartItems change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  return (
    <>
      <div className="catalog-container">
        {bags.map((bag) => (
          <BagCard key={bag.id} bag={bag} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </>
  );
};

export default CartPage;
