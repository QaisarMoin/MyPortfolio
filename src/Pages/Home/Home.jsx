import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import TiltText from "../../Components/TiltText";
import "../sample.css";
import selfi from "../../assets/images/darkbg-photo.png";
import selfi2 from "../../assets/images/lightbg-photo.png";

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
      className="h-fit overflow-hidden w-screen px-10  flex-col-reverse
        min-w-[320px] justify-center py-20

        lg:min-h-[70vh]

        md:gap-0 md:min-w-[100vw] md:scale-100 scale-[1.1] md:pt-28 md:pb-10
        md:min-h-[70vh] md:px-0 md:flex-row md:justify-evenly md:py-0

        bg-[#e5e5e5] flex  items-center
         relative  "
    >
      <div
        className=" w-fit


        lg:max-h-[800px] lg:min-h-[500px] lg:max-w-[600px] lg:min-w-[400px]

         md:max-h-[400px] md:min-h-[450px] md:max-w-[600px] md:min-w-[350px] 
         md:w-[450px]
          
           flex items-center justify-center
          "
        id="page1-in"
      >
        <TiltText refrence={tiltRef} />
      </div>
      <img
        src={selfi2}
        className="min-w-[320px] w-[500px] mt-10

         lg:max-w-[600px] lg:min-w-[600px] lg:min-h-[600px]

         rounded-full md:min-w-[430px] md:max-w-[430px] md:max-h-[430px] 
         md:min-h-[430px] md:mt-0

         shadow-2xl
         
        "
        alt=""
      />
    </div>
  );
};

export default Page1;
