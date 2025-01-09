import React from "react";
import testing from "../../assets/images/testing2.jpg";
import image from "../../assets/images/img12.jpeg";
import LongCard from "../../Components/Card/LongCard";
import font11 from "../../assets/fonts/font11.woff2";
import "./Information.css";

const Info = () => {
  return (
    <div
      className="relative text-white justify-center
      mt-40 mb-10 overflow-hidden flex items-center flex-col"
    >
      {/* <------------------------- Banner Starting */}
      <div
        className=" h-fit   text-nowrap 
        overflow-hidden color-normal

         min-w-[410px] w-screen max-w-[100vw] px-4
          md:justify-center md:items-center
        md:min-w-[100vw] md:max-w-[100vw] md:px-4

        lg:w-[1024px] lg:min-w-[1024px] lg:px-10 "
      >
        <span
          className="font-[font2]  color-normal
          text-[25px]
          md:text-[28.5px] 
        lg:text-[35.5px]"
        >
          I specialize in building{" "}
          <span
            className="font-[font1] 
            text-5xl
          md:text-7xl
          lg:text-8xl 
           gradient-color glow "
          >
            dynamic web
          </span>
        </span>

        <br />
        <span
          className="font-[font2] 
          text-[25px] md:text-nowrap text-wrap md:mt-0  
        md:text-[28.5px] 
         lg:min-w-[100vw] 
         lg:text-[35.5px]"
        >
          solutions that{" "}
          <span
            className="font-[font1] 
            text-5xl
          md:text-7xl
          lg:text-8xl
           gradient-color"
          >
            empower people
          </span>{" "}
          <span className="md:ml-1 ml-1">to achieve their goals.</span>
        </span>
      </div>
      {/* Banner end Here -----------------------------> */}

      {/* Main Body Start */}
    </div>
  );
};

export default Info;
