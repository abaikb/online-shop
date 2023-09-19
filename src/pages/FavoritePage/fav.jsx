import React from "react";
import { useFavorite } from "../../FavoriteContext";
import styles from "./fav.module.css"; // Подключите стили

const Favorite = () => {
  const { favorites } = useFavorite();

  return (
    <div className={styles.favoriteContainer}>
      <h1 className={styles.favoriteHeading}>Favorite Items</h1>
      <ul className={styles.favoriteList}>
        {favorites.map((item) => (
          <li key={item.id} className={styles.favoriteItem}>
            <img src={item.image} alt={item.name} className={styles.itemImage} />
            <p className={styles.itemName}>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
