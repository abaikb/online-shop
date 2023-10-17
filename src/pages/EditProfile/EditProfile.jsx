import React, { useState, useEffect } from 'react'
import AntdConfig from '../../config/AntdConfig'
import { Form, Input, DatePicker, Button, Modal } from 'antd'
import API_BASE_URL from '../../api/BASE_URL'
import moment from 'moment'
import axios from 'axios'

const EditProfile = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [profileData, setProfileData] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken')

        const response = await axios.get(`${API_BASE_URL}/account/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        setProfileData(response.data)
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }

    getProfile()
  }, [])

  const patchProfile = async (values) => {
    setIsLoading(true)

    values.date_birth = moment(values.date_birth).format('YYYY-MM-DD')

    try {
      const token = localStorage.getItem('accessToken')

      const response = await axios.patch(
        `${API_BASE_URL}/account/edit_profile/`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      console.log('Updated user profile:', values, response)
    } catch (error) {
      console.error('Error updating user profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleModalConfirm = () => {
    patchProfile(form.getFieldsValue())
    setIsModalVisible(false)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
  }

  const signOut = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  return (
    <section>
      <div className="container">
        <AntdConfig>
          <Form
            form={form}
            onFinish={showModal}
            initialValues={{
              date_birth: profileData.date_birth,
              city: profileData.city,
              first_name: profileData.first_name,
              last_name: profileData.last_name,
            }}
          >
            <Form.Item name="first_name">
              <Input placeholder="имя" />
            </Form.Item>
            <Form.Item name="last_name">
              <Input placeholder="фамилия" />
            </Form.Item>
            <Form.Item name="city">
              <Input placeholder="город" />
            </Form.Item>
            <Form.Item name="date_birth">
              <DatePicker format="YYYY-MM-DD" placeholder="дата рождения" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                сохранить
              </Button>
            </Form.Item>
          </Form>
          <Modal
            title="Сохранить профиль"
            open={isModalVisible}
            onOk={handleModalConfirm}
            onCancel={handleModalCancel}
          >
            <p>Вы уверены, что хотите сохранить изменения в профиле?</p>
          </Modal>
        </AntdConfig>
      </div>
    </section>
  )
}

export default EditProfile
