import AntdConfig from '../../../config/AntdConfig'
import { Input } from 'antd'
import styles from './FooterSubscribe.module.css'

const { Search } = Input

const FooterSubscribe = () => {
  const postEmail = () => {
    console.log('posted')
  }

  return (
    <AntdConfig>
      <div className={styles.wrapper}>
        <Search
          placeholder="Ваш Email"
          onSearch={postEmail}
          enterButton="подписаться"
          size='large'
          className={styles.subscribe}
        />
      </div>
    </AntdConfig>
  )
}

export default FooterSubscribe