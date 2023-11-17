import React from 'react'
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi'
import { HiBars3 } from 'react-icons/hi2'
import styles from './Icons.module.scss'

export function SearchIcon({ onClick }) {
  return <HiOutlineSearch className={styles.icon} onClick={onClick} />
}

export function ProfileIcon({ onClick }) {
  return <HiOutlineUser className={styles.icon} onClick={onClick} />
}

export function HeartIcon({ onClick }) {
  return <HiOutlineHeart className={styles.icon} onClick={onClick} />
}

export function CartIcon({ onClick }) {
  return <HiOutlineShoppingBag className={styles.icon} onClick={onClick} />
}

export function BurgerIcon({ onClick }) {
  return <HiBars3 className={styles.icon} onClick={onClick} />
}

export function ExpandArrow() {
  return (
    <span className={styles.expand_arrow}>
      <svg width='22' height='12' viewBox='0 0 22 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M21.4062 1.8811C21.5 1.78735 21.5703 1.68579 21.6172 1.57642C21.6641 1.46704 21.6875 1.34985 21.6875 1.22485C21.6875 1.09985 21.6641 0.982666 21.6172 0.873291C21.5703 0.763916 21.5 0.662354 21.4062 0.568604C21.3125 0.474854 21.2109 0.404541 21.1016 0.357666C20.9922 0.310791 20.875 0.287354 20.75 0.287354C20.625 0.287354 20.5078 0.310791 20.3984 0.357666C20.2891 0.404541 20.1875 0.474854 20.0938 0.568604L11 9.63892L1.90625 0.568604C1.8125 0.474854 1.71094 0.404541 1.60156 0.357666C1.49219 0.310791 1.375 0.287354 1.25 0.287354C1.125 0.287354 1.00781 0.310791 0.898438 0.357666C0.789062 0.404541 0.6875 0.474854 0.59375 0.568604C0.5 0.662354 0.429688 0.763916 0.382812 0.873291C0.335938 0.982666 0.3125 1.09985 0.3125 1.22485C0.3125 1.34985 0.335938 1.46704 0.382812 1.57642C0.429688 1.68579 0.5 1.78735 0.59375 1.8811L10.3438 11.6311C10.4375 11.7249 10.5391 11.7952 10.6484 11.842C10.7578 11.8889 10.875 11.9124 11 11.9124C11.125 11.9124 11.2422 11.8889 11.3516 11.842C11.4609 11.7952 11.5625 11.7249 11.6562 11.6311L21.4062 1.8811Z' />
      </svg>
    </span>
  )
}