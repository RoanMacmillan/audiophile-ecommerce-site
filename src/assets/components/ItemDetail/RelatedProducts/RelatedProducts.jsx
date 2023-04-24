import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RelatedProducts.module.css';
import Button from '../../Button/Button';
import useIntersectionObserver from '../../useIntersectionObserver/useIntersectionObserver';

const RelatedProducts = ({ relatedProducts, category }) => {

  const [relatedProductsRef, relatedProductsVisible] = useIntersectionObserver();

  return (
      <div
      ref={relatedProductsRef}
      className={`${styles.relatedProducts} ${
        relatedProductsVisible ? styles.fadeInLoad : styles.hidden
      }`}
    >
      <h2>You may also like</h2>
      <ul>
        {relatedProducts.map((product) => (
          <li key={product.slug}> 
            
              <img className={styles.relatedImgMobile} src={product.image.mobile} alt={product.name} />
              <img className={styles.relatedImgTablet} src={product.image.tablet} alt={product.name} />
              <img className={styles.relatedImgDesktop} src={product.image.desktop} alt={product.name} />



              <h3>{product.name}</h3>
              <Link key={product.slug} to={`/${category}/${product.slug}`}>
              <Button className='btn orange' />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;