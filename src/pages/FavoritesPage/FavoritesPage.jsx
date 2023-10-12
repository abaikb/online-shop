import React from "react";
import { useFavorite } from "../../context/FavoriteContext";
import { Button, Input, Card } from 'antd';
import styles from './FavoritesPage.module.css';
import AntdConfig from '../../config/AntdConfig';
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites } = useFavorite();

  return (
    <section className={styles.favorites}>
      <AntdConfig>
        <div className="container">
          <h1 className="page_title">избранные товары</h1>
          <div className={styles.grid}>
            {favorites.map((favorites) => (
              <Card
                key={favorites.id}
                cover={<Link to={`/catalog/${favorites.category}/${favorites.id}`}><figure className={styles.cover}><img src={favorites.images} alt='Фото товара' /></figure></Link>}
                className={styles.item}
              >
                <div className={styles.content}>
                  <div>
                    <h6 className={styles.item_title}>{favorites.name}</h6>
                    <h6 className={styles.item_category}>{favorites.category}</h6>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AntdConfig>
    </section>
  );
};

export default FavoritesPage;
