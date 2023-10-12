import styles from './FooterMobile.module.css'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/icons/logo.png'
import payments from '../../../assets/images/icons/payment-methods.svg'

const FooterMobile = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt='Логотип магазина' />
        </Link>
        <figure className={styles.payments}>
          <img src={payments} alt="Методы оплаты" />
        </figure>
      </ul>
    </nav>
  )
}

export default FooterMobile