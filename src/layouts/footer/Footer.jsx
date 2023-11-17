import React, { useState, useEffect } from 'react'
import styles from './Footer.module.css'
import FooterDesktop from './FooterDesktop/FooterDesktop'
import FooterMobile from './FooterMobile/FooterMobile'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <footer className={styles.footer}>
      <div className="container">
        {isMobile === false && (
          <FooterDesktop />
        )}
        {isMobile === true && (
          <FooterMobile />
        )}
      </div>
      <div className={styles.copyright}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quaerat earum enim harum atque reprehenderit dolores est voluptatum magni omnis maxime aliquid ipsa mollitia nam suscipit laborum, sint eum quae.</p>
      </div>
    </footer>
  )
}

export default Footer
