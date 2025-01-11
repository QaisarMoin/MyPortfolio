import React from "react";
import testing from "../../assets/images/testing2.jpg";
import image from "../../assets/images/img12.jpeg";
import LongCard from "../../Components/Card/LongCard";
import font11 from "../../assets/fonts/font11.woff2";
import "./Information.css";

const Info = () => {
  return (
    <div
      className="relative text-white justify-center min-w-[420px]
      mt-40 mb-10 overflow-hidden flex items-center flex-col max-w-[100vw] pb-10  "
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

      <div
        className="w-screen 

        min-w-[410px] max-w-[100vw] px-4

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
              imageAddress={testing}
              className="middle_div_green_shadow"
            />

            <p
              className="mt-5 flex flex-col justify-center px-9
             items-center "
            >
              <span className={`font-bold text-xl font-[${font11}]`}>
                2) My background in Architecture.
              </span>
              <br />

              <span
                className="font-[font4] text-[#a5a0a0] text-left text-[17px]
                px-4 "
              >
                In June of 2022, I graduated from architecture school at the{" "}
                University of Toronto. There, I became obsessed with
                architectural visualization.
              </span>
              <br />
              <span className="font-[font4] text-[#a5a0a0] text-[17px] px-4 ">
                I was deeply fascinated in the concepts of modularity and
                adaptability — how our built environment could organically
                evolve in conjuction with humanity.
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
            {/* Card 2 */}

            <p
              className={`font-[${font11}] text-[#ffffff]
             text-[17px] md:mt-0 mt-10 md:px-10`}
            >
              1) This is my story — alongside some flicks from my{" "}
              <br className="md:hidden lg:block" /> recent trip to Japan.
            </p>

            <LongCard
              imageAddress={testing}
              className="middle_div_purple_shadow"
            />
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}

        {/* 2) Bottom Div of main Body */}
        <div
          className="w-full flex  md:flex-row flex-col
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
              className="middle_div_pink_shadow"
            />

            <p
              className="mt-5 flex flex-col justify-center px-9
             items-center "
            >
              <span className={`font-bold text-xl font-[${font11}]`}>
                3) My background in Architecture.
              </span>
              <br />

              <span
                className="font-[font4] text-[#a5a0a0] text-left text-[17px]
                px-4 "
              >
                In June of 2022, I graduated from architecture school at the{" "}
                University of Toronto. There, I became obsessed with
                architectural visualization.
              </span>
              <br />
              <span className="font-[font4] text-[#a5a0a0] text-[17px] px-4 ">
                I was deeply fascinated in the concepts of modularity and
                adaptability — how our built environment could organically
                evolve in conjuction with humanity.
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
              className="mt-5 flex flex-col justify-center px-9
             items-center "
            >
              <span className={`font-bold text-xl font-[${font11}]`}>
                4) My background in Architecture.
              </span>
              <br />

              <span
                className="font-[font4] text-[#a5a0a0] text-left text-[17px]
                px-4 "
              >
                In June of 2022, I graduated from architecture school at the{" "}
                University of Toronto. There, I became obsessed with
                architectural visualization.
              </span>
              <br />
              <span className="font-[font4] text-[#a5a0a0] text-[17px] px-4 ">
                I was deeply fascinated in the concepts of modularity and
                adaptability — how our built environment could organically
                evolve in conjuction with humanity.
              </span>
            </p>

            <LongCard
              imageAddress={testing}
              className="middle_div_blue_shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
