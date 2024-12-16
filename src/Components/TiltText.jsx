import React from "react";
import "./tiltedText.css";
import { delay, motion } from "framer-motion";

const TiltText = ({ abc }) => {
  return (
    <div
      ref={abc}
      className="uppercase ml-10 mt-44 w-fit h-fit p-5 rounded-2xl "
    >
      <h1
        className="font-[font1] text-[8vw]
         mt-10 leading-[2vw] w-fit h-fit"
      >
        <span className="text-white font-[font2] text-[5vw]">Hi, I’m </span>
        <motion.h1
          initial={{ x: "100vw" }}
          animate={{ x: "55%" }}
          transition={({ delay: 0.5 }, { duration: 0.8 })}
          className="text-[#e0fd60] font-[font1] flex"
        >
          Mohd Qaisar Moin
        </motion.h1>
      </h1>

      <h1
        className="font-[font2] text-[5vw]
       leading-[10vw] w-fit h-fit text-black"
      >
        <span className="bg-orange-400 font-[font4] font-bold rounded-lg">
          a
        </span>
        <span className="text-white text-[6vw]">Mern stack</span>
      </h1>

      <div
        className="font-[font2] text-[6vw]
       leading-[5vw] w-fit h-fit flex"
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
