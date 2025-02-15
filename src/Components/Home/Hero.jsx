import React, { useEffect, useState } from "react";
import { HeroWallpaper } from "../../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useFallingBarAnimation from "../../hooks/useFallingBarAnimation";

const HERO_TITLE = [
  { firstPart: "cision", secondPart: "mpany" },
  { firstPart: "sign", secondPart: "smos" },
  { firstPart: "sign", secondPart: "mmunity" },
  { firstPart: "velopers", secondPart: "llab" }
];

const Hero = () => {
  const [currIndex, setCurrIndex] = useState(0)
  useFallingBarAnimation('falling-bar')
  
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setCurrIndex(prev => (prev + 1) % HERO_TITLE.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])


  useGSAP(() => {
    gsap.fromTo(
      '#title-1', 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }
    );
    gsap.fromTo(
      '#title-2', 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }
    );
  }, [currIndex]);


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
          <button className="text-2xl border-black border p-4 px-8 rounded-full bg-black">Your vision, Our digital expertise</button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="max-w-min text-5xl">We are</div>
          <div className="text-9xl font-bold leading-[100px]">

            <div className="flex ">
              <span className="max-w-min text-red-500">De</span>
              <span className="min-w-[550px]" id="title-1">{HERO_TITLE[currIndex].firstPart}</span>
            </div>

            <div className="flex ">
              <span className="max-w-min text-red-500">Co</span>
              <span className="min-w-[550px]" id="title-2">{HERO_TITLE[currIndex].secondPart}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 min-w-[3px] min-h-[150px] bg-black overflow-hidden relative">
              <div className="min-w-full min-h-full bg-white absolute" id="falling-bar"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-[50] w-screen min-h-[200px] bg-gradient-to-t from-[#211b29] to-[#211b29]/0"></div>
    </div>
  );
};

export default Hero;
