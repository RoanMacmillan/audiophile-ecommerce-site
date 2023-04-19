import React from "react";
import Header from "../../Header/Header";

import Product from "../Product/Product";

const Headphones = () => {
  return (
    <div>
      <Header />
      <div className="indexHeader">
        <h1>speakers</h1>
      </div>
      <Product category="speakers" />;{" "}
    </div>
  );
};

export default Headphones;
