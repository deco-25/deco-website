import React from "react";
import { replay } from "../../assets";

const About = () => {
  return (
    <div className="bg-[#211b29] text-white font-playfair font-bold tracking-widest ">
      <div className="flex justify-center items-center h-screen max-sm:h-min w-screen ">
        <div className="flex flex-col gap-9">
          <div>
            <img src={replay} width={500} />
          </div>
          <div className="text-center text-3xl flex flex-col gap-1.5 max-sm:text-lg">
            <p>Helping businesses grow with</p>
            <p className="text-red-600">smart digital solutions</p>
            <p>for today's world</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen max-sm:h-min w-screen">
        <div className="flex flex-col gap-9">
          <div>
            <img src={replay} width={500} />
          </div>
          <div className="text-center text-3xl flex flex-col gap-1.5 max-sm:text-lg">
            <p>
              {" "}
              At DeCo, we create{" "}
              <span className="text-blue-400 max-sm:inline-block">
                high-quality digital solutions
              </span>{" "}
              that
            </p>
            <p className="max-sm:inline">
              {" "}
              help businesses and individuals thrive in a changing
            </p>
            <p className="max-sm:inline"> digital world</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen max-sm:h-min w-screen">
        <div className="flex flex-col gap-9">
          <div>
            <img src={replay} width={500} />
          </div>
          <div className="text-center text-3xl flex flex-col gap-1.5 max-sm:text-lg">
            <p>Whether you're a small business, entrepreneur, or</p>
            <p>creative professional, we’re here to elevate your</p>
            <p>
              brand and create{" "}
              <span className="text-yellow-500">lasting digital impact</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
