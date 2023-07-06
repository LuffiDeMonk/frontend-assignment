import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../Navbar/NavbarSlice";
import { clearCart } from "../../features/CartSlice";
import CartCard from "./CartCard";
const Cart = () => {
  const data = useSelector((state) => state.cart.cart);
  const price = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{ ease: "linear" }}
      className="absolute top-0 right-0  w-full md:w-[35rem] h-screen z-50 bg-white"
    >
      <div
        className="absolute top-4 right-4 text-orange-400 cursor-pointer"
        onClick={() => dispatch(setCartOpen())}
      >
        <RxCross1 size={25} />
      </div>
      <h2 className="text-md font-bold mt-12 mb-6 px-3">Your Cart Items</h2>
      <div className="h-96 px-2 overflow-y-auto flex flex-col gap-2">
        <AnimatePresence>
          {data?.map((item) => (
            <CartCard data={item} key={item.id} />
          ))}
        </AnimatePresence>
      </div>
      <div className=" mt-1 h-0.5 bg-black"></div>
      <div className="flex items-center justify-between px-2 py-4">
        <span className="text-md font-semibold">Total Price:</span>
        <span className="text-md font-semibold text-orange-400">
          Rs. {price.toFixed(2)}
        </span>
      </div>
      <button className="border border-orange-400 text-orange-400 bg-white text-lg p-1 w-full mx-2">
        Proceed to Checkout
      </button>
      <button
        className="bg-orange-400 text-white text-lg p-1 w-full mx-2 my-2"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </motion.div>
  );
};

export default Cart;
