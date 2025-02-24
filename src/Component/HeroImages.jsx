import React from "react";
import hero from "../assets/hero-card.png";
import herofr from "../assets/herofr.png";
import herofl from "../assets/herofl.png";
import herosr from "../assets/herosr.png";
import herosl from "../assets/herosl.png";
import right1 from "../assets/right1.png";
import left1 from "../assets/left1.png";
import "./heroimages.css";

function HeroImages() {
  return (
    <div className="relative max-w-[1920px] w-full mx-auto h-[600px] ">
      {/* Background Hands */}
      <div className="absolute hidden xl:block w-full h-full">
        <img src={left1} alt="" className="absolute left-0 top-1/2 transform -translate-y-1/2" />
        <img src={right1} alt="" className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Cards Section */}
      <div className="relative mx-auto flex justify-center items-center h-full w-full">
        <div className="relative w-full max-w-[1120px] flex justify-center items-center">
          {/* Main Center Card */}
          <img
            src={hero}
            alt="Main Card"
            className="main-card w-[308px] h-[410px] z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
          />
          {/* Front Left Card */}
          <img
            src={herofl}
            alt="Front Left Card"
            className="f-left w-[248px] h-[380px] absolute top-1/2 left-[25%] transform -translate-y-1/2 z-20 hidden lg:block shadow-lg"
          />
          {/* Front Right Card */}
          <img
            src={herofr}
            alt="Front Right Card"
            className="f-right w-[248px] h-[380px] absolute top-1/2 right-[25%] transform -translate-y-1/2 z-20 hidden lg:block shadow-lg"
          />
          {/* Side Left Card */}
          <img
            src={herosl}
            alt="Side Left Card"
            className="s-left w-[208px] h-[350px] absolute top-1/2 left-[10%] transform -translate-y-1/2 z-10 hidden lg:block shadow-lg"
          />
          {/* Side Right Card */}
          <img
            src={herosr}
            alt="Side Right Card"
            className="s-right w-[208px] h-[350px] absolute top-1/2 right-[10%] transform -translate-y-1/2 z-10 hidden lg:block shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroImages;
