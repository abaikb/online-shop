import React, { useState } from 'react';
import { Button, Input, Card } from 'antd';

import AntdConfig from "../antdConfig/AntdConfig";

import styles from './CheckoutForm.module.css'

function CheckoutForm() {

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправленные данные заказа:', formData);
    setFormData({
      name: '',
      address: '',
      phone: ''
    });
  };

  return (
    <form className={styles.form}>
      <AntdConfig>
        <div className={styles.form_wrapper}>
          <h3>Оформление заказа</h3>
          <label htmlFor="name">Имя:</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="address">Адрес:</label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phone">Телефон:</label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <Button type="primary" onClick={handleSubmit}>Оформить заказ</Button>
        </div>
      </AntdConfig>
    </form >
  )
}

export default CheckoutForm;
