import React from "react";
import Herosection from "../components/HeroSection/Herosection";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import { bestOfferCategory, categoryOptions } from "../components/imageArray";

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <FeaturedProducts
        title="Featured Products"
        categoryOptions={categoryOptions}
        initial="smartphones"
      />
      <FeaturedProducts
        title="Best Deal of The Day"
        categoryOptions={bestOfferCategory}
        initial="womens-dresses"
      />
    </div>
  );
};

export default HomePage;
