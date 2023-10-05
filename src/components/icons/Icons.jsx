import React from "react";
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
import { HiBars3 } from 'react-icons/hi2';
import styles from './Icons.module.css';

export function SearchIcon() {
  return (
    <HiOutlineSearch className={styles.icon} />
  );
}

export function ProfileIcon() {
  return (
    <HiOutlineUser className={styles.icon} />
  );
}

export function HeartIcon() {
  return (
    <HiOutlineHeart className={styles.icon} />
  );
}

export function CartIcon() {
  return (
    <HiOutlineShoppingBag className={styles.icon} />
  );
}

export function BurgerIcon() {
  return (
    <HiBars3 className={styles.icon} />
  );
}