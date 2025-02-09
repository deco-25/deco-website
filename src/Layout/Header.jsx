import React from "react";
import { Logo } from "../assets";

const Header = () => {
  return (
    <div className="z-[100] flex w-screen justify-between p-10 absolute">
      <div className="max-w-[50px] max-h-[50px] overflow-hidden rounded-xl">
        <img src={Logo} width={50} className="scale-150" />
      </div>
      <div>
        <button className="bg-red-600 p-4 px-8 rounded-full text-white font-bold">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default Header;
