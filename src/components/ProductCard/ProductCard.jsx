import React from "react";
import CardImage from "../../assets/images/f-2-2.png";

const ProductCard = () => {
  return (
    <div className="h-[20rem] border border-red-300 p-2">
      <div className="w-full h-56 overflow-hidden border border-gray-100">
        <img src={CardImage} alt="" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-lg font-bold">iPhone 9</h1>
      <p className="text-sm font-light">Electronics</p>
      <div className="flex gap-2 items-center">
        <span className="text-xl font-bold text-blue-500">Rs.300</span>
        <span className="text-sm font-light text-gray-300 line-through">
          Rs.300
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
