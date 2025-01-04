import React from "react";
import "./projectDetails.css";
import EcommerceBannerFinal from "../assets/images/EcommerceBannerFinal.png";
import font10 from "../assets/fonts/font10.woff2";
import ecom1 from "../assets/images/ecom1.png";
import ecom2 from "../assets/images/ecom2.jpg";
import ecom3 from "../assets/images/ecom3.png";

const ProjectDetails = () => {
  return (
    <div
      className="max-w-[100vw] lg:w-[1500px]
       relative pt-28 flex flex-col items-center 
       justify-center overflow-hidden md:max-w-[100vw] md:min-w-[640px] min-w-[400px]"
    >
      <div
        className=" max-w-[100vw] lg:w-[1500px]
       relative pt-28  md:px-32 bg-gradient-to-b from-[#ffffff1a]
     to-[#000000]  text-white flex flex-col items-center 
       justify-center overflow-hidden md:max-w-[100%] 
        md:min-w-[640px] min-w-[400px] "
      >
        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}

        {/* Heading Portion Starts */}
        <div
          className="flex flex-col items-center justify-center
       min-h-fit bg-transparent relative overflow-hidden min-w-full "
        >
          {/* ----------------------------------------------------------- */}
          {/* ----------------------------------------------------------- */}

          {/* Page Title */}
          <p
            className=" font-[font4] md:text-6xl text-nowrap
           min-w-full relative flex  Portfolioicon text-4xl
           text-center bg-transparent md:leading-8"
          >
            Ecommerce Website
          </p>

          {/* Website Name */}
          <p
            className=" font-[font1] text-7xl font-semibold relative 
         flex Portfolioicon text-center min-w-full bg-transparent
         mt-[-20px] tracking-wider "
          >
            Shop
            <span className={`font-[${font10}] text-5xl`}>$</span>
            Ease
          </p>

          {/* ----------------------------------------------------------- */}
          {/* ----------------------------------------------------------- */}

          {/* Website Image */}
          <div className="relative bg-cover max-h-fit min-w-full ">
            <img src={EcommerceBannerFinal} alt="" />
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}

        {/* Content Portion Starts */}
        <div
          className="min-w-full min-h-fit flex flex-col  
      items-center justify-center relative md:max-w-[768px] md:min-w-[640px]
      lg:max-w-[1024px]  lg:min-w-[768px] 
      "
        >
          {/* ----------------------------------------------------------- */}
          {/* ----------------------------------------------------------- */}

          {/* First Content Card */}
          <div className="card-insight-box py-6 min-w-full mb-10 relative">
            <div className="card-insight-icon text-left">⚡</div>

            {/* ----------------------------------------------------------- */}
            {/* ----------------------------------------------------------- */}

            {/* Card_Heading */}
            <div
              className="md:min-w-full text-left mt-5 flex relative md:ml-4
           items-center gap-3 max-w-[500px] w-[90vw] px-4 min-w-[400px]"
            >
              <div
                className="min-w-[10px] min-h-[10px] max-w-[10px]
             max-h-[10px] bg-[#ff375f] rounded-full dot"
              ></div>

              <h2 className="font-[font4] text-md text-[#f2f2f288] ">
                Information
              </h2>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* ----------------------------------------------------------- */}

            {/* Side Heading Starts */}
            <span
              className="text-left md:min-w-full font-[font6] text-3xl md:ml-7
           md:text-5xl mt-10 relative  max-w-[500px] w-[90vw] min-w-[400px] px-4 md:px-0"
            >
              A New Era in Shopping.
            </span>

            {/* ----------------------------------------------------------- */}
            {/* ----------------------------------------------------------- */}

            {/* OverView starts From Here  */}
            <div
              className="min-w-full relative mt-5 py-5 flex 
          md:flex-row flex-col md:justify-between justify-center
           md:items-start items-center md:px-0 px-4 "
            >
              {/* OverView heading */}
              <div
                className="md:min-w-[400px] md:max-w-[400px]
             relative max-w-[500px] w-[90vw] min-w-[400px] px-4"
              >
                <span
                  className="
              font-[font6]  font-bold text-2xl text-[#ff375f]"
                >
                  Impressive Design
                </span>
              </div>

              {/* OverView Matter */}
              <div
                className="md:min-w-[400px] md:max-w-[400px] md:px-2 md:ml-0
               px-4 min-w-[400px] max-w-[500px] w-[90vw]
               text-left text-[#f2f2f288] font-[font6] relative text-wrap "
              >
                Our e-commerce website design emphasizes simplicity and
                elegance, with a clean layout, intuitive navigation, and
                visually appealing product displays. It’s fully responsive,
                ensuring a seamless and engaging experience across all devices.
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* ----------------------------------------------------------- */}

            {/* Image and Information Portion Starts From Here 1 */}
            <div
              className=" flex mt-10 py-5 relative flex-col md:justify-between
          md:flex-row justify-center items-center min-w-[400px] md:min-w-[640px]
           md:max-w-[768px] lg:min-w-[768px] lg:max-w-[1024px] "
            >
              {/* Image Section 1*/}
              <div
                className="md:min-w-[60%] md:min-h-fit md:p-0 p-20
                md:overflow-hidden md:bg-cover md:left-14 "
              >
                <img
                  src={ecom1}
                  className=" md:min-w-full md:min-h-full md:bg-cover md:relative
                max-w-[500px] w-[90vw] min-w-[400px] min-h-[200px] md:left-[-100px]
                 rounded-xl  md:border-[#ff375fad] md:border-r-4
                  md:border-t-4 md:border-b-4"
                  alt=""
                />
              </div>

              {/* Information Section 1*/}
              <div
                className="mt-[-50px] px-5 relative max-w-[500px] w-[90vw]
                 min-w-[400px]
                 md:mt-0 md:md:p-4 md:items-end md:justify-end md:min-w-[40%]
                 lg:mt-0  lg:items-end lg:justify-end lg:min-w-[40%]
                 text-left flex items-center
               "
              >
                <span className=" text-[#f2f2f288] font-[font6] ">
                  The homepage design is{" "}
                  <span className="text-white">Modern</span> and user-focused,
                  featuring a clean layout with a prominent hero banner,
                  intuitive navigation, and strategically placed sections for
                  featured products, offers, and categories.
                  <span className="text-white">
                    It's visually engaging and fully responsive.
                  </span>
                </span>
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* ----------------------------------------------------------- */}

            {/* Image and Information Portion Starts From Here 2 */}
            <div
              className=" flex mt-10 py-5 relative flex-col-reverse min-w-[400px]
             md:flex-row justify-center items-center md:justify-between md:max-w-[768px]
             md:min-w-[640px]
             lg:min-w-[768px] lg:max-w-[1024px] "
            >
              {/* Information Section 2*/}
              <div
                className="md:min-w-[40%] text-left flex md:justify-end
               md:mt-0 mt-[-50px]  md:items-end items-center 
                px-5 relative max-w-[500px] w-[90vw] min-w-[400px] 
                lg:mt-0 lg:items-end lg:justify-end lg:min-w-[40%]
                "
              >
                <span className="content-end text-[#f2f2f288] font-[font6] ">
                  The homepage design is
                  <span className="text-white">Modern</span> and user-focused,
                  featuring a clean layout with a prominent hero banner,
                  intuitive navigation, and strategically placed sections for
                  featured products, offers, and categories.
                  <span className="text-white">
                    It's visually engaging and fully responsive.
                  </span>
                </span>
              </div>

              {/* Image Section 2*/}
              <div
                className="md:min-w-[60%] md:min-h-fit md:p-0 p-20
                md:overflow-hidden md:bg-cover md:left-14  "
              >
                <img
                  src={ecom2}
                  className=" md:min-w-full md:min-h-full md:bg-cover md:relative 
                min-h-[200px] md:left-[100px] rounded-xl relative max-w-[500px] w-[90vw] min-w-[400px] md:border-l-4 md:border-t-4 md:border-b-4
                  md:border-[#ff375fad]"
                  alt=""
                />
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* ----------------------------------------------------------- */}

            {/* Image and Information Portion Starts From Here 3 */}
            <div
              className=" flex mt-10 py-5 relative flex-col md:justify-between
          md:flex-row justify-center items-center min-w-[400px] md:min-w-[640px]
           md:max-w-[768px] lg:min-w-[768px] lg:max-w-[1024px]"
            >
              {/* Image Section 3*/}
              <div
                className="md:min-w-[60%] md:min-h-fit md:p-0 p-20
                md:overflow-hidden md:bg-cover md:left-14 "
              >
                <img
                  src={ecom3}
                  className=" md:min-w-full md:min-h-full md:bg-cover md:relative
                max-w-[500px] w-[90vw] min-w-[400px] min-h-[200px] md:left-[-100px]
                 rounded-xl  md:border-[#ff375fad] md:border-r-4
                  md:border-t-4 md:border-b-4"
                  alt=""
                />
              </div>

              {/* Information Section 3*/}
              <div
                className="mt-[-50px] px-5 relative max-w-[500px] w-[90vw]
                 min-w-[400px]
                 md:mt-0 md:p-4 md:items-end md:justify-end  md:min-w-[40%]
                 lg:mt-0  lg:items-end lg:justify-end lg:min-w-[40%]
                 text-left flexitems-center"
              >
                <span className="content-end text-[#f2f2f288] font-[font6] ">
                  The homepage design is{" "}
                  <span className="text-white">Modern</span> and user-focused,
                  featuring a clean layout with a prominent hero banner,
                  intuitive navigation, and strategically placed sections for
                  featured products, offers, and categories.
                  <span className="text-white">
                    It's visually engaging and fully responsive.
                  </span>
                </span>
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* ----------------------------------------------------------- */}
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}
        {/* ----------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default ProjectDetails;
