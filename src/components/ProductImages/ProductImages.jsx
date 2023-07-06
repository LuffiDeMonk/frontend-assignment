import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";

const ProductImages = ({ images }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full flex justify-center">
      {images?.length === 0 ? (
        <>Loading....</>
      ) : (
        <div className="w-80 flex flex-col space-y-4">
          {/* main image container */}
          <div className="w-72 h-72 border border-gray-200">
            <img
              src={images ? images[index] : ""}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* other image container */}
          <div className="w-full flex items-center space-x-2">
            {images?.map((item, index) => (
              <div
                className="w-12 h-12 cursor-pointer"
                key={item}
                onClick={() => setIndex(index)}
              >
                <img src={item} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImages;
