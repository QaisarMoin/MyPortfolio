import React from "react";
import "./Card.css";

const Card = ({ path, name, description, animation }) => {
  return (
    <div
      className={`mt-10 flex relative overflow-hidden rounded-[28px]
      justify-center  md:middle_div lg:min-w-[900px] 
      min-w-[380px] min-h-[300px] max-w-[600px] max-h-[350px] 
      md:max-w-[768px] md:min-w-[640px] md:h-[690px] md:min-h-[680px] `}
    >
      {/* Middle Div Starts from here  ---------------------- */}
      <div
        className="h-[650px] relative rounded-3xl overflow-hidden self-center
      min-w-[400px] min-h-[300px] max-w-[768px] max-h-[400px] middle_div
      md:max-w-[940px] md:min-w-[790px] md:h-[670px] md:min-h-[670px] lg:min-w-[900px]
      "
      >
        {/* Div Card Naming  ------------------------- */}
        <div className="w-[95%]  mt-36 md:mt-0 text-left">
          <p
            className="md:text-[30px] text-[20px] font-[font5]
                glowText_card"
          >
            {name}
          </p>
          <p className="md:text-[20px] text-[13px] font-[font4]">
            {description}
          </p>
        </div>

        {/* Picture div setting ------------------------- */}
        <div
          className=" relative flex justify-center items-center
       rounded-2xl Card_hoverAnimation -mt-5"
        >
          <img
            src={path}
            alt="wwe"
            className="rounded-2xl w-[85%] 
                md:h-[550px] min-h-[400px] min-w-[350px] CardImage_hoverAnimation "
          />
        </div>
      </div>

      {/* Middle div Ends Here */}
    </div>
  );
};

export default Card;
