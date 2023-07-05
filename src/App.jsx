import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";

import "react-lazy-load-image-component/src/effects/blur.css";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <AnimatePresence>
      <div className="font-Nunito">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category/:productID" element={<ProductDetails />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default App;
