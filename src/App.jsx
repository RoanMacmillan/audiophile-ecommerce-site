import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Home from "./assets/components/Home/Home";
import Footer from "./assets/components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Headphones from "./assets/components/ProductIndexes/Headphones/Headphones";
import Speakers from "./assets/components/ProductIndexes/Speakers/Speakers";
import Earphones from "./assets/components/ProductIndexes/Earphones/Earphones";
import ScrollToTop from "./assets/components/ScrollToTop/ScrollToTop";
import headphonesData from "../data.json";
import ItemDetail from "./assets/components/ItemDetail/ItemDetail";
import CartContext from "./assets/components/CartContext/CartContext";
// import { useLocation } from 'react-router-dom';

function App() {
  const getProductBySlug = (slug) => {
    return headphonesData.find((product) => product.slug === slug);
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItemQuantity,
      }}
    >
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route
            path="/headphones/:slug"
            element={<ItemDetail getProductBySlug={getProductBySlug} />}
          />
          <Route
            path="/speakers/:slug"
            element={<ItemDetail getProductBySlug={getProductBySlug} />}
          />

          <Route
            path="/earphones/:slug"
            element={<ItemDetail getProductBySlug={getProductBySlug} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </CartContext.Provider>
  );
}

export default App;
