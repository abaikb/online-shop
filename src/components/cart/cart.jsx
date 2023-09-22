import React, { useState } from 'react';
import styles from './cart.module.css';
import { Button, Input, Card } from 'antd';
import AntdConfig from '../antdConfig/AntdConfig';

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
    console.log('Отправленные данные заказа:', formData);
    setFormData({
      name: '',
      address: '',
      phone: ''
    });
  };

  return (
    <section className={styles.cart}>
      <AntdConfig>
        <div className="container">
          <h2>корзина</h2>
          {cartItems.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <div>
              <div className={styles.cart_items}>
                {cartItems.map((cartItem) => (
                  <Card
                    key={cartItem.id}
                    cover={<div className={styles.cart_item_cover}><img src={cartItem.image} /></div>}
                    className={styles.cart_item}
                  >
                    <div className={styles.cart_item_content}>
                      <h6>{cartItem.name}</h6>
                      <div className={styles.cart_item_price}>
                        <p>{cartItem.quantity} шт.</p>
                        <p>{cartItem.price * cartItem.quantity} сом</p>
                      </div>
                      <div className={styles.cart_item_buttons}>
                        <Button onClick={() => incrementItem(cartItem.id)}>+</Button>
                        <Button onClick={() => decrementItem(cartItem.id)}>-</Button>
                        <Button onClick={() => removeFromCart(cartItem.id)}>Удалить</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <p>Общая стоимость: {calculateTotalPrice()} сом</p>
              {/* <div className={styles.orderForm}>
                <h3>Оформление заказа</h3>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Имя:</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="address">Адрес:</label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="phone">Телефон:</label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Button type="primary">Оформить заказ</Button>
                </form>
              </div> */}
            </div>
          )}
        </div>
      </AntdConfig>
    </section>
  );
};

export default Cart;