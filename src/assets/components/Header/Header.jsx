import React, { useState } from "react";
import styles from "./Header.module.css";
import hamburger from "../../images/icons/hamburger.svg";
import logo from "../../images/icons/logo.svg";
import cart from "../../images/icons/icon-cart.svg";
import { NavLink, useLocation } from "react-router-dom";
import ProductNavigation from "../ProductNavigation/ProductNavigation";

const Header = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const isActive = (path) => (location.pathname === path ? styles.activeLink : "");

  return (
    <header className={className}>
      <div
        className={styles.overlay}
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
        onClick={closeMobileMenu}
      ></div>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLine}></div>
        <img
          className={styles.hamburger}
          src={hamburger}
          alt="Hamburger icon"
          onClick={toggleMobileMenu}
        ></img>
        <div className={styles.desktopHeaderContainer}>
          <NavLink to="/" className={`${styles.logoA} ${isActive("/")}`}>
            <img className={styles.logo} src={logo} alt="Logo"></img>
          </NavLink>
          <nav className={styles.desktopNav}>
            <NavLink to="/" className={isActive("/")}>
              Home
            </NavLink>
            <NavLink to="/headphones" className={isActive("/headphones")}>
              Headphones
            </NavLink>
            <NavLink to="/speakers" className={isActive("/speakers")}>
              Speakers
            </NavLink>
            <NavLink to="/earphones" className={isActive("/earphones")}>
              Earphones
            </NavLink>
          </nav>
        </div>
        <img className={styles.cart} src={cart} alt="Cart"></img>
      </div>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ProductNavigation />
        </div>
      )}
    </header>
  );
};

export default Header;