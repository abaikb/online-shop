import React, { useState } from 'react';
import styles from './BagCard.module.css';
import { FaShoppingCart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeartIcon from '../../assets/images/icons/svg/heartIcon';

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
    <div className={styles.bagCard}>
      <Link to={`/catalog/${product.id}`} className={styles.bagLink}>
        <img className={styles.bagImage} src={product.images} alt={product.name} />
      </Link>
      <div className={styles.bagInfo}>
        <div className={styles.header}>
          <h2 className={styles.bagName}>{product.name}</h2>
          <div className={styles.icons}>
            <p className={styles.bagPrice}>{product.price} сом</p>
            <div>
              <HeartIcon className={styles.svg_stroke} />
              <FaHeart
                className={`${styles.fav_icon} ${isFavorite ? styles.favorite : ''}`}
                onClick={() =>
                  isFavorite ? removeFromFavorites(product.id) : addToFavorites(product)
                }
              />
              <div className={styles.cartIconContainer}>
                <FaShoppingCart
                  className={`${styles.icon} ${styles.cartIcon}`}
                  onClick={handleAddToCart}
                />
                {showAddedMessage && (
                  <p className={styles.addedMessage}>Товар добавлен в корзину</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className={styles.bagDesc}>{product.desc}</p>
        <div className={styles.bagPlace}>
          <FaMapMarkerAlt className={styles.locationIcon} />
          <p>{product.place}</p>
        </div>
      </div>
    </div>
  );
};

export default BagCard;


