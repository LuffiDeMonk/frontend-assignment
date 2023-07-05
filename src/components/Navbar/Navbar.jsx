import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/img/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="h-20 border-b-2 border-gray-200 z-50 sticky w-full bg-white top-0 px-2 md:px-0">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between">
        <img src={Logo} alt="" className="h-10 object-cover cursor-pointer" />
        <ul className="hidden md:flex h-full items-center justify-start md:gap-4 lg:gap-12 md:w-[60%] mr-auto px-4 lg:pl-10">
          <li className="text-lg px-0.5 relative hover:font-bold duration-200 transition-all after:absolute after:content-[''] after:h-0.5 after:bg-red-600 after:bottom-0 after:w-0 after:rounded-full after:left-0 after:duration-300 after:transition-all after:hover:w-full cursor-pointer ease-in">
            Categories
          </li>
          <li className="text-lg px-0.5 relative hover:font-bold duration-200 transition-all after:absolute after:content-[''] after:h-0.5 after:bg-red-600 after:bottom-0 after:w-0 after:rounded-full after:left-0 after:duration-300 after:transition-all after:hover:w-full cursor-pointer ease-in">
            What's New
          </li>
          <li className="text-lg px-0.5 relative hover:font-bold duration-200 transition-all after:absolute after:content-[''] after:h-0.5 after:bg-red-600 after:bottom-0 after:w-0 after:rounded-full after:left-0 after:duration-300 after:transition-all after:hover:w-full cursor-pointer ease-in">
            Best Deals
          </li>
        </ul>
        <div className="hidden h-full md:flex basis-[25rem] items-center justify-between gap-6">
          <form className="h-10 w-full">
            <input
              type="text"
              className="w-full h-full rounded-full outline-none focus:outline-none bg-gray-100 placeholder:text-gray-600 placeholder:text-sm p-4"
              placeholder="Search..."
            />
          </form>
          <motion.div
            whileTap={{ scale: 0.5 }}
            className="cursor-pointer relative outline-none focus:outline-none"
          >
            <RiShoppingCart2Line size={25} />
            <div className="absolute -top-2 -right-2 w-5 h-5 full bg-blue-700 rounded-full text-white text-[10px] flex items-center justify-center">
              4
            </div>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.5 }}
            className="cursor-pointer outline-none relative focus:outline-none"
          >
            <FaRegUser size={25} />
          </motion.div>
        </div>
        <div className="md:hidden">
          <AiOutlineMenu size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
