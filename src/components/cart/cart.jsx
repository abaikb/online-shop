import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import { Button, Input, Card } from 'antd';
import AntdConfig from '../antdConfig/AntdConfig';

const Cart = ({ cartItems, removeFromCart, incrementItem, decrementItem }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  return (
    <div className={styles.cart}>
      <AntdConfig>
        <div className="container">
          <h2 className="page_title">корзина</h2>
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
                        <Button onClick={() => decrementItem(cartItem.id)} disabled={cartItem.quantity === 1}>-</Button>
                        <Button onClick={() => removeFromCart(cartItem.id)} danger>Удалить</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className={styles.checkout_link}>
                <h4>Общая стоимость: <span>{calculateTotalPrice()} сом</span></h4>
                <Link to="/checkout">
                  <Button type="primary">
                    Перейти к оплате
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </AntdConfig>
    </div >
  );
};

export default Cart;