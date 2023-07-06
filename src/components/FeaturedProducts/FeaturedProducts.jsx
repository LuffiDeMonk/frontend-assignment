import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProductByCategory } from "../../utils/GetProducts";
import ProductCardLoading from "../ProductCard/ProductCardLoading";

const FeaturedProducts = ({ title, categoryOptions, initial }) => {
  const [category, setCategory] = useState(initial);
  const { data, isLoading } = getProductByCategory(category);
  return (
    <section className="max-w-screen-xl mx-auto my-4">
      <div className="text-2xl md:text-3xl font-bold px-2 md:px-0">{title}</div>
      <div className="h-12 flex items-center gap-x-10 overflow-scroll scrollbar-none px-2 md:px-0">
        {categoryOptions?.map((item, index) => (
          <li
            key={index}
            className="list-none whitespace-nowrap capitalize text-md text-gray-600 relative after:absolute after:content-[''] after:h-0.5 after:bg-red-300 after:bottom-0 after:w-0 after:rounded-full after:left-0 after:duration-300 after:transition-all after:hover:w-full cursor-pointer ease-in-out"
            onClick={() => setCategory(item.toLowerCase())}
          >
            {item}
          </li>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {isLoading &&
          Array(5)
            .fill(0)
            .map((item) => <ProductCardLoading />)}
        {data?.map((item) => (
          <ProductCard key={item.description} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
