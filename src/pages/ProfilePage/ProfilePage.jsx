import React from 'react'
import API_BASE_URL from '../../api/BASE_URL';
import axios from 'axios';

export default function ProfilePage() {
  const headers = {
    "Authorization": `${JSON.parse(localStorage.getItem('token')).access}`,
    "X-CSRFToken": 'Rl6v9oBwdXPRDrmB5iEExQENJl85CuGfMjvkpDMRLQCrRJKd6AmGzoimhNpVOL0u',
    "Content-Type": "application/json"
  };

  const getProfileData = async (values) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/account/profile`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  getProfileData();

  return (
    <div>
      <div className="container">

      </div>
    </div>
  )
}