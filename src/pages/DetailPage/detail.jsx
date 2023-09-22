import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import styles from './BagDetailPage.module.css';
import { FaShoppingCart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import BagCard from '../../components/BagCard/BagCard'; // Import the BagCard component
import { useFavorite } from "../../context/FavoriteContext"; // Import the useFavorite context

function BagDetailPage() {
  const { id } = useParams();
  const [bag, setBag] = useState(null);
  const { cartItems, setCartItems } = useContext(CartContext);

  // Import the useFavorite context
  const { addToFavorites, removeFromFavorites, isItemInFavorites } = useFavorite();

  useEffect(() => {
    async function fetchBag() {
      try {
        const response = await fetch(`https://645366c8c18adbbdfe9c3b99.mockapi.io/shop/events/${id}`);
        const data = await response.json();
        setBag(data);
      } catch (error) {
        console.error('Error fetching bag:', error);
      }
    }

    fetchBag();
  }, [id]);

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

  const [recommendedBags, setRecommendedBags] = useState([]);

  useEffect(() => {
    async function fetchRecommendedBags() {
      try {
        // Fetch the recommended bags from your API or data source.
        const response = await fetch('https://645366c8c18adbbdfe9c3b99.mockapi.io/shop/events');
        const data = await response.json();

        // Shuffle the data array to display random bags
        const shuffledBags = shuffleArray(data);

        setRecommendedBags(shuffledBags.slice(0, 4)); // Show the first 4 recommended bags.
      } catch (error) {
        console.error('Error fetching recommended bags:', error);
      }
    }

    fetchRecommendedBags();
  }, []);

  // Function to shuffle an array randomly
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  if (!bag) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.bagDetailPage}>
        <img className={styles.bagImage} src={bag.image} alt={bag.name} />
        <div className={styles.bagInfo}>
          <h2 className={styles.bagName}>{bag.name}</h2>
          <div className={styles.icons}>
            <FaHeart className={styles.icon} />
            <p className={styles.bagPrice}>Цена: {bag.price} сом</p>
            <FaShoppingCart className={styles.icon} onClick={() => addToCart(bag)} />
          </div>
          <p className={styles.bagDesc}>{bag.desc}</p>
          <p className={styles.bagDesc}>{bag.info}</p>
          <div className={styles.bagPlace}>
            <FaMapMarkerAlt className={styles.locationIcon} />
            <p>{bag.place}</p>
          </div>
          <p className={styles.bagDate}>Дата: {bag.date}</p>
        </div>
      </div>
      <div className={styles.recContainer}>
        <h4>Рекомендованные товары</h4>
        <div className={styles.recommendedBags}>
          {recommendedBags.map((recommendedBag) => (
            <Link key={recommendedBag.id} to={`/catalog/${recommendedBag.id}`} className={styles.bagLink}>
              <BagCard
                bag={recommendedBag}
                addToCart={addToCart}
                // Add favorite functionality
                addToFavorites={() => addToFavorites(recommendedBag)}
                removeFromFavorites={() => removeFromFavorites(recommendedBag.id)}
                isFavorite={isItemInFavorites(recommendedBag.id)}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default BagDetailPage;