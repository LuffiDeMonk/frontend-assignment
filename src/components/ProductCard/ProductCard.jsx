import React from "react";
import CardImage from "../../assets/images/f-2-2.png";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className="h-[20rem] border border-red-300 p-2">
      <div className="w-full h-52 overflow-hidden border border-gray-100">
        <img
          src={data?.images[0]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <Link to={`/${data?.category}/${data?.id}`} className="text-lg font-bold">
        {data?.title}
      </Link>
      <p className="text-sm font-light">{data?.brand}</p>
      <div className="flex gap-2 items-center">
        <span className="text-xl font-bold text-blue-500">Rs.{data.price}</span>
        <span className="text-sm font-light text-gray-300 line-through">
          Rs.300
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
