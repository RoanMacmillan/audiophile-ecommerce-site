import React from 'react';
import styles from './HeadphoneItem.module.css';
import Button from '../../../Button/Button'

const HeadphoneItem = ({ image, isNew, name, description }) => {
  return (
    <div className={styles.headphoneItem}>
      <img src={image} alt={name} />
      {isNew && <span className={styles.newLabel}>New product</span>}
      <h3>{name}</h3>
      <p>{description}</p>
    <Button className='btn orange' />
    </div>
  );
};

export default HeadphoneItem;