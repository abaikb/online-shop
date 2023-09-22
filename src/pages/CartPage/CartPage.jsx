import React, { useContext } from 'react';
import Cart from '../../components/cart/Cart';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const updateCartItemsAndLocalStorage = (newCartItems) => {
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const incrementItem = (itemId) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    updateCartItemsAndLocalStorage(updatedCartItems);
  };

  const decrementItem = (itemId) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === itemId && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    updateCartItemsAndLocalStorage(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    updateCartItemsAndLocalStorage(updatedCartItems);
  };

  return (
    <section>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} incrementItem={incrementItem} decrementItem={decrementItem} />
    </section>
  );
};

export default CartPage;