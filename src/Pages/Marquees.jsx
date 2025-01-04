import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaPython,
  FaCss3,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiDjango, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Page3 = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      data-scroll-section
      className="mt-7 bg-black py-24 relative border-b-2
       rounded-[30%] page3_shiningBorder min-w-[100vw] max-w-[100vw] h-fit"
    >
      {/* First Marquee */}
      <div
        className="min-w-screen max-w-screen h-fit
     overflow-hidden page3_Marquee bg-[#FB923C]"
      >
        <Marquee
          autoFill
          pauseOnClick
          direction="right"
          className="font-[font3] text-[80px] "
        >
          <span className="text-black">Project That Engage</span>
          <span className="text-white">Code That Works</span>
        </Marquee>
      </div>
      {/* Second Marquee */}
      <div
        className="min-w-screen max-w-screen h-fit 
     overflow-hidden mt-10 "
      >
        <Marquee direction="left" autoFill pauseOnClick>
          <div className="flex gap-9">
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-blue-500"
            >
              ReactJs <FaReact />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-white"
            >
              NodeJs <FaNodeJs />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-blue-500"
            >
              ExpressJs <SiExpress />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-white"
            >
              MongoDB <SiMongodb />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-blue-500 "
            >
              Django <SiDjango />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-white mr-10"
            >
              Tailwind <RiTailwindCssFill />
            </div>
          </div>
        </Marquee>
      </div>
      {/* Third Marquee */}
      <div
        className="min-w-screen max-w-screen h-fit 
     overflow-hidden mt-10 "
      >
        <Marquee direction="right" autoFill pauseOnClick>
          <div className="flex gap-9">
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-blue-500"
            >
              Python <FaPython />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-white"
            >
              HTML <FaHtml5 />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-blue-500"
            >
              CSS <FaCss3 />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-white"
            >
              JavaScript <FaJs />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-blue-500"
            >
              TypeScript <SiTypescript />
            </div>
            <div
              className="flex justify-center items-center
           gap-4 text-[40px] text-white mr-10"
            >
              Bootstrap <FaBootstrap />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Page3;
