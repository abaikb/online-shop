import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../api/BASE_URL';
import styles from './DetailPage.module.css';
import { CartContext } from '../../context/CartContext';
import { useFavorite } from '../../context/FavoriteContext';

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, isItemInFavorites } = useFavorite();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get(`${API_BASE_URL}/product/get_product/${id}`);
        setProduct(response.data.results);
      }
      catch (error) {
        console.error('Ошибка при запросе:', error);
      }
    }
    getProduct();
  }, [id]);

  return (
    <section className={styles.details}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.img}>
          </div>
          <div className={styles.info}>
            <h2></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;