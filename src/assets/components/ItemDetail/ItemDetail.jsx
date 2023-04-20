import React from "react";
import styles from "./ItemDetail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import ProductNavigation from "../ProductNavigation/ProductNavigation.jsx";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Gallery from "./Gallery/Gallery";
import Header from '../Header/Header';


const ItemDetail = ({ getProductBySlug }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  const {
    image,
    name,
    description,
    features,
    includes,
    gallery,
    price,
    others,
    category,
    new: isNew,
  } = product;

  // Split the description into paragraphs using '\n\n'
  const featuresParagraphs = features.split("\n\n");

  return (
    <div>
      <Header />
      <div className={styles.itemDetail}>
        <div className={styles.backBtnContainer}>
        <button type="button" className={styles.backBtn} onClick={handleGoBack}>
          Go back
        </button>
        </div>

        <div className={styles.itemContainer}>
          <img
            className={styles.mobileImage}
            src={image.mobile}
            alt={`${name} mobile`}
          />
          <img
            className={styles.tabletImage}
            src={image.tablet}
            alt={`${name} tablet`}
          />
          <img className={styles.desktopImage} src={image.desktop} alt={`${name} desktop`} />

          <div className={styles.itemContainerChild}>
            {isNew && <span className={styles.newLabel}>New product</span>}
            <h2>{name}</h2>
            <p className={styles.description}>{description}</p>
            <span className={styles.price}>$ {price}</span>
          </div>
        </div>

        <div className={styles.featuresBoxContainer}>
        <div className={styles.features}>
        <h3>Features</h3>
        {featuresParagraphs.map((features, index) => ( 
          <p key={index}>{features}</p>
        ))}
        </div>
        <div className={styles.includedContainer}>
          <h3 className={styles.boxHeading}>In the box</h3>
          <ul className={styles.ul}>
            {includes.map((item, index) => (
              <li key={index}>
                <div className={styles.listItemContainer}>
                  <span className={styles.listStyle}>{item.quantity}x</span>
                  <span className={styles.listItem}>{item.item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>

        <Gallery gallery={gallery} />
      </div>
      <RelatedProducts relatedProducts={others} category={category} />

      <ProductNavigation />
    </div>
  );
};

export default ItemDetail;
