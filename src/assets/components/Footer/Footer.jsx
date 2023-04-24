import React from "react";
import styles from "./Footer.module.css";
import bestGear from "../../images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "../../images/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from '../../images/shared/desktop/image-best-gear.jpg';
import logo from "../../images/icons/logo.svg";
import facebook from "../../images/icons/icon-facebook.svg";
import insta from "../../images/icons/icon-instagram.svg";
import twitter from "../../images/icons/icon-twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.bottomSection}>
     

      <footer>
        <div className={styles.footerWrapper}>
        <div className={styles.line}></div>
        <div className={styles.footerTopRow}>
        <img src={logo} alt="Logo" className={styles.logo}></img>
        <div className={styles.linksContainer}>
          <Link to="/">home</Link>
          <Link to="/headphones">headphones</Link>
          <Link to="/speakers">speakers</Link>
          <Link to="/earphones">earphones</Link>
        </div>
        </div>
        <p className={styles.topP}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p >
        <div className={styles.bottomRow}>
        <p className={styles.bottomP}>Copyright 2023. All Rights Reserved</p> 
        <div className={styles.iconContainer}>
          <img src={facebook} alt="Facebook Link"></img>
          <img src={twitter} alt="Twitter Link"></img>
          <img src={insta} alt="Instagram Link"></img>
          
        </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
