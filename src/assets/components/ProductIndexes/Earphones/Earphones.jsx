import React from "react";
import Header from '../../Header/Header';

import Product from "../Product/Product";

const Earphones = () => {
  return (
    <div>
      <Header />
      <div className='indexHeader'>
        <h1>earphones</h1>
      </div>
      <Product category="earphones" />;
    </div>
  );
};

export default Earphones;
