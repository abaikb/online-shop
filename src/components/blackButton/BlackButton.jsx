import React from 'react'
import styles from './BlackButton.module.css'

const BlackButton = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  );
};

export default BlackButton;