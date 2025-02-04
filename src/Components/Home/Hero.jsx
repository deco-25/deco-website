import React from "react";
import { HeroWallpaper } from "../../assets";

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-center items-center text-white bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md w-screen"
        style={{
          backgroundImage: `url(${HeroWallpaper})`,
          backgroundRepeat: `no-repeat`,
        }}
      ></div>
      <div className="flex justify-center flex-col items-center gap-14 z-10">
        <div>
          <button className="text-2xl border-black border p-4 px-8 rounded-full bg-black">
            Your vision, Our digital expertise
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-min text-5xl">We are</div>
          <div className="w-min text-9xl font-bold leading-[100px]">
            <span className="text-red-500">De</span>sign{" "}
            <span className="text-red-500">Co</span>mpany
          </div>
        </div>
        <div>
          <div className="min-w-[5px] min-h-[150px] bg-black"></div>
        </div>
      </div>
      <div className="absolute bottom-0 z-[50] w-screen min-h-[200px] bg-gradient-to-t from-black to-black/0"></div>
    </div>
  );
};

export default Hero;
