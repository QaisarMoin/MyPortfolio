import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="
      text-white min-w-screen mt-36 relative px-9
    py-20 flex md:justify-center justify-start items-center md:px-9"
    >
      <div
        className="lg:w-[100%] lg:max-w-[1024px]  
      md:w-[690px] h-fit"
      >
        {/* Top Div */}
        <div className="flex w-full gap-20">
          {/* Top-Left div */}
          <div className=" w-fit h-fit flex flex-col ">
            {/* Heading */}
            <h1 className="text-[#818181] mb-4 text-xs">Main</h1>

            <Link to={"/"} className="mb-4 font-semibold">
              Work
            </Link>

            <Link to={"/info"} className="font-semibold">
              Info
            </Link>
          </div>

          {/* Top-Right div */}
          <div className=" w-fit h-fit flex flex-col ">
            {/* Heading */}
            <h1 className="text-[#818181] mb-4 text-xs">Main</h1>

            <Link to={"/"} className="mb-4 font-semibold flex">
              Linkedin <MdArrowOutward />
            </Link>

            <Link to={"/info"} className="font-semibold flex">
              Resume <MdArrowOutward />
            </Link>
          </div>
        </div>

        {/* Bottom Div */}
        <div className="mt-24">
          <h1>© 2025 Mohd Qaisar Moin. All Rights Reserved.</h1>
          <h1 className="text-[#818181] font-[font4]">
            Thank you for visiting!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
