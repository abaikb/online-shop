import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../api/BASE_URL';
import styles from './DetailPage.module.css';
// import { CartContext } from '../../context/CartContext';
// import { useFavorite } from '../../context/FavoriteContext';
import MainButton from '../../components/ui/MainButton/MainButton';

const DetailPage = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState(null);
  // const { cartItems, setCartItems } = useContext(CartContext);
  // const { addToFavorites, removeFromFavorites, isItemInFavorites } = useFavorite();

  // useEffect(() => {
  //   async function getProduct() {
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}/product/get_product/${id}`);
  //       setProduct(response.data.results);
  //     }
  //     catch (error) {
  //       console.error('Ошибка при запросе:', error);
  //     }
  //   }
  //   getProduct();
  // }, [id]);

  const imgLink = 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

  return (
    <section className={styles.details}>
      <div className="container">
        <div className={styles.grid}>
          <figure className={styles.img}>
            <img src={imgLink} alt="Фото товара" />
          </figure>
          <div className={styles.info}>
            <h2>product name</h2>
            <h3>product category</h3>
            <h4>product price</h4>
            <div className={styles.btn}>
              <MainButton type='primary'>добавить в корзину</MainButton>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea quibusdam, molestiae nesciunt minus nemo. Repudiandae, molestiae dignissimos ipsam consectetur rerum sit facere aperiam iure, dolorem exercitationem commodi omnis quod?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;