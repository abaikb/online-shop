import React, { useEffect, useState } from 'react';
import styles from './CatalogPage.module.css'; // Импорт модульного CSS
import BagCard from '../../components/BagCard/BagCard';

function CatalogPage() {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://645366c8c18adbbdfe9c3b99.mockapi.io/shop/events');
        const data = await response.json();
        setBags(data);
      } catch (error) {
        console.error('Error fetching bags:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.CatalogPage}> 
      <h1>Женские сумки</h1>
      <div className={styles['bag-list']}> 
        {bags.map(bag => (
          <BagCard key={bag.id} bag={bag} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
