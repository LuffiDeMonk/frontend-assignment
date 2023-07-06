import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setCartOpen } from "../Navbar/NavbarSlice";
const Cart = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      className="absolute top-0 right-0  w-full md:w-[30rem] h-screen z-50 bg-white"
    >
      <div
        className="absolute top-4 right-4 text-orange-400 cursor-pointer"
        onClick={() => dispatch(setCartOpen())}
      >
        <RxCross1 size={25} />
      </div>
    </motion.div>
  );
};

export default Cart;
