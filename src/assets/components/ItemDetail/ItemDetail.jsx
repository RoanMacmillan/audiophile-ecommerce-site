import React from "react";
import styles from "./ItemDetail.module.css";
import { useParams } from "react-router-dom";
import ProductNavigation from "../ProductNavigation/ProductNavigation.jsx";

const ItemDetail = ({ getProductBySlug }) => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { image, name, description, features, includes } = product;

  // Split the description into paragraphs using '\n\n'
  const featuresParagraphs = features.split("\n\n");

  return (
    <div className={styles.itemDetail}>
      <img
        className={styles.mobileImage}
        src={image.mobile}
        alt={`${name} mobile`}
      />
      {/* <img className={styles.tabletImage} src={image.tablet} alt={`${name} tablet`} />
<img className={styles.desktopImage} src={image.desktop} alt={`${name} desktop`} /> */}
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Features</h3>
      {featuresParagraphs.map((features, index) => (
        <p key={index}>{features}</p>
      ))}
      <h3>In the box</h3>
      <ul>
        {includes.map((item, index) => (
          <li key={index}>
            {item.quantity} x {item.item}
          </li>
        ))}
      </ul>
      {/* Add more elements to display gallery images and other details */}
      <ProductNavigation />
    </div>
  );
};

export default ItemDetail;
