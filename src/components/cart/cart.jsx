import React from 'react';
import styles from './cart.module.css';

const Cart = ({ cartItems, removeFromCart }) => {
  // Logic to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  return (
    <div className={styles.cart}>
      <h2>Ваша корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.name} - {cartItem.quantity} шт. - {cartItem.price * cartItem.quantity} сом
                <button onClick={() => removeFromCart(cartItem.id)}>Удалить</button>
              </li>
            ))}
          </ul>
          <p>Общая стоимость: {calculateTotalPrice()} сом</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
