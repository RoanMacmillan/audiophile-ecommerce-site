import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Home from "./assets/components/Home/Home";
import Footer from "./assets/components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Headphones from './assets/components/ProductIndexes/Headphones/Headphones'
import Speakers from './assets/components/ProductIndexes/Speakers/Speakers'
import Earphones from "./assets/components/ProductIndexes/Earphones/Earphones";
import ScrollToTop from "./assets/components/ScrollToTop/ScrollToTop";
import headphonesData from '../data.json';
import ItemDetail from "./assets/components/ItemDetail/ItemDetail";

function App() {

  const getProductBySlug = (slug) => {
    return headphonesData.find((product) => product.slug === slug);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
           <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} /> 
          <Route
            path="/headphones/:slug"
            element={<ItemDetail getProductBySlug={getProductBySlug}  />}
          />
          <Route
            path="/speakers/:slug"
            element={<ItemDetail getProductBySlug={getProductBySlug}  />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
