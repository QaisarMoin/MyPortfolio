import React from "react";
import "./tiltedText.css";
import { delay, motion } from "framer-motion";

const TiltText = ({ refrence }) => {
  return (
    <div
      ref={refrence}
      className="uppercase ml-5  md:ml-0 flex flex-col md:pl-5
       items-start justify-center relative 
       h-fit  rounded-2xl text-nowrap  min-w-[200px]
       w-[50vw] md:max-h-[800px] md:min-h-[500px] md:max-w-[600px] md:min-w-[400px]  "
    >
      <h1
        className="font-[font1] text-[25px]
         md:leading-[50px] leading-[25px] flex items-center justify-center"
      >
        <span
          className="text-white font-[font2]
         md:text-[60px] "
        >
          Hi, I’m{" "}
        </span>
        <motion.h1
          initial={{ x: "100vw" }}
          animate={{ x: "55%" }}
          transition={({ delay: 0.5 }, { duration: 0.8 })}
          className="text-[#e0fd60] font-[font1] md:text-[100px] h-fit
          -ml-14 text-[30px] flex md:ml-[-200px]"
        >
          Mohd Qaisar Moin
        </motion.h1>
      </h1>

      <h1
        className="font-[font2] text-[5vw] md:text-[60px]
       text-black"
      >
        <span className="bg-orange-400 font-[font4] font-bold rounded-sm md:rounded-lg">
          a
        </span>
        <span className="text-white text-[6vw] md:text-[60px]">Mern stack</span>
      </h1>

      <div
        className="font-[font2] text-[6vw] md:text-[60px]
       md:leading-[80px]  flex"
      >
        {" "}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          whileHover={{ scale: 1.1 }}
          transition={({ ease: [0.76, 0, 0.24, 1] }, { duration: 1.0 })}
          className="bg-orange-400 rounded-lg font-[font2] text-black"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              ({ ease: [0.5, 0, 0.75, 0] }, { duration: 1 }, { delay: 0.5 })
            }
            className="font-[font2] text-black"
          >
            {" "}
            develop
          </motion.span>
        </motion.div>
        <span className="text-[#e0fd60] font-[font4] font-bold">er</span>
      </div>
    </div>
  );
};

export default TiltText;
