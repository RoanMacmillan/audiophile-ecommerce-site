import React from "react";
import styles from "./Home.module.css";
import desktopHero from "../../images/home/desktop/image-hero.jpg";
import Button from "../Button/Button";
import ProductNavigation from "../ProductNavigation/ProductNavigation";
import zx9Img from "../../images/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../../images/home/tablet/image-speaker-zx9.png";
import zx9Desktop from '../../images/home/desktop/image-speaker-zx9.png';
import Header from "../Header/Header";
import PersonContainer from "../PersonContainer/PersonContainer";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className={styles.topWrapper}>
      <Header className={styles.homeHeader}/> 
        <div className={styles.textContainer}>
          <div className={styles.textChild}>
            <span>new product</span>
            <h1>
              xx99 mark ii<br></br>headphones
            </h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/headphones/xx99-mark-two-headphones">
              <Button className="btn orange" />
            </Link>
          </div> 

          {/* <div className={styles.bgContainer}>
            <img src={desktopHero}></img>
          </div> */}
        </div>
        </div>

      <ProductNavigation />
<div className={styles.cardsWrapper}>
      <div className={styles.orangeCard}>
        

        <div className={styles.orangeImgWrapper}>
          <img className={styles.zx9Mobile} src={zx9Img} alt="zx9 image"></img>
          <img
            className={styles.zx9Tablet}
            src={zx9Tablet}
            alt="zx9 image"
          ></img>

          <img className={styles.zx9Desktop} src={zx9Desktop} alt='zx9 image'></img>
        </div>

        <div className={styles.orangeTextContainer}>
        <h2>
          zx9<br></br> speaker
        </h2>

        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to="/speakers/zx9-speaker/">
          <Button className="btn black" />
        </Link>
      </div>
      </div>

      <div className={styles.grayCard}>
        <h2>zx7 speaker</h2>
        <Link to="/speakers/zx7-speaker/">
          <Button className="btn light" />
        </Link>
      </div>

      <div className={styles.earphoneContainer}>
        <div className={styles.darkCard}></div>

        <div className={styles.lightCard}>
          <h2>yx1 earphones</h2>
          <Link to="/earphones/yx1-earphones/">
            <Button className="btn light" />
          </Link>
        </div>
      </div>
      </div>
      <PersonContainer />
    </main>
  );
};

export default Home;
