import React from "react";
import styles from "./Header.module.css";
import hamburger from "../../images/icons/hamburger.svg";
import logo from "../../images/icons/logo.svg";
import cart from "../../images/icons/icon-cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img
        className={styles.hamburger}
        src={hamburger}
        alt="Hamburger icon"
      ></img>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo"></img>
      </Link>
      <img className={styles.cart} src={cart} alt="Cart"></img>
    </header>
  );
};

export default Header;
