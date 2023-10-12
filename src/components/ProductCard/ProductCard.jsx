import React from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { HeartIcon, CartIcon } from '../icons/Icons';
import { notification } from 'antd';
import AntdConfig from '../../config/AntdConfig';

const ProductCard = ({ product, addToCart, addToFavorites, removeFromFavorites, isFavorite }) => {
  const [api, contextHolder] = notification.useNotification();

  const addSuccess = () => {
    api.open({
      message: 'Товар успешно добавлен в корзину!',
      duration: 1,
    });
  };

  const handleAddToCart = () => {
    addToCart(product);
    addSuccess();
  };

  return (
    <article className={styles.card}>
      <AntdConfig>
        {contextHolder}
        <Link to={`/catalog/${product.category}/${product.id}`}>
          <div className={styles.img}>
            <img src={product.images} alt={product.name} />
          </div>
        </Link>
        <div className={styles.card_info}>
          <div>
            <h4>{product.name}</h4>
            <p>{product.price} сом</p>
          </div>
          <div className={styles.btn}>
            <HeartIcon onClick={() => isFavorite ? removeFromFavorites(product.id) : addToFavorites(product)} />
            <CartIcon onClick={handleAddToCart} />
          </div>
        </div>
      </AntdConfig>
    </article>
  );
};

export default ProductCard;


