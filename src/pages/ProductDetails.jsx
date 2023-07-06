import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../utils/GetProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);
  const params = useParams();
  const { productID } = params;
  const data = getSingleProduct(productID);

  const discountedPrice = (price, discount) => {
    return price - (discount / 100) * price;
  };

  const handleCart = () => {
    let cart = {
      id: data?.id,
      title: data?.title,
      image: data?.images[0],
      quantity: count,
      price: discountedPrice(data?.price, data?.discountPercentage) * count,
    };
    dispatch(addToCart(cart));
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const nextButton = () => {
    slideIndex === data?.images?.length - 1
      ? setSlideIndex(0)
      : setSlideIndex((prev) => prev + 1);
  };
  const prevButton = () => {
    slideIndex === 0
      ? setSlideIndex(data?.images?.length - 1)
      : setSlideIndex(slideIndex - 1);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto">
      <div className="max-w-[20rem] mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-all duration-200"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {data?.images?.map((item, index) => (
              <img src={item} key={item} className="h-[20rem]" />
            ))}
          </div>
          <div
            className="absolute top-1/2 left-2 w-12 h-12 rounded-full -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer"
            onClick={prevButton}
          >
            <BsChevronLeft size={30} />
          </div>
          <div
            className="absolute top-1/2 right-2 w-12 h-12 rounded-full -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer"
            onClick={nextButton}
          >
            <BsChevronRight size={30} />
          </div>
        </div>
        <div className="flex justify-evenly gap-1 mx-auto my-2">
          {data?.images?.map((item, index) => (
            <img
              src={item}
              alt=""
              className={`w-12 h-12 object-cover cursor-pointer ${
                index === slideIndex ? "border border-red-300" : ""
              }`}
              onClick={() => setSlideIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl capitalize">{data?.title}</h1>
        <p className="text-md text-gray-400">{data?.description}</p>
        <div className="flex gap-2 items-center">
          <div className="text-red-300 text-sm">
            Rating:<span className="text-black mx-2">{data?.rating}</span>
          </div>
          <div className="h-3 w-[1px] bg-red-800"></div>
          <div className="text-red-300 text-sm">
            Brand:
            <span className="text-black mx-2 whitespace-nowrap">
              {data?.brand}
            </span>
          </div>
          <div className="h-3 w-[1px] bg-red-800"></div>
          <div className="text-red-300 text-sm">
            Category:
            <span className="text-black mx-2 capitalize">{data?.category}</span>
          </div>
        </div>
        <div className="bg-gray-100 p-2">
          <div className="flex gap-2 items-center">
            <p className="text-sm line-through text-gray-600">
              Rs.
              {data?.price}
            </p>
            <span className="text-sm text-gray-600">
              Inclusive of all taxes
            </span>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold text-orange-600">
              Rs.
              {discountedPrice(data?.price, data?.discountPercentage).toFixed(
                2
              )}
            </h1>
            <span className="text-sm py-0.5 px-2 bg-orange-600 text-white font-bold">
              Flat {data?.discountPercentage}% Off
            </span>
          </div>
        </div>
        <label className="text-lg font-light text-gray-400">Quantity</label>
        <div className="flex w-40 h-10">
          <button
            className="basis-1/3 bg-red-400 text-white text-xl outline-none focus:outline-none"
            onClick={handleIncrement}
          >
            +
          </button>
          <input
            readOnly={true}
            type="text"
            className="basis-1/3 w-full px-4 border border-red-400 outline-none focus:outline-none"
            value={count}
          />
          <button
            className="basis-1/3 bg-red-400 text-white text-xl outline-none focus:outline-none"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-40 h-12 outline-none focus:outline-none text-orange-400 hover:text-white hover:bg-orange-400 border border-orange-400 flex items-center justify-center gap-4 transition-colors duration-200"
        >
          <BiCart size={25} />
          <span className="text-md" onClick={handleCart}>
            Add to cart
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default ProductDetails;
