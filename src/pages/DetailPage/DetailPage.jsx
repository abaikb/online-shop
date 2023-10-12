import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailPage.module.css';
import MainButton from '../../components/ui/MainButton/MainButton';
import { CartContext } from '../../context/CartContext';

const DetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const imgLink =
    'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = () => {
    const productToAdd = {
      id,
      quantity,
    };

    setCartItems([...cartItems, productToAdd]);
  };

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
              <div className={styles.quantity}>
                <button type="link" onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button type="link" onClick={increaseQuantity}>+</button>
              </div>
              <MainButton type="primary" size="large" className={styles.add} onClick={addToCart}>
                добавить в корзину
              </MainButton>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea quibusdam, molestiae nesciunt minus nemo.
              Repudiandae, molestiae dignissimos ipsam consectetur rerum sit facere aperiam iure, dolorem exercitationem
              commodi omnis quod?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
