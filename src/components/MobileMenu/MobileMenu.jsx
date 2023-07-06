import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";
import Logo from "../../assets/images/Logo.png";
import Search from "../Search/Search";
import { setMobileMenu } from "../Navbar/NavbarSlice";

const MobileMenu = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      exit={{ x: -500 }}
      transition={{ ease: "linear" }}
      className="md:hidden w-80 h-screen absolute top-0 left-0 bg-white p-4"
    >
      <div className="w-full h-20 flex items-center justify-between">
        <img src={Logo} alt="" className="w-20 h-20 object-contain" />
        <div
          className="flex items-center justify-center text-orange-400"
          onClick={() => dispatch(setMobileMenu())}
        >
          <BiArrowBack size={30} />
        </div>
      </div>
      <Search />
    </motion.div>
  );
};

export default MobileMenu;
