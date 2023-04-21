import React from "react";
import styles from "./ProductNavigation.module.css";
import headphones2 from '../../images/thumbnails/default-headphone.png';
import earphones from "../../images/thumbnails/thumbnail-ear.png";
import speaker from "../../images/thumbnails/thumbnail-speaker.png";
import arrow from '../../images/icons/icon-arrow-right.svg'
import { Link } from 'react-router-dom';

const ProductNavigation = () => {
  return (
    <div className={styles.cardContainer}>
      <Link to="/headphones">
      <div className={styles.card}>


      <img
          className={styles.thumbnailHeadp}
          src={headphones2}
          alt="Headphones Thumbnail"
        ></img>


        
        <div className={styles.cardTextContainer}>

          <h4>headphones</h4>
          <div className={styles.shopContainer}>

          <span>shop</span>
          <img src={arrow} alt='Arrow Right'></img>

          </div>
        </div>
      </div>
      </Link>

      <Link to="/speakers">
      <div className={styles.card}>
        <img
          className={styles.thumbnailSpeaker}
          src={speaker}
          alt="Headphones Thumbnail"
        ></img>
        <div className={styles.cardTextContainer}>
          <h4>speakers</h4>
          <div className={styles.shopContainer}>
          <span>shop</span>
          <img src={arrow} alt='Arrow Right'></img>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/earphones">
      <div className={styles.card}>
        <img
          className={styles.thumbnailEar}
          src={earphones}
          alt="Headphones Thumbnail"
        ></img>
        <div className={styles.cardTextContainer}>

          <h4>earphones</h4>
          <div className={styles.shopContainer}>

          <span>shop</span>
          <img src={arrow} alt='Arrow Right'></img>

          </div>
        </div>
        
      </div>
      </Link>
    </div>
  );
};

export default ProductNavigation;
