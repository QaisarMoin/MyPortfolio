import { motion } from "framer-motion";
import React from "react";
import "./Card.css";

const Card = ({ path, name, description, animation }) => {
  return (
    <div
      className={`min-w-screen mt-32 flex 
     justify-center place-items-end ${animation} `}
    >
      <div
        className="page2_bgGradient_top md:w-[75vw]
         flex justify-center items-center 
     rounded-2xl h-[700px]  overflow-hidden self-center glow_card "
      >
        <div className="page2_bgGradient md:w-[74vw]  h-[690px] rounded-2xl overflow-hidden ">
          {/* Middle Div Starts from here  ---------------------- */}
          <div
            className="middle_div md:w-[75vw] 
     rounded-2xl h-[700px]  overflow-hidden self-center "
          >
            {/* Card Naming  ------------------------- */}
            <div className="w-[95%] text-left">
              <p
                className="text-[30px] font-[font5]
               leading-5 glowText_card"
              >
                {name}
              </p>
              <p className="text-[20px] font-[font4]">{description}</p>
            </div>

            {/* Card Picture setting ------------------------- */}
            <div
              className=" relative flex justify-center items-center
       rounded-2xl Card_hoverAnimation "
            >
              <img
                src={path}
                alt="wwe"
                className="rounded-2xl w-[85%] 
                h-[550px] CardImage_hoverAnimation "
              />
            </div>
          </div>

          {/* Middle div Ends Here */}
        </div>
      </div>
    </div>
  );
};

export default Card;
