import React from "react";
import "./SmallCard.css";

const SmallCard = ({ children, cardName, cardBackName, cardNo }) => {
  return (
    <>
      {/* Outer most Card   */}
      <div
        className={` min-w-fit w-fit flex text-black  justify-center
         items-center px-3
         h-[50px] rounded-lg  card py-1 bg-[#f5f5f7] mt-4`}
      >
        {/* Inner Card */}
        <div
          className="min- w-[110px] flex justify-center items-center
         h-[40px] rounded-xl  container1 "
        >
          {/* Front */}
          <div
            className="min-w-[80px] h-[70px] flex justify-center
             items-center front rounded-xl gap-1 "
          >
            {children}
            <p>{cardName}</p>
          </div>
          {/* Back */}
          <div className="back rounded-xl">
            {/* <img src={loading} className="bg-black" alt="" /> */}
            <p>{cardBackName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
