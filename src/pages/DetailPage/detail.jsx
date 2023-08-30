import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BagDetailPage.module.css';
import { FaShoppingCart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { CartContext } from '../../CartContext';


function BagDetailPage() {
    const { id } = useParams();
    const [bag, setBag] = useState(null);
    const { cartItems, setCartItems } = useContext(CartContext);


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

    if (!bag) {
        return <div>Loading...</div>;
    }

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
    );
}

export default BagDetailPage;
