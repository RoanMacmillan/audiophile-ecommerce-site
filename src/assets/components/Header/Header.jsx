import React from "react";
import styles from "./Header.module.css";
import hamburger from "../../images/icons/hamburger.svg";
import logo from "../../images/icons/logo.svg";
import cart from "../../images/icons/icon-cart.svg";
import { Link } from "react-router-dom";

const Header = ({className}) => {
  return (
    <header className={className}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLine}></div>
      <img
        className={styles.hamburger}
        src={hamburger}
        alt="Hamburger icon"
      ></img>
      <Link to="/" className={styles.logoA}>
        <img className={styles.logo} src={logo} alt="Logo"></img>
      </Link>
      <img className={styles.cart} src={cart} alt="Cart"></img>
      </div>
    </header>
  );
};

export default Header;
