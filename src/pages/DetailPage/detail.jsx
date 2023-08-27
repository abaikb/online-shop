import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BagDetailPage.module.css';
import { FaShoppingCart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

function BagDetailPage({ addToCart }) {
    const { id } = useParams();
    const [bag, setBag] = useState(null);

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

    return (
        <div className={styles.bagDetailPage}>
            <img className={styles.bagImage} src={bag.image} alt={bag.name} />
            <div className={styles.bagInfo}>
                {/* <div className={styles.header}> */}
                    <h2 className={styles.bagName}>{bag.name}</h2>
                    <div className={styles.icons}>
                        <FaHeart className={styles.icon} />
                        <p className={styles.bagPrice}>Цена: {bag.price} сом</p>
                        <FaShoppingCart className={styles.icon} onClick={() => addToCart(bag)} />
                    </div>
                {/* </div> */}
                <p className={styles.bagDesc}>{bag.desc}</p>
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
