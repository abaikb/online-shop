import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FooterDesktop.module.css'
import logo from '../../../assets/images/icons/logo.png'
import payments from '../../../assets/images/icons/payment-methods.svg'
import FooterSubscribe from '../FooterSubscribe/FooterSubscribe'

const FooterDesktop = () => {
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
      <ul className={styles.links}>
        <h4>категории</h4>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
      </ul>
      <ul className={styles.links}>
        <h4>клиентам</h4>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
      </ul>
      <ul className={styles.contacts}>
        <h4>подписка на рассылку</h4>
        <FooterSubscribe />
        <Link>email</Link>
        <Link>email</Link>
        <Link>email</Link>
        <Link>email</Link>
        <Link>email</Link>
        <div className={styles.socials}>
          <Link>email</Link>
          <Link>email</Link>
        </div>
      </ul>
    </nav>
  )
}

export default FooterDesktop