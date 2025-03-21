import React from "react";
import Navbar from "../Component/Navbar";
import js from "../assets/jc.png";
import JaCollection from "../Component/JaCollection";
import Footer from "../Component/Footer";
import PromptE from "../AinftComponent/PromptE";

function JCollection() {
  return (
    <div>
      <Navbar />
      <div className="hero-section my-16">
        <div className="max-w-[1320px] w-full mx-auto">
          <div className="heading">
            <div className="font-apex font-bold text-[30px] sm:text-[50px] md:text-[64px] lg:text-[96px] text-[#fe0101] text-center">
              JACOB JONES
            </div>
            <div
              className="font-apex font-bold text-[18px] sm:text-[32px] md:text-[45px] lg:text-[64px] text-center text-[#2B2B2B]   leading-normal tracking-[2.56px] capitalize
"
            >
              COLLECTION
            </div>
          </div>
          <div className="img -mt-12 sm:-mt-12 md:-mt-16 lg:-mt-22 xs:p-4 sm-p-2 md:p-0">
            <img src={js} alt="" />
          </div>
        </div>
      </div>
     <PromptE/>
      <Footer />
    </div>
  );
}

export default JCollection;
