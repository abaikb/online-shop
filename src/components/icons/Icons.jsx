import React from "react"
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi'
import { HiBars3 } from 'react-icons/hi2'
import styles from './Icons.module.css'

export function SearchIcon({ onClick }) {
  return (
    <HiOutlineSearch className={styles.icon} onClick={onClick} />
  )
}

export function ProfileIcon({ onClick }) {
  return (
    <HiOutlineUser className={styles.icon} onClick={onClick} />
  )
}

export function HeartIcon({ onClick }) {
  return (
    <HiOutlineHeart className={styles.icon} onClick={onClick} />
  )
}

export function CartIcon({ onClick }) {
  return (
    <HiOutlineShoppingBag className={styles.icon} onClick={onClick} />
  )
}

export function BurgerIcon({ onClick }) {
  return (
    <HiBars3 className={styles.icon} onClick={onClick} />
  )
}