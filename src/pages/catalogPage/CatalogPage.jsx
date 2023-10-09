import React, { useEffect, useContext, useState } from 'react';
import BagCard from '../../components/BagCard/BagCard';
import styles from './CatalogPage.module.css';
import { CartContext } from '../../context/CartContext';
import { useFavorite } from "../../context/FavoriteContext";
import API_BASE_URL from '../../api/BASE_URL';
import axios from 'axios';

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites, isItemInFavorites } = useFavorite();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/product/get_product`);
        console.log('Товары успешно получены с сервера.');
        setProducts(response.data.results);
      }
      catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };
    getProducts();
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <section className={styles.catalog}>
      <div className="container">
        <h2 className="page_title">каталог</h2>
        <div className={styles.product_grid}>
          {products.map((product) => (
            <BagCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToFavorites={() => addToFavorites(product)}
              removeFromFavorites={() => removeFromFavorites(product.id)}
              isFavorite={isItemInFavorites(product.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CatalogPage;
