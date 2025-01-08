import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import TiltText from "../Components/TiltText";
import "./sample.css";
import selfi from "../assets/images/img12.jpeg";

const Page1 = () => {
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const tiltRef = useRef(null);

  const movingMouse = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        60
    );

    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 60
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 4,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      data-scroll-section
      onMouseMove={(e) => movingMouse(e)}
      className="h-fit overflow-hidden w-screen md:mt-10 md:py-6 md:px-0 px-20 mt-20
        min-w-[400px] bg-[#000000] flex justify-center items-center relative 
         md:gap-0 md:min-w-[100vw]"
    >
      <div
        className="md:max-h-[800px] md:min-h-[500px] md:max-w-[600px] md:min-w-[400px]
       w-[50vw]  md:w-[600px]  flex items-center 
          "
        id="page1-in"
      >
        <TiltText refrence={tiltRef} />
      </div>
      <img
        src={selfi}
        className="md:max-h-[800px] md:mr-[-150px] md:min-h-[500px]
       w-[50vw] md:max-w-[600px] md:min-w-[400px] min-w-[200px]"
        alt=""
      />
    </div>
  );
};

export default Page1;
