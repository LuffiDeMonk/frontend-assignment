import React from "react";
import Logo from "../../assets/images/Logo.png";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white">
      <img src={Logo} alt="" className="w-20 h-20 animate-bounce" />
    </div>
  );
};

export default Loading;
