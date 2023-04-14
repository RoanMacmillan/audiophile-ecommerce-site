import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Home from "./assets/components/Home/Home";
import Footer from "./assets/components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Headphones from './assets/components/ProductIndexes/Headphones/Headphones'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          {/* <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
