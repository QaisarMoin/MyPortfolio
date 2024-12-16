import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import "./sample.css";
import { ScrollTrigger } from "gsap/all";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".heading", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".heading",
        scrub: 2,
        start: "top 50%",
        end: "top -170%",
      },
    });
  });

  return (
    <div id="page2-in" className="text-white bg-[#000] text-center mt-10 ">
      <div className="heading">
        <h1
          className="uppercase font-[font1] text-[35vw]
         leading-[40vw] nowrap"
        >
          Projects
        </h1>
      </div>

      <div className="heading">
        <h1
          className="uppercase font-[font1] text-[35vw]
         leading-[40vw] nowrap"
        >
          that engage
        </h1>
      </div>

      <div className="heading">
        <h1
          className="uppercase font-[font1] text-[40vw] 
        leading-[40vw]"
        >
          code
        </h1>
      </div>

      <div className="heading">
        <h1
          className="uppercase font-[font1] text-[40vw] 
        leading-[40vw]"
        >
          that works
        </h1>
      </div>
    </div>
  );
};

export default Page2;
