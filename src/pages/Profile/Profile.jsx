import React, { useState, useEffect } from 'react'
import API_BASE_URL from '../../api/BASE_URL'
import axios from 'axios'
import styles from './Profile.module.scss'
import MainButton from '../../components/ui/MainButton/MainButton'
import { Link } from 'react-router-dom'

export default function Profile() {

  const [profileData, setProfileData] = useState([])
  
  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken')

        const response = await axios.get(
          `${API_BASE_URL}/account/profile/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        setProfileData(response.data)
      } catch (error) {
        console.error('Error updating user profile:', error)
      }
    }
    getProfile()
  }, [])

  console.log("jopa", profileData)

  return (
    <section>
      <div className="container">
        {profileData.map((data) => (
          <div>
            <h1 className="page_title">профиль покупателя</h1>
            <p>имя: <span>{data.first_name}</span></p>
            <p>фамилия: <span>{data.last_name}</span></p>
            <p>город: <span>{data.city}</span></p>
            <p>email: <span>{data.email}</span></p>
            <p>дата рождения: <span>{data.date_birth}</span></p>
          </div>
        ))}
        <Link to='/profile/edit'>
          <MainButton type='primary' size='large'>редактировать профиль</MainButton>
        </Link>
      </div>
    </section>
  )
}