import React from 'react'
import styles from './HomePage.module.scss'
import AntdConfig from '../../config/AntdConfig'
import { Link } from 'react-router-dom'
import bg from '../../assets/images/hero-bg.png'
import MainButton from '../../components/ui/MainButton/MainButton'

const HomePage = () => {

  return (
    <main className={styles.home}>
      <AntdConfig>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.bg}>
              <img src={bg} alt="Фон" />
            </div>
            <div className={styles.desc}>
              <h1 className='page_title'>главная страница</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tenetur aut assumenda debitis voluptate? Laborum at ipsum numquam rem! Temporibus ipsa fuga cumque ut at! Nemo harum deleniti amet iste.</p>
              <Link to="/catalog">
                <MainButton size="large" type="primary">каталог</MainButton>
              </Link>
            </div>
          </div>
        </div>
      </AntdConfig>
    </main>
  )
}

export default HomePage
