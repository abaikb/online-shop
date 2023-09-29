import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Avatar, Typography } from 'antd';
import API_BASE_URL from '../../api/BASE_URL';

const { Title, Text } = Typography;

const ProfilePage = () => {
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {

  //   const token = JSON.parse(localStorage.getItem('token')).access;

  //   axios.get(`${API_BASE_URL}/account/edit_profile/`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       setUserData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user profile:', error);
  //     });
  // }, []);

  return (
    <div>
      {/* {userData && (
        <Card>
          <Avatar size={64} src={userData.profile_image} />
          <Title>{userData.first_name} {userData.last_name}</Title>
          <Text>Date of Birth: {userData.date_birth}</Text>
          <Text>City: {userData.city}</Text>
        </Card>
      )} */}
    </div>
  );
};

export default ProfilePage;
