import React from 'react';
import styles from './ProductItem.module.css';
import Button from '../../../Button/Button';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../../useIntersectionObserver/useIntersectionObserver';

const ProductItem = ({ image, isNew, name, description, slug, category, tabletImage, desktopImage}) => {

  const [productItemRef, productItemVisible] = useIntersectionObserver();

  return (
    // <div className={styles.productItem}> 
    <div ref={productItemRef} className={`${styles.productItem} ${productItemVisible ? styles.fadeInLoad : styles.hidden}`}>


      <img className={styles.mobileImg} src={image} alt={name} />
      <img className={styles.tabletImg} src={tabletImage} alt={name} />
      <img className={styles.desktopImg} src={desktopImage} alt={name} />

      <div className={styles.itemInfoContainer}>

      {isNew && <span className={styles.newLabel}>New product</span>}
      <h3 className={!isNew ? styles.marginTopForNonNewProduct : ''}>{name}</h3>      
      <p>{description}</p>
      <Link to={`/${category}/${slug}`}>
        <Button className='btn orange' />
      </Link>
      </div>
    </div>
  );
};

export default ProductItem;