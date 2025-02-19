import React from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { BackgroundGradientAnimation } from "../Components/Home/ui/background-gradient-animation";

const Footer = () => {
  return (
    <div className="w-full h-[50vh] relative bg-black flex flex-col justify-between items-center text-white">
      <BackgroundGradientAnimation className="h-full" />
      <div className="absolute h-full flex flex-col justify-between items-center w-full">
        <div className="flex w-full pt-10 px-32 justify-between text-xl">
          <div className="flex gap-10">
            <a href="">Sub-Head1</a>
            <a href="">Sub-Head2</a>
            <a href="">Sub-Head3</a>
            <a href="">Sub-Head4</a>
          </div>
          <div className="flex gap-10">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-white" />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-white" />
            </a>
          </div>
        </div>
        <div className="flex">
          <div>logo</div>
          <div className="flex gap-2">
            <h1 className="text-8xl font-bold font-poppins">
              DESIGN COMMUNITY
            </h1>
            <p className="font-poppins text-xl">TM</p>
          </div>
        </div>
        <div className="flex w-full p-5 gap-12 px-20">
          <h1>&copy;DESIGN-COMMUNITY</h1>
          <h1>Privacy Policy</h1>
          <h1>Terms of Service</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
