import React from 'react'
import API_BASE_URL from '../../api/BASE_URL';
import axios from 'axios';
import styles from './ProfilePage.module.css';

export default function ProfilePage() {

  const getProfileData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('token')).access;

      const response = await axios.patch(
        `${API_BASE_URL}/account/edit_profile/`,
        {},
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  getProfileData();

  return (
    <section className={styles.profile}>
      <div className="container">
        
      </div>
    </section>
  )
}

// `Bearer ${JSON.parse(localStorage.getItem('token')).access}`