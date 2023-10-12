import React from "react";
import { useFavorite } from "../../context/FavoriteContext";
import { Card } from "antd";
import styles from "./FavoritesPage.module.css";
import AntdConfig from "../../config/AntdConfig";
import { Link } from "react-router-dom";
import { HeartIcon } from "../../components/icons/Icons";
import MainButton from '../../components/ui/MainButton/MainButton'

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorite();

  return (
    <section className={styles.favorites}>
      <AntdConfig>
        <div className="container">
          {favorites.length === 0 ? (
            <div className={styles.empty}>
              <h1 className="page_title">нет избранных товаров</h1>
              <Link to="/catalog">
                <MainButton type="primary" size='large'>Каталог</MainButton>
              </Link>
            </div>
          ) : (
            <div>
              <h1 className="page_title">избранные товары</h1>
              <div className={styles.grid}>
                {favorites.map((favorite) => (
                  <Card
                    key={favorite.id}
                    cover={
                      <Link to={`/catalog/${favorite.category}/${favorite.id}`}>
                        <figure className={styles.cover}>
                          <img src={favorite.images} alt="Фото товара" />
                        </figure>
                      </Link>
                    }
                    className={styles.item}
                  >
                    <div className={styles.content}>
                      <div>
                        <h6 className={styles.item_title}>{favorite.name}</h6>
                        <h6 className={styles.item_category}>{favorite.category}</h6>
                      </div>
                      <HeartIcon onClick={() => removeFromFavorites(favorite.id)} />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </AntdConfig>
    </section>
  );
};

export default FavoritesPage;
