import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaPython,
  FaCss3,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiDjango,
  SiTypescript,
  SiMongoose,
  SiAppwrite,
  SiJsonwebtokens,
  SiRedux,
  SiPostman,
  SiAxios,
  SiReacthookform,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import materialUI from "../../assets/images/material-ui.png";
import "./SkillsPage.css";
import loading from "../../assets/images/Portfoilio_loading-dots.gif";
import SmallCard from "../../Components/Card/SmallCard/SmallCard";
import Skillcards from "../../Components/Skillcards/Skillcards";

const SkillsPage = () => {
  return (
    <div
      className="relative w-screen text-white flex flex-col  border-t-2 border-black
     items-center justify-center pb-16 pt-20 mt-20 bg-[#] "
    >
      <h1
        className=" text-[50px] md:text-[80px] text-[#f56300]
       font-[font13] p-4 "
      >
        TechStack
      </h1>

      {/* Small Card Starts */}
      <div
        className=" bg-[#e6e6e6] lg:min-w-[1024px] md:flex-row flex-col 
        max-w-[1224px] px-5 flex justify-center py-10 rounded-2xl 
      items- gap-6 mt-5 min-w-[320px] flex-shrink skillContainer border-4
       border-[#f56300] "
      >
        {/* Left Div */}
        <div className="md:w-1/2 ">
          {/* Programming Div */}
          <Skillcards heading={"Programming Languages"}>
            <SmallCard cardName={"Javascript"} cardNo={1}>
              <FaJs className="text-[35px] text-yellow-400 " />
            </SmallCard>

            <SmallCard cardName={"Typescript"} cardNo={1}>
              <SiTypescript className="text-[30px] text-[#0066cc] " />
            </SmallCard>

            <SmallCard cardName={"Python"} cardNo={1}>
              <FaPython className="text-[30px] text-yellow-500 " />
            </SmallCard>
          </Skillcards>

          {/* Frontend Div */}
          <Skillcards heading={"Frontend Technologys"}>
            <SmallCard cardName={"React"} cardNo={1}>
              <FaReact className="text-[35px] text-blue-400 " />
            </SmallCard>

            <SmallCard cardName={"HTML"} cardNo={7}>
              <FaHtml5 className="text-[35px] text-orange-400 " />
            </SmallCard>

            <SmallCard cardName={"CSS"} cardNo={8}>
              <FaCss3 className="text-[30px] text-blue-400 " />
            </SmallCard>

            <SmallCard cardName={"Bootstrap"} cardNo={9}>
              <FaBootstrap className="text-[35px] text-purple-400 " />
            </SmallCard>

            <SmallCard cardName={"Tailwind"} cardNo={10}>
              <RiTailwindCssFill className="text-[35px] text-blue-400 " />
            </SmallCard>
          </Skillcards>
        </div>

        {/* Right Div */}
        <div className="md:w-1/2 ">
          {/* Backend Div */}
          <Skillcards heading={"Backend Technologys"}>
            <SmallCard cardName={"ExpressJs"} cardNo={3}>
              <SiExpress className="text-[35px] text-White-400 " />
            </SmallCard>

            <SmallCard cardName={"NodeJs"} cardNo={2}>
              <FaNodeJs className="text-[35px] text-green-400 " />
            </SmallCard>

            <SmallCard cardName={"MongoDB"} cardNo={4}>
              <SiMongodb className="text-[35px] text-green-400 " />
            </SmallCard>

            <SmallCard cardName={"Django"} cardNo={11}>
              <SiDjango className="text-[35px] text-green-900 " />
            </SmallCard>

            <SmallCard cardName={"Mongoose"} cardNo={10}>
              <SiMongoose className="text-[40px] text-green-600 " />
            </SmallCard>

            <SmallCard cardName={"Appwrite"} cardNo={10}>
              <SiAppwrite className="text-[35px] text-pink-600 " />
            </SmallCard>
          </Skillcards>

          {/* Api Div */}
          <Skillcards heading={"Api's & Library"}>
            <SmallCard cardName={"Material-ui"} cardNo={3}>
              <img src={materialUI} className="h-[30px] text-White-400 " />
            </SmallCard>

            <SmallCard cardName={"JWT"} cardNo={2}>
              <SiJsonwebtokens className="text-[35px] text-pink-400 " />
            </SmallCard>

            <SmallCard cardName={"Postman"} cardNo={4}>
              <SiPostman className="text-[35px] text-orange-400 " />
            </SmallCard>

            <SmallCard cardName={"Redux"} cardNo={11}>
              <SiRedux className="text-[35px] text-pink-900 " />
            </SmallCard>

            <SmallCard cardName={"Axios"} cardNo={10}>
              <SiAxios className="text-[40px] text-green-600 " />
            </SmallCard>

            <SmallCard cardName={"R-hookform"} cardNo={10}>
              <SiReacthookform className="text-[35px] text-pink-600 " />
            </SmallCard>
          </Skillcards>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
