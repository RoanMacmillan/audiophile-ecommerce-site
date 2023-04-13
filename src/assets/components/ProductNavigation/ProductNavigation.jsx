import React from "react";
import styles from "./ProductNavigation.module.css";
import headphones from "../../images/thumbnails/thumbnail-head.png";
import earphones from "../../images/thumbnails/thumbnail-ear.png";
import speaker from "../../images/thumbnails/thumbnail-speaker.png";

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
          <a>shop</a>
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
          <a>shop</a>
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
          <a>shop</a>
        </div>
      </div>
    </div>
  );
};

export default ProductNavigation;
