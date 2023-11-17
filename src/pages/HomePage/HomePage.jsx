import React from 'react'
import styles from './HomePage.module.scss'
import { Link } from 'react-router-dom'
import bg from '../../assets/images/hero-bg.png'
import MainButton from '../../components/ui/MainButton/MainButton'

const HomePage = () => {
  return (
    <main className={styles.home}>
      <div className="container">
        <div className={styles.desktop}>
          <div className={styles.bg}>
            <img src={bg} alt="Фон" />
          </div>
          <div className={styles.desc}>
            <h1 className="page_title">главная страница</h1>
            <p>sample desc lorem ipsum dolor</p>
            <Link to="/catalog">
              <MainButton size="large" type="primary">
                каталог
              </MainButton>
            </Link>
          </div>
        </div>
        <div className={styles.mobile}>
          
        </div>
      </div>
    </main>
  )
}

export default HomePage
