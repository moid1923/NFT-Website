import React from "react";
import hero from "../assets/hero-card.png";
import herofr from "../assets/herofr.png";
import herofl from "../assets/herofl.png";
import herosr from "../assets/herosr.png";
import herosl from "../assets/herosl.png";
import right1 from "../assets/right1.png";
import left1 from "../assets/left1.png";
import mainc from '../assets/mainc.png'
import "./heroimages.css";

function HeroImages() {
  return (
    <div className="relative max-w-[1920px] w-full mx-auto xl:h-[630px] lg:h-[550px] md:h-[500px] h-[450px]">
      {/* Background Hands */}
      <div className="absolute hidden xl:block w-full h-full">
        <img src={left1} alt="" className="absolute -left-40 top-1/2 transform -translate-y-1/2 left1 opacity-50" />
        <img src={right1} alt="" className="absolute -right-40 top-1/2 transform -translate-y-1/2 right1 opacity-50" />
      </div>

      {/* Cards Section */}
      <div className="relative mx-auto flex justify-center items-center h-[411px] w-full ">
        <div className="relative w-full max-w-[1120px] flex justify-center items-center">
          {/* Main Center Card */}
          <img
            src={mainc}
            alt="Main Card"
            // style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
            className="main-card w-[308px] h-[410px] z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-custom"
          />
          {/* Front Left Card */}
          <img
            src={herofl}
            alt="Front Left Card"
            // style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
            className="f-left w-[248px] h-[380px] absolute top-1/2 left-[25%] transform -translate-y-1/2 z-20 hidden lg:block drop-shadow-custom"
          />
          {/* Front Right Card */}
          <img
            src={herofr}
            alt="Front Right Card"
            // style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
            className="f-right w-[248px] h-[380px] absolute top-1/2 right-[25%] transform -translate-y-1/2 z-20 hidden lg:block drop-shadow-custom"
          />
          {/* Side Left Card */}
          <img
            src={herosl}
            alt="Side Left Card"
            // style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
            className="s-left w-[208px] h-[350px] absolute top-1/2 left-[10%] transform -translate-y-1/2 z-10 hidden lg:block drop-shadow-custom"
          />
          {/* Side Right Card */}
          <img
            src={herosr}
            alt="Side Right Card"
            // style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
            className="s-right w-[208px] h-[350px] absolute top-1/2 right-[10%] transform -translate-y-1/2 z-10 hidden lg:block drop-shadow-custom"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroImages;
