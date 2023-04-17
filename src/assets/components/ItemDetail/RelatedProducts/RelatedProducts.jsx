import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RelatedProducts.module.css';

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className={styles.relatedProducts}>
      <h2>You may also like</h2>
      <ul>
        {relatedProducts.map((product) => (
          <li key={product.slug}>
            <Link to={`/${product.category}/${product.slug}`}>
              <img src={product.image.mobile} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;