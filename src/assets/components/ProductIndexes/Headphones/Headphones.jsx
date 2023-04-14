import React from 'react';
import HeadphoneItem from './HeadphoneItem/HeadphoneItem'
import headphonesData from '../../../../../data.json';

const Headphones = () => {
  return (
    <div>
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
    </div>
  );
};

export default Headphones;
