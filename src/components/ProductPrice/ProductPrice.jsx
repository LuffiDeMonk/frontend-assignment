import React from "react";

const ProductPrice = ({ product, discountedPrice }) => {
  return (
    <div className="bg-gray-100 p-2">
      <div className="flex gap-2 items-center">
        <p className="text-sm line-through text-gray-600">
          Rs.
          {product?.price}
        </p>
        <span className="text-sm text-gray-600">Inclusive of all taxes</span>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold text-orange-600">
          Rs.
          {discountedPrice(product?.price, product?.discountPercentage).toFixed(
            2
          )}
        </h1>
        <span className="text-sm py-0.5 px-2 bg-orange-600 text-white font-bold">
          Flat {product?.discountPercentage}% Off
        </span>
      </div>
    </div>
  );
};

export default ProductPrice;
