import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RelatedProducts.module.css';
import Button from '../../Button/Button';

const RelatedProducts = ({ relatedProducts, category }) => {
  return (
    <div className={styles.relatedProducts}>
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