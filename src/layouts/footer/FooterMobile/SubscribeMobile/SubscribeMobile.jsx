import { Input, Button } from 'antd'
import AntdConfig from '../../../../config/AntdConfig'
import React from 'react'
import styles from './SubscribeMobile.module.scss'

const SubscribeMobile = () => {
  return (
    <AntdConfig>
      <form action='' className={styles.form}>
        <h4>подписка на рассылку</h4>
        <Input placeholder='Ваш Email'/>
        <Button type='primary'>подписаться</Button>
      </form>
    </AntdConfig>
  )
}

export default SubscribeMobile
