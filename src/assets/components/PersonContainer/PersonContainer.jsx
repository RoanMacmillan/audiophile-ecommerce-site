import React from "react";
import styles from "./PersonContainer.module.css";
import bestGear from "../../images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "../../images/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from '../../images/shared/desktop/image-best-gear.jpg';
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver";

const PersonContainer = () => {

  const [personContainerRef, personContainerVisible] = useIntersectionObserver();

  return (
    // <div className={styles.personContainer}>
          <div ref={personContainerRef} className={`${styles.personContainer} ${personContainerVisible ? styles.fadeInLoad : styles.hidden}`}>

      <img src={bestGear} alt="Person" className={styles.bestGear}></img>
      <img src={bestGearTablet} alt="Person" className={styles.bestGearTablet}></img>
      <img src={bestGearDesktop} alt='Person' className={styles.bestGearDesktop}></img>
      <div>
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
    </div>
  );
};

export default PersonContainer;