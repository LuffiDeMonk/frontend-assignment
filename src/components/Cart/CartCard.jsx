import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decreaseItem,
  deleteItem,
  increaseItem,
} from "../../features/CartSlice";
const CartCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center mx-3 gap-1 border border-gray-100 py-5 px-3"
    >
      <img src={data?.image} alt="" className="w-16 h-16 object-cover" />
      <h2 className="text-sm w-56 whitespace-nowrap overflow-hidden text-ellipsis">
        {data?.title}
      </h2>
      <div className="flex w-32 h-6 items-center">
        <button
          className="p-2 text-white bg-orange-400 h-full flex items-center"
          onClick={() => dispatch(increaseItem(data?.id))}
        >
          +
        </button>
        <div className="px-3 border border-orange-400 w-10 h-full outline-none focus:outline-none">
          {data?.quantity}
        </div>
        <button
          className="p-2 text-white bg-orange-400 h-full flex items-center"
          onClick={() => {
            data?.quantity > 1
              ? dispatch(decreaseItem(data?.id))
              : dispatch(deleteItem(data?.id));
          }}
        >
          -
        </button>
      </div>
      <div
        className="h-full flex items-center justify-center text-red-700 cursor-pointer"
        onClick={() => dispatch(deleteItem(data?.id))}
      >
        <FaTrash size={20} />
      </div>
    </motion.div>
  );
};

export default CartCard;
