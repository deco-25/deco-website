import React from "react";
import { replay } from "../../assets";

const About = () => {
  return (
    <div className="bg-black text-white font-playfair font-bold tracking-widest">
      <div className="flex justify-center items-center h-screen w-screen ">
        <div className="flex flex-col gap-9">
          <div>
            <img src={replay} width={500} />
          </div>
          <div className="text-center text-3xl flex flex-col gap-1.5">
            <p>Helping businesses grow with</p>
            <p className="text-red-600">smart digital solutions</p>
            <p>for today's world</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col gap-9">
          <div>
            <img src={replay} width={500} />
          </div>
          <div className="text-center text-3xl flex flex-col gap-1.5">
            <p>
              {" "}
              At DeCo, we create{" "}
              <span className="text-blue-400">
                high-quality digital solutions
              </span>{" "}
              that
            </p>
            <p> help businesses and individuals thrive in a changing</p>
            <p> digital world</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col gap-9">
          <div>
            <img src={replay} width={500} />
          </div>
          <div className="text-center text-3xl flex flex-col gap-1.5">
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
