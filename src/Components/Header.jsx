import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative max-w-[100vw]  ">
      {/* ---------------------------------------------------------- */}
      {/* Header for large md and lg devices  */}
      {/* ---------------------------------------------------------- */}
      <div
        className="fixed top-5 z-10  px-10 py-5 bg-transparent 
       min-w-[100vw] md:flex justify-between items-center text-white hidden "
      >
        {/* Left side of Header */}
        <Link
          to={"/contact-us"}
          className=" Header_wwe1 border-[#8b90a5] border-[1px] flex 
            items-center p-2 justify-center rounded-full font-[font5]"
        >
          ContactUs <MdArrowOutward />
        </Link>

        {/* Middel part of Header */}
        <div
          className="Header_wwe1 border-[#8b90a5] border-[1px] flex items-center 
        justify-center rounded-full makeItLarge font-[font5] gap-4 md:ml-[70px]"
        >
          <Link
            to="/"
            className=" min-w-[50px] h-full my-3 glowTextMiddel
           max-w-fit rounded-full
         hover:text-yellow-100 "
          >
            Work
          </Link>

          <Link
            to="/info"
            className="min-w-[50px] h-full my-3 glowTextMiddel
           max-w-fit rounded-full text-center
         hover:text-yellow-100 "
          >
            About
          </Link>
        </div>

        {/* Right side of Header */}
        <div
          className=" space-x-7 min-px-4 min-w-1/3
       flex justify-end"
        >
          <button
            className="Header_wwe1 border-[#8b90a5] border-[1px] flex 
            items-center p-2 justify-center rounded-full font-[font5] "
          >
            <a href="https://www.linkedin.com/in/qaisar-moin-884918253/">
              Linkedin{" "}
            </a>{" "}
            <MdArrowOutward />
          </button>
          <button
            className="Header_wwe1 border-[#8b90a5] border-[1px] flex 
            items-center p-2 justify-center rounded-full font-[font5]"
          >
            Resume <MdArrowOutward />
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Header for Small devices  */}
      {/* ---------------------------------------------------------- */}
      <div
        className="md:hidden flex  w-screen max-w-[100vw]  px-4 py-2
       top-6 fixed z-20"
      >
        {/* Left Capsule */}
        <div
          className=" w-[170px] p-1 rounded-full ml-2 
        flex justify-between  Header_small_device text-white"
        >
          <Link
            to={"/"}
            className="py-2 px-[20px] border Header_small_device_inside rounded-full"
          >
            Work
          </Link>

          <Link
            to={"/info"}
            className="py-2 px-[20px] border  Header_small_device_inside rounded-full"
          >
            Info
          </Link>
        </div>

        {/* Right Circle */}
        <div
          className={`w-[50px] h-[50px] rounded-full flex justify-center
           items-center bg-[#1a1a1a] ml-auto mr-2 ${
             show ? "Header_small_device_dropdown" : "text-white"
           } text-2xl Header_small_device_inside
          Header_small_device relative right-0 border `}
          id="icon_click"
          onClick={() => setShow(!show)}
        >
          <div className=" icon_click mb-1">@</div>
          <div
            className={` ${
              show ? "block" : "hidden"
            } absolute top-12 qaisar1 right-6 flex justify-center p-2 
            rounded-xl items-center mt-2 border-red-500 border`}
          >
            <div className={`w-full h-full flex flex-col text-lg `}>
              <a
                href="https://www.linkedin.com/feed/"
                className=" qaisar1 w-full rounded-full px-2 py-1"
              >
                Linkedin
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="mt-4 qaisar1 w-full rounded-full px-2 py-1"
              >
                Resume
              </a>
              <Link
                to={"/contact-us"}
                className="mt-4 qaisar1 w-full rounded-full px-2 py-1"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
