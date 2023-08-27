import React, { useState } from 'react';
import styles from './BagCard.module.css';
import { FaShoppingCart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BagCard = ({ bag, addToCart }) => {
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(bag);
    setShowAddedMessage(true);

    setTimeout(() => {
      setShowAddedMessage(false);
    }, 2000);
  };

  return (
    <div className={styles.bagCard}>
      <Link to={`/catalog/${bag.id}`} className={styles.bagLink}>
        <img className={styles.bagImage} src={bag.image} alt={bag.name} />
      </Link>
      <div className={styles.bagInfo}>
        <div className={styles.header}>
          <h2 className={styles.bagName}>{bag.name}</h2>
          <div className={styles.icons}>
            <FaHeart className={styles.icon} />
            <div className={styles.cartIconContainer}>
              <FaShoppingCart
                className={`${styles.icon} ${styles.cartIcon}`}
                onClick={handleAddToCart}
              />
              {showAddedMessage && (
                <p className={styles.addedMessage}>Товар добавлен в корзину</p>
              )}
            </div>
            <p className={styles.bagPrice}>Цена: {bag.price} сом</p>
          </div>
        </div>
        <p className={styles.bagDesc}>{bag.desc}</p>
        <div className={styles.bagPlace}>
          <FaMapMarkerAlt className={styles.locationIcon} />
          <p>{bag.place}</p>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
