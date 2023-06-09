import React, { useState, useContext, useEffect } from "react";
import styles from "./Header.module.css";
import hamburger from "../../images/icons/hamburger.svg";
import logo from "../../images/icons/logo.svg";
import cart from "../../images/icons/icon-cart.svg";
import { NavLink, useLocation } from "react-router-dom";
import ProductNavigation from "../ProductNavigation/ProductNavigation";
import Cart from "../Cart/Cart";
import CartContext from "../CartContext/CartContext";

const Header = ({ className }) => {

  const { cartItems } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();


  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCartOpen(false);
    if (isMobileMenuOpen) {
      document.body.style.overflow = "auto"; 
    }
  };
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMobileMenuOpen(false);
    if (isCartOpen) {
      document.body.style.overflow = "auto";
    }
  };
  
  useEffect(() => {
    if (isMobileMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen, isCartOpen]);

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  

  const closeCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
      document.body.style.overflow = "auto";

    }
  };

  const isActive = (path) =>
    location.pathname === path ? styles.activeLink : "";

  return (
    <header className={className}>
      <div
        className={styles.overlay}
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
        onClick={closeMobileMenu}
      ></div>
      <div
        className={styles.overlayCart}
        style={{ display: isCartOpen ? "block" : "none" }}
        onClick={closeCart}
      ></div>
      <div className={styles.headerWrapper}>
      {isCartOpen && (
  <div className={styles.cartContainer}>
    <Cart cartItems={cartItems} />
  </div>
)}
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
        <img
          className={styles.cart}
          src={cart}
          alt="Cart"
          onClick={toggleCart}
        ></img>
         {cartItems.length > 0 && (
          <span className={styles.cartNotification}>{getTotalQuantity()}</span>
        )}
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
