import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cart.module.css';
import { Button, Card } from 'antd';
import AntdConfig from '../../config/AntdConfig';

const Cart = ({ cartItems, removeFromCart, incrementItem, decrementItem }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  return (
    <div className={styles.cart}>
      <AntdConfig>
        <div className="container">
          {cartItems.length === 0 ? (
            <div className={styles.empty}>
              <h1 className="page_title">Корзина пуста</h1>
              <Link to="/catalog">
                <Button type="primary" size='large'>Каталог</Button>
              </Link>
            </div>
          ) : (
            <div>
              <h1 className="page_title">корзина</h1>
              <div className={styles.grid}>
                {cartItems.map((cartItem) => (
                  <Card
                    key={cartItem.id}
                    cover={<Link to={`/catalog/${cartItem.category}/${cartItem.id}`}><figure className={styles.cart_item_cover}><img src={cartItem.images} alt='Фото товара' /></figure></Link>}
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
                <div>
                  <div className={styles.checkout_link_title}>
                    <h4>Общая стоимость:</h4>
                    <p className={styles.checkout_price}>{calculateTotalPrice()} сом</p>
                  </div>
                  <Link to="/checkout">
                    <Button size='large' type='primary'>
                      Перейти к оплате
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </AntdConfig>
    </div >
  );
};

export default Cart;