import styles from './FooterMobile.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/icons/logo.png'
import payments from '../../../assets/images/icons/payment-methods.svg'
import { Input, Button } from 'antd'
import AntdConfig from '../../../config/AntdConfig'
import { ExpandArrow } from '../../../components/icons/Icons'
import SubscribeMobile from './SubscribeMobile/SubscribeMobile'

const FooterMobile = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/'>
        <img className={styles.logo} src={logo} alt='Логотип магазина' />
      </Link>
      <figure className={styles.payments}>
        <img src={payments} alt='Методы оплаты' />
      </figure>
      <div className={styles.menu}>
        <div className={styles.dropdown}>
          <span>категории</span>
          <ExpandArrow />
        </div>
        <div className={styles.dropdown}>
          <span>клиентам</span>
          <ExpandArrow />
        </div>
        <h4>подписка на рассылку</h4>
        {/* <AntdConfig>
          <Input placeholder='Ваш Email' className={styles.subscribe_input}/>
          <Button type='primary' className={styles.subscribe_btn}>подписаться</Button>
        </AntdConfig> */}
        <SubscribeMobile />
      </div>
    </nav>
  )
}

export default FooterMobile
