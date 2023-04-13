import React from 'react'
import styles from './Header.module.css'
import hamburger from '../../images/icons/hamburger.svg'
import logo from '../../images/icons/logo.svg'
import cart from '../../images/icons/icon-cart.svg'

const Header = () => {
  return (
    <header>
        <img className={styles.hamburger} src={hamburger} alt='Hamburger icon'></img>
        <img className={styles.logo} src={logo} alt='Logo'></img>
        <img className={styles.cart} src={cart} alt='Logo'></img>
      
    </header>
  )
}

export default Header
