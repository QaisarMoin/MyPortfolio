import React from "react";
import "./projectDetails.css";
import Portfolioicon from "../../public/images/Portfolioicon.svg";
import EcommerceBannerFinal from "../../public/images/EcommerceBannerFinal.png";
import font10 from "../assets/fonts/font10.woff2";
import font11 from "../assets/fonts/font11.woff2";
import font12 from "../assets/fonts/font12.woff2";

const ProjectDetails = () => {
  return (
    <div
      className="min-w-screen min-h-screen relative mt-28 border px-32
     bg-transparent text-white flex flex-col items-center justify-center "
    >
      {/* Heading Portion Starts */}
      <div
        className="
        flex flex-col items-center justify-center
       min-h-fit "
      >
        {/* Title */}
        <p
          className=" font-[font1] text-9xl font-semibold min-w-full
         flex flex-col Portfolioicon text-center leading-8"
        >
          Ecommerce Website
        </p>
        <p
          className=" font-[font1] text-7xl font-semibold
         flex Portfolioicon text-center min-w-full"
        >
          Shop <span className={`font-[${font10}] text-5xl`}>$</span> Ease
        </p>

        {/* Website Name */}
        <div className="relative bg-cover max-h-fit min-w-full ">
          <img src={EcommerceBannerFinal} alt="" />
        </div>
      </div>
      {/* Heading Portion Ends */}

      {/* Content Portion Starts */}
      <div
        className="min-w-full min-h-fit flex flex-col 
      items-center justify-center"
      >
        {/* First Content Card */}
        <div className="card-insight-box py-6 min-w-full mb-10">
          <div className="card-insight-icon text-left">⚡</div>
          {/* Card_Heading */}
          <div className="min-w-full text-left mt-5 flex items-center gap-3 ">
            <div
              className="min-w-[10px] min-h-[10px] max-w-[10px]
             max-h-[10px] bg-[#ffffff] rounded-full dot"
            ></div>

            <h2 className="font-[font4] text-md text-[#f2f2f288] ">
              Information
            </h2>
          </div>

          {/* Side Heading Starts */}
          <span
            className="text-left min-w-full font-[font6]
           text-5xl mt-10"
          >
            A New Era in Shopping.
          </span>

          {/* OverView starts From Here  */}
          <div className="min-w-full  mt-5 py-5 flex">
            <div className="min-w-[50%] max-w-[50%] text-left">
              <span className="font-[font6] font-bold text-2xl">
                Impressive Design
              </span>
            </div>
            <div
              className="min-w-[50%] max-w-[50%] text-left 
             text-[#f2f2f288] font-[font6] "
            >
              Our e-commerce website design emphasizes simplicity and elegance,
              with a clean layout, intuitive navigation, and visually appealing
              product displays. It’s fully responsive, ensuring a seamless and
              engaging experience across all devices.
            </div>
          </div>

          {/* Image Portion Starts From Here */}
          <div className="min-w-full flex mt-5 border ">
            {/* Image Section */}
            <div className="min-w-[60%] rounded-xl overflow-hidden bg-contain ">
              <img src="../../public/images/ecom1.png" className="" alt="" />
            </div>

            {/* Information Section */}
            <div className="min-w-[40%]  ">dgdsjvdfdv</div>
          </div>
        </div>

        {/* Second Content Card */}
      </div>
    </div>

    // <div className="gradient-border mt-32">Hover me</div>
  );
};

export default ProjectDetails;
