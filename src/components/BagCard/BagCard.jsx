import React, { useState } from 'react';
import styles from './BagCard.module.css';
import { Link } from 'react-router-dom';
import { HeartIcon, CartIcon } from '../icons/Icons';

const BagCard = ({ product, addToCart, addToFavorites, removeFromFavorites, isFavorite }) => {
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowAddedMessage(true);

    setTimeout(() => {
      setShowAddedMessage(false);
    }, 2000);
  };

  return (
    <article className={styles.card}>
      <Link to="/">
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
          <HeartIcon />
          <CartIcon />
        </div>
      </div>
    </article>
  );
};

export default BagCard;


