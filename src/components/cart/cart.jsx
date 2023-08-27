import React, { useState } from 'react';
import styles from './cart.module.css';

const Cart = ({ cartItems, removeFromCart, incrementItem, decrementItem }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете обработать отправку данных заказа, например, через API
    console.log('Отправленные данные заказа:', formData);
    // Очистить форму после отправки, если необходимо
    setFormData({
      name: '',
      address: '',
      phone: ''
    });
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
                <div className={styles.buttons}>
                  <button onClick={() => incrementItem(cartItem.id)}>+</button>
                  <button onClick={() => decrementItem(cartItem.id)}>-</button>
                  <button onClick={() => removeFromCart(cartItem.id)}>Удалить</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Общая стоимость: {calculateTotalPrice()} сом</p>
          <div className={styles.orderForm}>
            <h3>Оформление заказа</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="address">Адрес:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="phone">Телефон:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Оформить заказ</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
