import React from "react";
import styles from "./Home.module.css";
import mobileHeader from "../../images/home/mobile/image-header.jpg";
import Button from "../Button/Button";
import ProductNavigation from "../ProductNavigation/ProductNavigation";
import zx9Img from '../../images/home/mobile/image-speaker-zx9.png';

const Home = () => {
  return (
    <main>
      
      <div className={styles.textContainer}>
        <span>new product</span>
        <h1>xx99 mark ii<br></br>headphones</h1>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button className='btn' />
      </div>

    <ProductNavigation />

    <div className={styles.orangeCard}>

    <div className={styles.circle}></div>
    <div className={styles.circle}></div>
    <div className={styles.circle}></div>

    <div className={styles.orangeImgWrapper}>
    <img src={zx9Img} alt='zx9 image'></img>
    </div>

    <h2>zx9<br></br> speaker</h2>

    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>

    <Button className='btn black' />

    </div>


    <div className={styles.grayCard}></div>

    <div className={styles.darkCard}></div>

    <div className={styles.lightCard}></div>

    </main>
  );
};

export default Home;
