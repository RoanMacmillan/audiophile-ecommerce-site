import React from "react";
import styles from "./Footer.module.css";
import bestGear from "../../images/shared/mobile/image-best-gear.jpg";
import logo from "../../images/icons/logo.svg";
import facebook from '../../images/icons/icon-facebook.svg'
import insta from '../../images/icons/icon-instagram.svg'
import twitter from '../../images/icons/icon-twitter.svg'

const Footer = () => {
  return (
    <div className={styles.bottomSection}>
      <div className={styles.personContainer}>
        <img src={bestGear} alt="Person" className={styles.bestGear}></img>

        <h3>
          Bringing you the <span>best</span> audio gear
        </h3>

        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <footer>
        <div className={styles.line}></div>
        <img src={logo} alt="Logo" className={styles.logo}></img>
        <div className={styles.linksContainer}>
        <a>home</a>
        <a>headphones</a>
        <a>speakers</a>
        <a>earphones</a>
        </div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
        <div className={styles.iconContainer}>

        <img src={facebook} alt='Facebook Link'></img>
        <img src={twitter} alt='Twitter Link'></img>
        <img src={insta} alt='Instagram Link'></img>


        </div>
      </footer>
    </div>
  );
};

export default Footer;
