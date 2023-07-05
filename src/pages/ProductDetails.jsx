import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { productImage } from "../components/imageArray";

const ProductDetails = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextButton = () => {
    slideIndex === productImage.length - 1
      ? setSlideIndex(0)
      : setSlideIndex((prev) => prev + 1);
  };
  const prevButton = () => {
    slideIndex === 0
      ? setSlideIndex(productImage.length + 1)
      : setSlideIndex(slideIndex - 1);
  };
  return (
    <div className="bg-slate-100 grid grid-cols-1 md:grid-cols-2">
      <div className="max-w-[20rem] mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-all duration-200"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {productImage.map((item, index) => (
              <img src={item} key={index} className="h-[20rem]" />
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
        <div className="flex items-center justify-center gap-1 w-[20rem] mx-auto">
          {productImage.map((item, index) => (
            <img
              src={item}
              alt=""
              className={`w-20 h-20 object-cover ${
                slideIndex === index ? "hidden" : ""
              }`}
              onClick={() => setSlideIndex(index)}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Iphone 9</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
