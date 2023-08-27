import React from 'react';
import styles from './BagCard.module.css';
import { FaShoppingCart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Импорт Link

const BagCard = ({ bag, addToCart }) => {
  return (
    <div className={styles.bagCard}>
      <Link to={`/catalog/${bag.id}`} className={styles.bagLink}> {/* Добавляем Link */}
        <img className={styles.bagImage} src={bag.image} alt={bag.name} />
        <div className={styles.bagInfo}>
          <div className={styles.header}>
            <h2 className={styles.bagName}>{bag.name}</h2>
            <div className={styles.icons}>
              <FaHeart className={styles.icon} />
              <p className={styles.bagPrice}>Цена: {bag.price} сом</p>
              <FaShoppingCart className={styles.icon} onClick={() => addToCart(bag)} />
            </div>
          </div>
          <p className={styles.bagDesc}>{bag.desc}</p>
          <div className={styles.bagPlace}>
            <FaMapMarkerAlt className={styles.locationIcon} />
            <p>{bag.place}</p>
          </div>
          <p className={styles.bagDate}>Дата: {bag.date}</p>
        </div>
      </Link>
    </div>
  );
};

export default BagCard;
