import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../utils/GetProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import Loading from "../components/Loader/Loading";
import ProductPrice from "../components/ProductPrice/ProductPrice";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductImages from "../components/ProductImages/ProductImages";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const params = useParams();
  const { productID } = params;
  const { product, singleProductLoading } = getSingleProduct(productID);

  const discountedPrice = (price, discount) => {
    return price - (discount / 100) * price;
  };

  const handleCart = () => {
    let cart = {
      id: product?.id,
      title: product?.title,
      image: product?.images[0],
      quantity: count,
      price:
        discountedPrice(product?.price, product?.discountPercentage) * count,
      unitPrice: discountedPrice(product?.price, product?.discountPercentage),
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

  return (
    <>
      {singleProductLoading && <Loading />}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto">
        <ProductImages images={product?.images} />
        <div className="flex flex-col gap-4 w-full">
          <ProductInfo product={product} />
          <ProductPrice product={product} discountedPrice={discountedPrice} />
          <label className="text-lg font-light text-gray-400">Quantity</label>
          <div className="flex w-40 h-10">
            {/* to increment the quantity of item */}
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
            {/* to decrease the quantity of the item */}
            <button
              className="basis-1/3 bg-red-400 text-white text-xl outline-none focus:outline-none"
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
          {/* button to add the item to the cart */}
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
    </>
  );
};

export default ProductDetails;
