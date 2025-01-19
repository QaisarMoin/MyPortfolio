import React from "react";
import "./tiltedText.css";
import { delay, motion } from "framer-motion";

const TiltText = ({ refrence }) => {
  return (
    <div
      ref={refrence}
      className=" h-fit min-w-[320px]

        md:max-h-[800px] md:min-h-[500px] md:max-w-[600px] md:min-w-[300px] 
        md:ml-0  md:pl-2 md:py-0

        flex flex-col items-start justify-center uppercase rounded-2xl text-nowrap "
    >
      <h1
        className="font-[font1] text-[27px] flex-col
          leading-tight flex items justify-center"
      >
        <span
          className=" text-[40px]

           md:leading-[45px]

         lg:text-[45px] md:text-[39px] lg:leading-[60px]
         
         text-[#f56300] font-[font2]
         "
        >
          Hi, I’m{" "}
        </span>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: "0%" }}
          transition={({ delay: 0.5 }, { duration: 0.8 })}
          className="text-[##0066cc] font-[impact] h-fit  text-[40px]
           lg:text-[70px] flex md:text-[59px] lg:leading-[60px] md:leading-[45px] "
        >
          Mohd Qaisar Moin
        </motion.div>
      </h1>

      <h1
        className="font-[font2]  text-[40px] md:text-[59px] lg:text-[70px]
       text-black "
      >
        <span
          className="bg-[#f56300] font-[font4] font-bold rounded-sm
         md:rounded-lg"
        >
          a
        </span>
        <span className="text-[#0066cc] text-[100%] md:text-[59px] lg:text-[70px]">
          Mern stack
        </span>
      </h1>

      <div
        className="font-[font2] md:text-[59px] lg:text-[70px]
       md:leading-[80px]  text-[40px] flex"
      >
        {" "}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          whileHover={{ scale: 1.1 }}
          transition={({ ease: [0.76, 0, 0.24, 1] }, { duration: 1.0 })}
          className="bg-[#f56300] rounded-lg font-[font2] text-black"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              ({ ease: [0.5, 0, 0.75, 0] }, { duration: 1 }, { delay: 0.5 })
            }
            className="font-[font2] text-black"
          >
            {" "}
            develop
          </motion.div>
        </motion.div>
        <span className="text-[#0066cc] font-[font4] font-bold">er</span>
      </div>
    </div>
  );
};

export default TiltText;
