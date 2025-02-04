import React, { useEffect, useState } from "react";
import { Inner, Outer } from "../../assets";

const PeopleRing = () => {
  const [yPos, setYPos] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY; // Initial scroll position

    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Current scroll position
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollDirection("down");
        setYPos((prevYPos) => {
          let newNum = prevYPos + 0.5;
          return newNum;
        });
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection("up");
        setYPos((prevYPos) => {
          let newNum = prevYPos - 0.5;
          return newNum;
        });
      }
      lastScrollY = currentScrollY; // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only runs once on mount
  return (
    <div className="bg-black w-screen h-[200vh] relative text-white">
      <div
        className="absolute inset-0 bg-center  w-screen ease-linear scale-125"
        style={{
          backgroundImage: `url(${Outer})`,
          backgroundRepeat: `no-repeat`,
          rotate: `${yPos}deg`,
        }}
      ></div>
      <div
        className="absolute inset-0 bg-center  w-screen ease-linear scale-125"
        style={{
          backgroundImage: `url(${Inner})`,
          backgroundRepeat: `no-repeat`,
          rotate: `-${yPos}deg`,
        }}
      ></div>
      <div className="h-full flex justify-center items-center  w-screen z-50 text-white">
        <div className="w-1/3 text-2xl font-poppins text-center">
          <p>As we grow, we remain committed to</p>
          <p>innovation, client satisfaction, integrity,</p>
          <p>excellence, and adaptability, values that</p>
          <p>drive every project</p>
        </div>
      </div>
    </div>
  );
};

export default PeopleRing;
