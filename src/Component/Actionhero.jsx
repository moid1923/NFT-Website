import React from "react";
import oction1 from "../assets/sold2.png";
import oction2 from "../assets/rand2.png";
import oction3 from "../assets/rand3.png";
import oction4 from "../assets/sold8.png";

function Actionhero() {
  return (
    <div className="flex flex-col items-center py-10 xl:mt-[158px]">
      {/* Auction Heading */}
      <h2 className="text-[#fe0101] text-4xl md:text-[150px] font-bold mb-[50px] xl:mb-[25px] font-apex leading-[70px] tracking-[4%]">
        AUCTION
      </h2>

      {/* Image Row - Adjusted Heights */}
      <div className="max-w-[1320px] w-full px-10 flex justify-center gap-6 items-end flex-wrap">
        {/* Full-height images */} 
        <div className="flex items-end justify-center p-[10px] bg-white rounded-xl w-[292px] h-[293px]">
          <img
            src={oction1}
            alt="NFT"
            className="w-[272px] h-[273px] object-cover rounded-2xl"
          />
        </div>

        {/* 50% height images */}
        <div className="flex items-end -[] justify-center p-[10px] bg-white rounded-xl w-[292px] h-[182px]">
          <img
            src={oction2}
            alt="NFT"
            className="w-[272px] h-[162px] object-cover rounded-2xl"
          />
        </div>
        <div className="flex items-end justify-center p-[10px] bg-white rounded-xl w-[292px] h-[182px]">
          <img
            src={oction3}
            alt="NFT"
            className="w-[272px] h-[162px] object-cover rounded-2xl"
          />
        </div>

        {/* Full-height image */}
        <div className="flex items-end justify-center p-[10px] bg-white rounded-xl w-[292px] h-[293px]">
          <img
            src={oction4}
            alt="NFT"
            className="w-[272px] h-[273px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Actionhero;
