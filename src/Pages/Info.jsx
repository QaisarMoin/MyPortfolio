import React from "react";

const Info = () => {
  return (
    <div
      className=" min-w-[100vw] relative
     text-white mt-40  overflow-hidden flex items-center flex-col"
    >
      {/* <------------------------- Banner Starting */}
      <div
        className=" h-fit relative  min-w-[1200px] 
      max-w-[1200px]  text-nowrap overflow-hidden"
      >
        <span className="font-[font2]  leading-[50px] text-[42px]">
          I specialize in building{" "}
          <span className="font-[font1] text-8xl ">dynamic web</span>
        </span>

        <br />
        <span className="font-[font2] leading-[10px] text-[42px]">
          solutions that{" "}
          <span className="font-[font1] text-8xl">empower people</span> to
          achieve their goals.
        </span>
      </div>
      {/* Banner end Here -----------------------------> */}

      {/* Main Body Start */}
      <div className="min-w-[1200px] flex min-h-screen mt-10 border-2">
        <div className="w-[50%] border-2 border-red-400">
          <div className="w-[100%] h-[100%] object-cover">
            <img
              src="https://unsplash.com/photos/black-and-white-plane-flying-over-the-sea-during-daytime-rNqs9hM0U8I"
              alt="wwe"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
        <div className="w-[50%] border-2 border-red-400"></div>
      </div>
    </div>
  );
};

export default Info;
