import React from "react";
import styles from "./ProductNavigation.module.css";
import headphones from "../../images/thumbnails/thumbnail-head.png";
import earphones from "../../images/thumbnails/thumbnail-ear.png";
import speaker from "../../images/thumbnails/thumbnail-speaker.png";
import arrow from '../../images/icons/icon-arrow-right.svg'
import { Link } from 'react-router-dom';

const ProductNavigation = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img
          className={styles.thumbnailHead}
          src={headphones}
          alt="Headphones Thumbnail"
        ></img>
        <div className={styles.cardTextContainer}>

          <h4>headphones</h4>
          <div className={styles.shopContainer}>

          <Link to="/headphones">shop</Link>
          <img src={arrow} alt='Arrow Right'></img>

          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img
          className={styles.thumbnailSpeaker}
          src={speaker}
          alt="Headphones Thumbnail"
        ></img>
        <div className={styles.cardTextContainer}>
          <h4>speakers</h4>
          <div className={styles.shopContainer}>
          <Link to="/speakers">shop</Link>
          <img src={arrow} alt='Arrow Right'></img>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img
          className={styles.thumbnailEar}
          src={earphones}
          alt="Headphones Thumbnail"
        ></img>
        <div className={styles.cardTextContainer}>

          <h4>earphones</h4>
          <div className={styles.shopContainer}>

          <Link to="/earphones">shop</Link>
          <img src={arrow} alt='Arrow Right'></img>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNavigation;
