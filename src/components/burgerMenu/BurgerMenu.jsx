import React from "react";
import styles from './BurgerMenu.module.css';
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  return (
    <nav className={styles.burger_nav}>
      <div className="container">
          <div className={styles.close_button}>
            <p>Закрыть</p>
          </div>
        <div className={styles.wrapper}>
          <ul>
            <Link>lorem ipsum</Link>
            <Link>lorem isdfsdfpsum</Link>
            <Link>lorem ipsum</Link>
            <Link>lorem ipsum</Link>
            <Link>lorem ipsum</Link>
            <Link>lorem isfpsum</Link>
            <Link>lorem ipsum</Link>
            <Link>lorem ipsum</Link>
          </ul>
          <ul>
            <Link>contact</Link>
            <Link>contacfsdfsdt</Link>
            <Link>contact</Link>
            <Link>contact</Link>
            <div>
              <Link>contact</Link>
              <Link>contact</Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};