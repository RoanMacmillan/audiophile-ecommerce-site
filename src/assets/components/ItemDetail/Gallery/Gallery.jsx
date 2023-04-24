import React from "react";
import styles from "./Gallery.module.css";
import useIntersectionObserver from "../../useIntersectionObserver/useIntersectionObserver";

const Gallery = ({ gallery }) => {
  const [galleryRef, galleryVisible] = useIntersectionObserver();

  const imageSets = Object.values(gallery);
  return (
    <div
      ref={galleryRef}
      className={`${styles.gallery} ${
        galleryVisible ? styles.fadeInLoad : styles.hidden
      }`}
    >
      <div className={styles.firstRow}>
        {imageSets.slice(0, 2).map((imageSet, index) => (
          <picture key={index}>
            <source media="(min-width: 1024px)" srcSet={imageSet.desktop} />
            <source media="(min-width: 768px)" srcSet={imageSet.tablet} />
            <img src={imageSet.mobile} alt={`Gallery Image ${index + 1}`} />
          </picture>
        ))}
      </div>
      <div className={styles.secondRow}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={imageSets[2]?.desktop} />
          <source media="(min-width: 768px)" srcSet={imageSets[2]?.tablet} />
          <img src={imageSets[2]?.mobile} alt="Gallery Image 3" />
        </picture>
      </div>
    </div>
  );
};

export default Gallery;
