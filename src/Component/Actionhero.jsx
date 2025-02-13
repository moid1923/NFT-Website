import React from "react";
import oction1 from "../assets/oction1.png";
import oction2 from "../assets/oction2.png";
import oction3 from "../assets/oction3.png";
import oction4 from "../assets/oction4.png";

function Actionhero() {
  return (
    <div className="flex flex-col items-center py-10 mt-[194px]">
      {/* Auction Heading */}
      <h2 className="text-red-600 text-4xl md:text-[150px] font-bold  mb-[25px] font-apex leading-[70px] tracking-[4%]">
        AUCTION
      </h2>

      {/* Image Row */}
      <div className="max-w-[1320px] w-full px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-10">
        <div className=" w-full max-w-[272px] h-[273px]  rounded-2xl  overflow-hidden mx-auto hover:opacity-90 z-10">
          <div className="relative w-full h-[100%]">
            <img
              src={oction1}
              alt="NFT"
              className="w-full h-[100%] object-cover absolute rounded-2xl"
            />
            
          </div>
        </div>
        <div className=" relative w-full max-w-[272px] h-[273px]  rounded-2xl  overflow-hidden mx-auto hover:opacity-90 z-10">
          <div className="absolute bottom-0 left-0 w-full h-[50%]">
            <img
              src={oction2}
              alt="NFT"
              className="w-full h-[100%] object-cover absolute rounded-2xl"
            />
            
          </div>
        </div>
        <div className="relative w-full max-w-[272px] h-[273px]  rounded-2xl  overflow-hidden mx-auto hover:opacity-90 z-10">
          <div className="absolute bottom-0 left-0 w-full h-[50%]">
            <img
              src={oction3}
              alt="NFT"
              className="w-full h-[100%] object-cover absolute rounded-2xl"
            />
            
          </div>
        </div>
        <div className=" w-full max-w-[272px] h-[273px]  rounded-2xl  overflow-hidden mx-auto hover:opacity-90 z-10">
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
