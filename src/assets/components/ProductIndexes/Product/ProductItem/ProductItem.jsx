import React from 'react';
import styles from './ProductItem.module.css';
import Button from '../../../Button/Button'

const ProductItem = ({ image, isNew, name, description }) => {
  return (
    <div className={styles.productItem}>
      <img src={image} alt={name} />
      {isNew && <span className={styles.newLabel}>New product</span>}
      <h3>{name}</h3>
      <p>{description}</p>
    <Button className='btn orange' />
    </div>
  );
};

export default ProductItem;