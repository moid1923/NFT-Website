import React from "react";
import hm from "../assets/NFTHero.png";
function NftHero() {
  return (
    <div>
      <div className="max-w-[1320px] w-full mx-auto my-[85px]">
        <div className="heading">
          <p className="text-[#2B2B2B] text-center font-apex text-[64px] font-bold leading-normal tracking-[2.56px] capitalize">
            Create your own <span className="font-bold text-[#FE0101]">masterpiece</span>
          </p>
        </div>
        <div className="image">
          <img src={hm} alt="" className="object-cover h-[496px] shrink-0" />
        </div>
      </div>
    </div>
  );
}

export default NftHero;
