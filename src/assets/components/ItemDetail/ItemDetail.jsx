import React from "react";
import styles from "./ItemDetail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import ProductNavigation from "../ProductNavigation/ProductNavigation.jsx";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

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

  const { image, name, description, features, includes, gallery, price, others } = product;

  

  // Split the description into paragraphs using '\n\n'
  const featuresParagraphs = features.split("\n\n");

  return (
    <div>
    <div className={styles.itemDetail}>
      <button type="button" className={styles.backBtn} onClick={handleGoBack}>Go back</button>
      <img
        className={styles.mobileImage}
        src={image.mobile}
        alt={`${name} mobile`}
      />
      {/* <img className={styles.tabletImage} src={image.tablet} alt={`${name} tablet`} />
<img className={styles.desktopImage} src={image.desktop} alt={`${name} desktop`} /> */}
      <h2>{name}</h2>
      <p className={styles.description}>{description}</p>
      <span className={styles.price}>$ {price}</span>
      <h3>Features</h3>
      {featuresParagraphs.map((features, index) => (
        <p key={index}>{features}</p>
      ))}
      <h3>In the box</h3>
      <ul>
        {includes.map((item, index) => (
            
          <li key={index}>
            <span className={styles.listStyle}>{item.quantity}x</span> <span className={styles.listItem}>{item.item}</span>
          </li>
        ))}
      </ul>
      {/* Add more elements to display gallery images and other details */}
      <div className={styles.gallery}>
        {Object.values(gallery).map((imageSet, index) => (
          <picture key={index}>
            <source media="(min-width: 1024px)" srcSet={imageSet.desktop} />
            <source media="(min-width: 768px)" srcSet={imageSet.tablet} />
            <img src={imageSet.mobile} alt={`Gallery Image ${index + 1}`} />
          </picture>
        ))}
      </div>
    </div>
    <RelatedProducts relatedProducts={others} />

          <ProductNavigation />
</div>
  );
};

export default ItemDetail;