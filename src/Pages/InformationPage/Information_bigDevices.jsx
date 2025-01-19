import React from "react";
import testing from "../../assets/images/testing2.jpg";
import image1 from "../../assets/images/pic1.jpeg";
import image2 from "../../assets/images/pic2.jpeg";
import image3 from "../../assets/images/pic3.jpeg";
import LongCard from "../../Components/Card/LongCard";
import font11 from "../../assets/fonts/font11.woff2";
import "./Information.css";

const Info = () => {
  return (
    <div
      className="relative text-[#424245] justify-center w-[100vw]  
      mt-40 mb-10 overflow-hidden flex items-center flex-col max-w-[100vw] pb-10  "
    >
      {/* <------------------------- Banner Starting */}
      <div
        className="text-nowrap 
        overflow-hidden color-normal

          w-[100%] px-2 py-4

        
        md:min-w-[100vw] md:max-w-[100vw] md:px-4 md:justify-center md:items-center

        lg:w-[1024px] lg:min-w-[1024px] lg:px-10 leading-tight"
      >
        <span
          className="font-[font2]  color-normal -mb-10
          text-[7vw] w-[90%]  leading-tight
          md:text-[5vw]  
        lg:text-[35.5px]"
        >
          {/* I specialize in building{" "} */}
          <span className="text-[#f56300] text-[60px] ">I </span>
          build{" "}
          <span
            className="font-[font1] 
            text-[12vw]
          md:text-[10vw]
          lg:text-8xl 
           gradient-color glow mr-2"
          >
            dynamic websites
          </span>
          and
        </span>

        <br />
        <span
          className="font-[font2] md:leading-tight  leading-[50px]
          text-[7vw] md:text-wrap text-wrap md:mt-0  
        md:text-[5vw] 
         lg:min-w-[100vw] 
         lg:text-[35.5px]"
        >
          solutions that{" "}
          <span
            className="font-[font1] 
            text-[12vw]
          md:text-[10vw]
          lg:text-8xl
           gradient-color"
          >
            empower people
          </span>{" "}
          <span className="md:ml-1 ml-1">
            to achieve their goals
            <span className="text-[#f56300] text-[60px] ">.</span>
          </span>
        </span>
      </div>
      {/* Banner end Here -----------------------------> */}

      {/* Main Body Start */}

      <div
        className="w-full max-h-fit

        min-w-[410px] max-w-[100vw] px-10

         md:min-w-[100vw] md:max-w-[100vw] md:px-4

        lg:w-[1124px] lg:min-w-[1024px] lg:px-10"
      >
        {/* 1) Top Div of main Body */}
        <div
          className="w-full flex  md:flex-row flex-col-reverse
          text-wrap "
        >
          {/* Top left div */}
          <div
            className=" md:w-[50%] flex flex-col justify-start 
          items-center min-w-[300px] "
          >
            {/* Card 1 */}
            <LongCard
              imageAddress={image1}
              className="middle_div_blue_shadow"
            />

            <p
              className="mt-10 flex flex-col justify-center  w-fit
             items-center px-1  "
            >
              <span className={`font-bold text-xl font-[font7]`}>
                My Journey in Technology
              </span>
              <br />

              <span
                className="font-[font6] text-[#fff] text-left text-[17px]
                px-4 bg-[#424245] rounded-xl py-2"
              >
                I am currently pursuing my BTech in Information Technology at{" "}
                <span className="font-bold text-[#f56300]">
                  Jabalpur Engineering College
                </span>{" "}
                - a prestigious government institution shaping my technical
                foundation.
              </span>
              <br />
              <span
                className="font-[font6] text-[#fff] text-[17px] px-4 bg-[#424245]
               rounded-xl py-2"
              >
                My journey began at{" "}
                <span className="font-bold text-[#f56300]">
                  Stemfield International School
                </span>{" "}
                , sparking my curiosity for technology and problem-solving.
              </span>
            </p>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* ---------------------------------------------------------- */}

          {/* Top Right Div */}
          <div
            className="md:w-[50%] flex md:flex-col flex-col-reverse
             justify-end items-center min-w-[300px]  "
          >
            {/* Card 2 */}

            <p
              className={`font-[font7] text-[#424245] font-bold
             text-xl md:mt-0 mt-10 md:px-10 text-center justify-center`}
            >
              Here’s my journey — weaving code, creativity, and{" "}
              <br className="md:hidden lg:block hidden" /> impactful stories.
            </p>

            <LongCard
              imageAddress={image2}
              className="middle_div_blue_shadow"
            />
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}

        {/* 2) Bottom Div of main Body */}
        <div
          className="w-full flex  md:flex-row flex-col-reverse
              text-wrap "
        >
          {/* Top left div */}
          <div
            className=" md:w-[50%] flex flex-col justify-start 
          items-center min-w-[300px] "
          >
            {/* Card 3 */}
            <LongCard
              imageAddress={testing}
              className="middle_div_blue_shadow"
            />

            <p
              className="mt-10 flex flex-col justify-center md:px-9
             items-center px-1"
            >
              <span className={`font-bold text-xl font-[font7]`}>
                My Life Beyond Technology
              </span>
              <br />

              <span
                className="font-[font6] text-[#fff] text-left text-[17px]
                px-4 bg-[#424245] rounded-xl py-2"
              >
                In my spare time, I enjoy hitting the{" "}
                <span className="font-bold text-[#f56300]">
                  gym, playing video games, and challenging myself with chess
                </span>{" "}
                - activities that keep me balanced, focused, and sharp, while{" "}
                <span className="font-bold text-[#f56300]">
                  enhancing my strategic thinking and creativity.
                </span>
              </span>
            </p>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* ---------------------------------------------------------- */}

          {/* Top Right Div */}
          <div
            className="md:w-[50%] flex md:flex-col flex-col-reverse
             justify-end
          items-center min-w-[300px]  "
          >
            {/* Card 4 */}

            <p
              className="mt-10 flex flex-col justify-center md:px-9
             items-center px-1 "
            >
              <span className={`font-bold text-xl font-[font7]`}>
                My Passion for Innovation
              </span>
              <br />

              <span
                className="font-[font6] text-[#fff] text-left text-[17px]
                px-4 bg-[#424245] rounded-xl py-2"
              >
                Over the years, I’ve developed a passion for{" "}
                <span className="font-bold text-[#f56300]">
                  building innovative
                </span>{" "}
                and{" "}
                <span className="font-bold text-[#f56300]">
                  adaptable solutions
                </span>{" "}
                that bridge real-world challenges with the transformative power
                of technology.
              </span>
              <br />
              <span className="font-[font6] text-[#fff] text-[17px] px-4 bg-[#424245] rounded-xl py-2 ">
                Whether creating user-friendly interfaces or{" "}
                <span className="font-bold text-[#f56300]">
                  working with AI
                </span>{" "}
                - I strive to bring impactful ideas to life.
              </span>
            </p>

            <LongCard
              imageAddress={image3}
              className="middle_div_blue_shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
