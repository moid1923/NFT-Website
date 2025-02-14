import React from "react";
import oction1 from "../assets/sold2.png";
import oction2 from "../assets/rand2.png";
import oction3 from "../assets/rand3.png";
import oction4 from "../assets/sold8.png";

function Actionhero() {
  return (
    <div className="flex flex-col items-center py-10 xl:mt-[158px]">
      {/* Auction Heading */}
      <h2 className="text-red-600 text-4xl md:text-[150px] font-bold mb-[50px]  xl:mb-[25px] font-apex leading-[70px] tracking-[4%]">
        AUCTION
      </h2>

      {/* Image Row */}
      <div className="max-w-[1320px] w-full px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 z-10">
        <div className=" w-full max-w-[292px] h-[293px] p-5  rounded-2xl  overflow-hidden mx-auto hover:opacity-90 z-10">
          <div className="relative w-full h-[100%]">
            <img
              src={oction1}
              alt="NFT"
              className="w-full h-[100%] object-cover absolute rounded-2xl"
            />
            
          </div>
        </div>
        <div className=" relative w-full  max-w-[292px] h-[293px] p-5  rounded-2xl  overflow-hidden mx-auto hover:opacity-90 z-10">
          <div className="absolute bottom-0 left-0 w-full lg:h-[50%] h-[100%] p-5">
            <img
            src={oction2}
              alt="NFT"
              className=" object-cover absolute w-[252px] h-[253px]  rounded-2xl"
            />
            
          </div>
        </div>
        <div className="relative w-full  max-w-[292px] h-[293px] p-5  rounded-2xl  overflow-hidden mx-auto hover:opacity-90 z-10">
          <div className="absolute bottom-0 left-0 w-full lg:h-[50%] h-[100%] p-5">
            <img
              src={oction3}
              alt="NFT"
              className=" w-[252px] h-[253px] object-cover absolute rounded-2xl "
            />
            
          </div>
        </div>
        <div className=" w-full  max-w-[292px] h-[293px] p-5  rounded-2xl  overflow-hidden mx-auto hover:opacity-90 z-10">
          <div className="relative w-full h-[100%]">
            <img
              src={oction4}
              alt="NFT"
              className="w-full h-[100%] object-cover absolute rounded-2xl"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actionhero;
