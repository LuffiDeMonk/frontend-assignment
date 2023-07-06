import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <>
      <h1 className="text-2xl capitalize">{product?.title}</h1>
      <p className="text-md text-gray-400">{product?.description}</p>
      <div className="flex gap-2 items-center">
        <div className="text-red-300 text-sm">
          Rating:<span className="text-black mx-2">{product?.rating}</span>
        </div>
        <div className="h-3 w-[1px] bg-red-800"></div>
        <div className="text-red-300 text-sm">
          Brand:
          <span className="text-black mx-2 whitespace-nowrap">
            {product?.brand}
          </span>
        </div>
        <div className="h-3 w-[1px] bg-red-800"></div>
        <div className="text-red-300 text-sm">
          Category:
          <span className="text-black mx-2 capitalize">
            {product?.category}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
