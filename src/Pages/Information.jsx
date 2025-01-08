import React from "react";
import testing from "../assets/images/testing2.jpg";
import image from "../assets/images/img12.jpeg";
import LongCard from "../Components/Card/LongCard";
import font11 from "../assets/fonts/font11.woff2";
import "./Information.css";

const Info = () => {
  return (
    <div
      className=" min-w-[100vw] relative text-white 
      mt-40 mb-10 overflow-hidden flex items-center flex-col"
    >
      {/* <------------------------- Banner Starting */}
      <div
        className=" h-fit relative  min-w-[1000px] 
      max-w-[1200px]  text-nowrap overflow-hidden color-normal"
      >
        <span className="font-[font2]  leading-[50px] color-normal text-[42px]">
          I specialize in building{" "}
          <span className="font-[font1] text-8xl gradient-color glow ">
            dynamic web
          </span>
        </span>

        <br />
        <span className="font-[font2] leading-[10px] text-[42px]">
          solutions that{" "}
          <span className="font-[font1] text-8xl gradient-color">
            empower people
          </span>{" "}
          to achieve their goals.
        </span>
      </div>
      {/* Banner end Here -----------------------------> */}

      {/* Main Body Start */}
      <div
        className="
        lg:min-w-[1200px] lg:max-w-[1200px]
         flex min-h-screen mt-1 "
      >
        {/* Main Body Container 1 Left Side  */}
        <div className="max-w-[50%] flex items-center flex-col ">
          {/* -------------------------Card Component start*/}
          {/* Card 1 */}
          <LongCard imageAddress={testing} />
          <p className="mt-5 flex flex-col justify-center px-[100px]">
            <span className={`font-bold text-xl font-[${font11}]`}>
              My background in Architecture.
            </span>
            <br />
            <span className="font-[font4] text-[#a5a0a0] text-[17px] ">
              In June of 2022, I graduated from architecture school at the
              University of Toronto. There, I became obsessed with architectural
              visualization.
            </span>{" "}
            <br />
            <span className="font-[font4] text-[#a5a0a0] text-[17px] ">
              I was deeply fascinated in the concepts of modularity and
              adaptability — how our built environment could organically evolve
              in conjuction with humanity.
            </span>
          </p>

          {/* Card 2 */}
          <LongCard imageAddress={testing} />
          <p className="mt-5 flex flex-col justify-center px-[100px]">
            <span className={`font-bold text-xl font-[${font11}]`}>
              This thing called UX?
            </span>
            <br />
            <span className="font-[font4] text-[#a5a0a0]">
              When the pandemic struck, I took it as an opportunity to explore
              new things. I came across UX design competitions, and thought it
              might be fun to just give it a go (several times).
            </span>
            <br />
            <span className="font-[font4] text-[#a5a0a0] text-[17px] ">
              Long story short, my failures eventually turned into successes,
              and the rest was history.
            </span>
          </p>
        </div>

        {/* Main Body Container 2 Right Side  */}
        <div className="max-w-[50%] flex items-center flex-col mt-32 ">
          {/* Heading */}
          <p className={`font-bold text-xl font-[${font11}] mt-5 `}>
            This is my story — <br /> alongside some flicks from my recent trip
            to Japan.
          </p>

          {/* Card 1 */}
          <LongCard imageAddress={image} />

          <p className="mt-5 flex flex-col justify-center px-[100px]">
            <span className={`font-bold text-xl font-[${font11}]`}>
              But, I wanted more.
            </span>
            <br />
            <span className="font-[font4] text-[#a5a0a0] text-[17px] ">
              Though I loved the freedom of academic practice, I was greatly
              dissatisfied with just how slow the industry actually moved.
            </span>{" "}
            <br />
            <span className="font-[font4] text-[#a5a0a0] text-[17px] ">
              I wanted to push my design craft at a faster pace and have a
              positive impact on vastly more people.
            </span>
          </p>

          {/* Card 2 */}
          <div className="flex justify-center mt-16">
            <LongCard imageAddress={testing} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
