import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import "../sample.css";
import { ScrollTrigger } from "gsap/all";
import Card from "../../Components/Card/Card";
import eco from "../../assets/images/eco.png";
import "../sample.css";
import "./CardPage.css";

const Page2 = () => {
  return (
    <div
      className="text-white py-10 relative justify-center items-center
     bg-[#e6e6e6] text-center px-3 w-screen flex flex-col border-t-2 border-black "
    >
      <div className="flex md:flex-row flex-col w-full justify-center items-center h-fit mb-20">
        <h1
          className=" text-[50px] md:text-[80px] font-[font13]
         text-[#f56300] bg-[#424245] w-fit px-4 mt-4 rounded-xl"
        >
          Full Stack
        </h1>

        <h1
          className=" text-[50px] md:text-[80px] font-[font13]
         text-[#0066cc]  w-fit px-4 mt-4 rounded-xl"
        >
          Projects
        </h1>
      </div>
      <div
        className="flex items-center  flex-wrap
     justify-center flex-shrink gap-5 min-w-screen relative"
      >
        <Card
          path={eco}
          name="E-Commerce"
          description="A Seamless MERN Stack E-commerce Experience!"
          bg="middle_div_blue_bg"
          className="middle_div_blue_shadow "
        />

        <Card
          path={eco}
          name="E-Commerce"
          description="A Seamless MERN Stack E-commerce Experience!"
          bg="middle_div_green_bg"
          className="middle_div_green_shadow"
        />

        <Card
          path={eco}
          name="E-Commerce"
          description="A Seamless MERN Stack E-commerce Experience!"
          bg="middle_div_pink_bg"
          className="middle_div_pink_shadow"
        />
      </div>
    </div>
  );
};

export default Page2;
