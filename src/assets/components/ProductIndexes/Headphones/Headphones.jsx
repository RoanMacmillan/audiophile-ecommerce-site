import React from "react";
import Product from "../Product/Product";
import Header from '../../Header/Header';


const Headphones = () => {
  return (
    <div>
      <Header />
      <div className="indexHeader">
        <h1>headphones</h1>
      </div>
      <Product category="headphones" />;
    </div>
  );
};

export default Headphones;
