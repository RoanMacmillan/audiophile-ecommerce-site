import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import headphonesData from "../../../../../data.json";
import ProductNavigation from "../../ProductNavigation/ProductNavigation";

const Product = ({ category }) => {
  return (
    <div>
      {headphonesData
        .filter((item) => item.category === category)
        .reverse()
        .map((product) => (
          <ProductItem
            key={product.id}
            image={product.categoryImage.mobile}
            tabletImage={product.categoryImage.tablet}
            desktopImage={product.categoryImage.desktop}
            isNew={product.new}
            name={product.name}
            description={product.description}
            slug={product.slug}
            category={product.category}
          />
        ))}
      <ProductNavigation />
    </div>
  );
};

export default Product;
