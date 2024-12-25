import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div className="relative min-screen">
      <div
        className="fixed top-5 z-10 overflow-hidden px-10 py-5
      min-w-[100vw] flex justify-between items-center text-white "
      >
        {/* Left side of Header */}
        <div
          className=" min-w-1/3 flex relative
         items-center px-4 glowText"
        >
          Linkedin <MdArrowOutward />
        </div>

        {/* Middel part of Header */}
        <div
          className="Header_wwe1 border-white border-2 flex items-center 
        justify-center rounded-full makeItLarge font-[font5] gap-4"
        >
          <button
            className=" min-w-[50px] h-full my-3 glowTextMiddel
           max-w-fit rounded-full
         hover:text-yellow-100 "
          >
            Work
          </button>
          <button
            className="min-w-[50px] h-full my-3 glowTextMiddel
           max-w-fit rounded-full
         hover:text-yellow-100 "
          >
            InFo
          </button>
        </div>

        {/* Right side of Header */}
        <div
          className=" space-x-7 min-px-4 min-w-1/3
       flex justify-end"
        >
          <button className="flex items-center glowText">
            Linkedin <MdArrowOutward />
          </button>
          <button className="flex items-center glowText">
            Resume <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
