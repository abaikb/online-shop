import React from "react";
import { useFavorite } from "../../context/FavoriteContext";
import { Button, Input, Card } from 'antd';
import styles from "./fav.module.css";
import AntdConfig from '../../config/AntdConfig';

const Favorite = () => {
  const { favorites } = useFavorite();

  return (
    <section className={styles.favorites}>
      <AntdConfig>
        <div className="container">
          {favorites.map((favorites) => (
            <Card
              key={favorites.id}
              cover={<div className={styles.cart_item_cover}><img src={favorites.image} /></div>}
              className={styles.cart_item}
            >
              <div className={styles.cart_item_content}>
                <h6>{favorites.name}</h6>
              </div>
            </Card>
          ))}
        </div>
      </AntdConfig>
    </section>
  );
};

export default Favorite;
