import React, { useEffect, useState } from "react";
import { SliderImages } from "../imageArray";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextButton = () => {
    currentSlide === SliderImages.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide((prev) => prev + 1);
  };
  const prevButton = () => {
    currentSlide === 0
      ? setCurrentSlide(SliderImages.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const autoPlay = setTimeout(() => {
      nextButton();
    }, 2000);
    return () => {
      clearTimeout(autoPlay);
    };
  }, [currentSlide]);

  return (
    <div className="w-screen max-w-screen-2xl h-[600px] md:h-[500px] overflow-hidden relative">
      <div
        className={`w-[400vw] flex h-full transition-all duration-500`}
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {SliderImages.map((item) => {
          return (
            <div
              key={item.id}
              className="h-full w-[100vw] bg-cover bg-center md:bg-right-top"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          );
        })}
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
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-between gap-3 rounded-full bg-black/60 p-1">
        {SliderImages.map((item) => (
          <div
            key={item.id}
            className={`h-1 ${
              currentSlide === item.id - 1 ? "w-8 bg-orange-600" : "w-1"
            } rounded-full bg-white cursor-pointer transition-all duration-500`}
            onClick={() => setCurrentSlide(item.id - 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Herosection;
