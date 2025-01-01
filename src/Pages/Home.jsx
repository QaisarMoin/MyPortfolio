import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import TiltText from "../Components/TiltText";
import "./sample.css";
import selfi from "../../public/images/img12.jpeg";

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
      className="h-screen z-0 overflow-hidden
     py-6 px-20 bg-black flex"
    >
      <div
        className="h-full w-full py-5 px-10 z-0
       rounded-3xl bg-cover
         flex"
        // style={{ backgroundImage: `url(${img1})` }}
        // bg-[#121212]
        id="page1-in"
      >
        <TiltText className="" refrence={tiltRef} />
      </div>
      <img src={selfi} className="h-[800px] w-[800px]" alt="" />
    </div>
  );
};

export default Page1;
