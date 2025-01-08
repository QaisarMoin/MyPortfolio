import React from "react";
import "./Card.css";

const Card = ({ path, name, description, animation }) => {
  return (
    <div
      className={`mt-10 flex relative overflow-hidden rounded-[28px]
      justify-center  meer p-[5px]

      min-w-[380px] max-w-[768px] min-h-[250px] max-h-[300px] 

      sm_md:h-[450px] 

      md:max-w-[768px] md:min-w-[740px] md:h-[690px] md:min-h-[500px]

        lg:min-w-[1000px] lg:h-[690px] lg:min-h-[680px]  lg:p-[10px]  `}
    >
      {/* Middle Div Starts from here  ---------------------- */}
      <div
        className=" relative rounded-3xl overflow-hidden self-center middle_div

      min-w-[370px] max-w-[758px] min-h-[240px] max-h-[290px] 

      sm_md:h-[440px]

      md:max-w-[758px] md:w-[730px] md:h-[680px] md:min-h-[490px]

       lg:min-w-[980px] lg:h-[680px] lg:min-h-[660px] inner_div
      "
      >
        {/* Div Card Naming  ------------------------- */}
        <div
          className="w-[95%] mt-36
         md:mt-26 
         lg:mt-0
         text-left"
        >
          <p
            className="md:text-[20px] 
            lg:text-[30px]
             text-[20px] font-[font5] glowText_card"
          >
            {name}
          </p>
          <p className="md:text-[20px] text-[13px] font-[font4]">
            {description}
          </p>
        </div>

        {/* Picture div setting ------------------------- */}
        <div
          className=" absolute flex justify-center items-center
       rounded-2xl Card_hoverAnimation -mt-5 "
        >
          <img
            src={path}
            alt="wwe"
            className="rounded-2xl w-[85%] md:w-[90%] lg:w-[95%]
                md:h-[550px] min-h-[360px] min-w-[340px] CardImage_hoverAnimation "
          />
        </div>
      </div>

      {/* Middle div Ends Here */}
    </div>
  );
};

export default Card;
