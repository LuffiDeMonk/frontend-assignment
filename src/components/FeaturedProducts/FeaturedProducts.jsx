import React from "react";
import { categoryOptions } from "../imageArray";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-4">
      <div className="text-2xl md:text-3xl font-bold px-2 md:px-0">
        Featured Products
      </div>
      <div className="h-12 flex items-center gap-x-10 overflow-scroll scrollbar-none px-2 md:px-0 cursor-grab">
        {categoryOptions.map((item, index) => (
          <li
            key={index}
            className="list-none whitespace-nowrap capitalize text-md text-gray-600 relative after:absolute after:content-[''] after:h-0.5 after:bg-red-300 after:bottom-0 after:w-0 after:rounded-full after:left-0 after:duration-300 after:transition-all after:hover:w-full cursor-pointer ease-in-out"
          >
            {item}
          </li>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FeaturedProducts;
