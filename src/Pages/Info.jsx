import React from "react";
import testing from "../../public/images/testing2.jpg";
import LongCard from "../Components/Card/LongCard";

const Info = () => {
  return (
    <div
      className=" min-w-[100vw] relative text-white 
      mt-40  overflow-hidden flex items-center flex-col"
    >
      {/* <------------------------- Banner Starting */}
      <div
        className=" h-fit relative  min-w-[1200px] 
      max-w-[1200px]  text-nowrap overflow-hidden"
      >
        <span className="font-[font2]  leading-[50px] text-[42px]">
          I specialize in building{" "}
          <span className="font-[font1] text-8xl ">dynamic web</span>
        </span>

        <br />
        <span className="font-[font2] leading-[10px] text-[42px]">
          solutions that{" "}
          <span className="font-[font1] text-8xl">empower people</span> to
          achieve their goals.
        </span>
      </div>
      {/* Banner end Here -----------------------------> */}

      {/* Main Body Start */}
      <div
        className="min-w-[1200px] max-w-[1200px] flex
       min-h-screen mt-10 "
      >
        <div className="max-w-[50%] flex items-center flex-col border ">
          {/* -------------------------Card Component start*/}
          {/* Card 1 */}
          <LongCard imageAddress={testing} />
          <p className="mt-5 flex flex-col justify-center px-[100px]">
            <span>My background in Architecture.</span>
            <br />
            <br />
            <span>
              In June of 2022, I graduated from architecture school at the
              University of Toronto. There, I became obsessed with architectural
              visualization.
            </span>{" "}
            <br />
            <br />
            <span>
              I was deeply fascinated in the concepts of modularity and
              adaptability — how our built environment could organically evolve
              in conjuction with humanity.
            </span>
          </p>

          {/* Card 2 */}
          <LongCard imageAddress={testing} />
          <p className="mt-5 flex flex-col justify-center px-[100px]">
            <span className="font-bold font-[font9]">
              This thing called UX?
            </span>
            <br />
            <br />
            <span>
              When the pandemic struck, I took it as an opportunity to explore
              new things. I came across UX design competitions, and thought it
              might be fun to just give it a go (several times).
            </span>{" "}
            <br />
            <br />
            <span>
              Long story short, my failures eventually turned into successes,
              and the rest was history.
            </span>
          </p>
        </div>

        <div className="w-[50%] border-2 border-red-400"></div>
      </div>
    </div>
  );
};

export default Info;
