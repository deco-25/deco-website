import React from "react";
import Workflow from "./Workflow";

const ChooseUs = () => {
  return (
    <div className="bg-[#031a12] flex flex-col justify-center z-[200] items-center text-white min-h-screen">
      <div className="h-screen flex justify-center items-center ">
        <div className="flex flex-col items-center gap-20">
          <div className="text-4xl text-center font-playfair flex flex-col gap-5">
            <h1>It’s Time to Make Your Mark</h1>
            <h1>Let’s Turn Your Vision into Reality!</h1>
          </div>
          <div>
            <button className="bg-white font-poppins text-black text-3xl p-4 rounded-full px-8">
              Schedule a Call with Us Today!
            </button>
          </div>
        </div>
      </div>
      <div className="flex px-10 h-screen">
        <div className="w-1/2">
          <h1 className="text-8xl font-playfair">
            Why <span className="text-green-500 italic">Choose</span> us?
          </h1>
        </div>
        <div className="w-1/2 text-xl font-poppins text-justify px-12 pt-20">
          <p>
            Our innovative, tailored solutions offer all-in-one services that
            are results-driven, fast, and quality focused. We provide scalable
            solutions that evolve with your business needs, and as part of our
            commitment to your success, we offer two weeks of post-delivery
            support to ensure everything runs smoothly
          </p>
        </div>
      </div>
      <Workflow />
    </div>
  );
};

export default ChooseUs;
