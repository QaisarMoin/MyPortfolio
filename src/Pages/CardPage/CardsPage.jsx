import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import "../sample.css";
import { ScrollTrigger } from "gsap/all";
import Card from "../../Components/Card/Card";
import eco from "../../assets/images/eco.png";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  // top Animation
  // useEffect(() => {
  //   if (window.innerWidth >= 950 && window.innerWidth <= 1000) {
  //     useGSAP(function () {
  //       gsap.from(".slideFrom_Left", {
  //         transform: "translateX(-400px)",
  //         opacity: 0,
  //         duration: 2,
  //         stagger: 1,
  //         scrollTrigger: {
  //           trigger: ".slideFrom_Left",
  //           scrub: 2,
  //           start: "top 50%",
  //           end: "top 35%",
  //         },
  //       });
  //     });

  //     // Middle Animation
  //     useGSAP(function () {
  //       gsap.from(".rotate", {
  //         transform: "rotateX(-100deg)",
  //         opacity: 0,
  //         duration: 2,
  //         stagger: 1,
  //         scrollTrigger: {
  //           trigger: ".rotate",
  //           scrub: 2,
  //           start: "top 70%",
  //           end: "bottom 90%",
  //           markers: true,
  //         },
  //       });
  //     });

  //     // Bottom Animation
  //     useGSAP(function () {
  //       gsap.from(".slideFrom_Right", {
  //         transform: "translateX(400px)",
  //         opacity: 0,
  //         duration: 2,
  //         stagger: 1,
  //         scrollTrigger: {
  //           trigger: ".slideFrom_Right",
  //           scrub: 2,
  //           start: "top 50%",
  //           end: "top 35%",
  //         },
  //       });
  //     });
  //   }
  // }, []);

  return (
    <div
      id="page2-in"
      className="text-white py-10 relative
     bg-[#000] text-center px-5 "
    >
      <div
        className="flex items-center
     justify-center flex-col min-w-screen relative"
      >
        <Card
          path={eco}
          name="E-Commerce"
          description="A Seamless MERN Stack E-commerce Experience!"
          animation="slideFrom_Left"
        />

        <Card
          path={eco}
          name="E-Commerce"
          description="A Seamless MERN Stack E-commerce Experience!"
          animation="rotate"
        />
        <Card
          path={eco}
          name="E-Commerce"
          description="A Seamless MERN Stack E-commerce Experience!"
          animation="slideFrom_Right"
          className=" "
        />
      </div>
    </div>
  );
};

{
  /* <div className="heading">
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
      </div> */
}

export default Page2;
