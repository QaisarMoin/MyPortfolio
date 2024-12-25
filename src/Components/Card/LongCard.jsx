import React from "react";

const LongCard = ({ imageAddress }) => {
  return (
    <div
      className="max-w-[80%] max-h-fit min-h-fit overflow-hidden
             flex justify-center items-center rounded-3xl object-cover
              mt-24 bg-gradient-to-b from-[#434343] 
               border-[0.2px] to-[#1f1f1f00] border-[#333333] "
    >
      {/* insider Card */}
      <div
        className="max-w-[96%] max-h-[97%] min-h-[97%]
               overflow-hidden object-cover 
             flex justify-center items-center rounded-xl"
      >
        <img
          src={imageAddress}
          alt="wwe"
          className="w-[100%] rounded-2xl h-[100%] 
                object-fit "
        />
      </div>
    </div>
  );
};

export default LongCard;
