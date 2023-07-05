import React from "react";
import Herosection from "../components/HeroSection/Herosection";
import ProductCategory from "../components/ProductCategory/ProductCategory";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <ProductCategory />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
