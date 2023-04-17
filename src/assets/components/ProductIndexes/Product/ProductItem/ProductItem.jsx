import React from 'react';
import styles from './ProductItem.module.css';
import Button from '../../../Button/Button';
import { Link } from 'react-router-dom';

const ProductItem = ({ image, isNew, name, description, slug, category }) => {
  return (
    <div className={styles.productItem}>

      <img src={image} alt={name} />
      {isNew && <span className={styles.newLabel}>New product</span>}
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/${category}/${slug}`}>
        <Button className='btn orange' />
      </Link>
    </div>
  );
};

export default ProductItem;