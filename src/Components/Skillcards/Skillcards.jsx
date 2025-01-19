import React from "react";

const Skillcards = ({ children, heading }) => {
  return (
    <div className="w-full  border-white">
      <h1 className="text-[30px] font-[font13] text-[#3d8ddd] py-4 ">
        {heading}:
      </h1>
      <div className="w-full flex justify-center items-end flex-wrap gap-5">
        {children}
      </div>
    </div>
  );
};

export default Skillcards;
