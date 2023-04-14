import React from 'react';
import HeadphoneItem from './HeadphoneItem/HeadphoneItem'
import headphonesData from '../../../../../data.json';
import styles from './Headphones.module.css';
import ProductNavigation from '../../ProductNavigation/ProductNavigation'

const Headphones = () => {
  return (
    <div className={styles.headphonesIndex}>
      <div className={styles.itemTitle}>
      
      <h1>headphones</h1>

      </div>
      {headphonesData
        .filter((item) => item.category === 'headphones')
        .reverse()
        .map((headphone) => (
          <HeadphoneItem
            key={headphone.id}
            image={headphone.categoryImage.mobile} // Adjust for responsive design as needed
            isNew={headphone.new}
            name={headphone.name}
            description={headphone.description}
          />
        ))}
        <ProductNavigation />
    </div>
  );
};

export default Headphones;
