import React from "react";
import { ArrowRight } from "lucide-react";
import service_details from "../../data/service";
import ChooseUs from "./ChooseUs";

const Services = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="h-screen 
       flex flex-col justify-center items-center gap-32 sticky top-0  w-screen bg-[#211b29] "
      >
        <div className="flex flex-col justify-center items-center gap-32 bg-[#211b29] ">
          <h1 className="text-yellow-500 font-playfair text-4xl">
            Where do we go from here?
          </h1>
          <div>
            <div className="min-w-[5px] min-h-[150px] bg-black"></div>
          </div>
        </div>
      </div>
      <div className="relative z-[100] bg-white min-h-screen flex flex-col items-center">
        <div className="text-7xl font-playfair w-screen pt-20 pl-20">
          <h1>How can we help</h1>
          <h1 className="pl-20">
            <span className="text-rose-500 italic">your</span> business grow?
          </h1>
        </div>
        <div className="flex w-screen p-10">
          <div className="w-[60%] text-justify text-xl font-poppins">
            <p>
              At DeCo, we transform ideas into powerful digital experiences.
              From dynamic websites and scalable mobile apps to striking graphic
              designs, we craft solutions that seamlessly blend innovation,
              functionality, and aesthetics
            </p>
            <p className="mt-5">
              {" "}
              Our expertise spans across branding, UI/UX design, video editing,
              and social media content, ensuring a compelling digital presence
              that captivates and converts. With an unwavering commitment to
              quality, speed, and precision, we prioritize efficiency without
              compromising excellence. At DeCo, we don’t just create—we elevate,
              delivering cutting-edge digital solutions that drive impact and
              success
            </p>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <div className="flex gap-20">
              <button className="border border-black rounded-full h-[150px] w-[150px] flex justify-center items-center">
                <ArrowRight size={50} className="rotate-180" color="black" />
              </button>
              <button className="border border-black rounded-full h-[150px] w-[150px] flex justify-center items-center">
                <ArrowRight size={50} color="black" />
              </button>
            </div>
          </div>
        </div>
        <div className="sticky top-0">
          <div
            className={` text-white flex gap-[1vw] w-screen ml-[100px] min-h-screen overflow-x-scroll no-scrollbar justify-start items-center  duration-300`}
          >
            {service_details.map((ele, ind) => {
              return (
                <div className="min-w-[30%] bg-black  flex h-full">
                  <div className="w-full h-[75vh] flex flex-1 flex-col justify-between p-10 text-3xl font-playfair italic">
                    <div>
                      <h1>{ele.no}</h1>
                    </div>
                    <div>
                      <h1>{ele.title}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ChooseUs />
      </div>
    </div>
  );
};

export default Services;
