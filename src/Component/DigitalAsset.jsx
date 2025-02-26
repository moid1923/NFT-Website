import React from "react";
import rand1 from "../assets/rand1.jfif";
import rand2 from "../assets/rand2.png";
import rand3 from "../assets/rand3.png";
import rand4 from "../assets/rand4.jfif";
import rand5 from "../assets/rand5.png";
import rand6 from "../assets/rand6.png";
import rand7 from "../assets/rand7.png";
import rand8 from "../assets/rand8.png";
import "./digital.css";
const DigitalAsset = () => {
  return (
    <div className="relative  w-full max-w-[1320px] mx-auto   flex flex-col items-center justify-center  p-5 overflow-hidden lg:my-10">
      {/* Title */}
      <h1 className="text-center text-black font-apex text-[30px] sm:text-4xl md:text-5xl lg:text-[64px] mb-4 md:mb-8 font-normal leading-tight md:leading-[76px] tracking-[4%]">
        TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
      </h1>

      {/* Floating Images & Input Container */}
      <div className="relative w-full max-w-[1320px]  h-[831px] flex items-center justify-center mx-auto">
        {/* Left Images */}
        <div className="lg:w-[120px] lg:h-[120px] sm:w-[100px] sm:h-[100px] c-1 bg-white absolute p-1 top-30 left-16   rounded-lg shadow-lg cd">
          <img
            src={rand1}
            alt=""
            className="c1-i lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] object-cover  rounded-lg shadow-lg cdimg"
          />
        </div>
        <div className="lg:w-[170px] lg:h-[170px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px]  bg-white p-1 c-2 absolute top-[33%] left-10   rounded-lg shadow-lg cd">
          <img
            src={rand2}
            alt=""
            className="c2-i lg:w-[160px] lg:h-[160px] md:w-[140px] md:h-[140px] sm:w-[110px] sm:h-[110px] object-cover rounded-lg shadow-lg cdimg"
          />
        </div>
        <div className="lg:w-[120px] lg:h-[120px] sm:w-[100px] sm:h-[100px]  bg-white p-1 c-3 absolute bottom-44 left-2 rounded-lg shadow-lg cd">
          <img
            src={rand3}
            alt=""
            className="c3-i  lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] md:h-[90px] object-cover  rounded-lg shadow-lg cdimg"
          />
        </div>
        <div className="lg:w-[120px] lg:h-[120px] sm:w-[100px] sm:h-[100px]  bg-white p-1 c-4 absolute bottom-28 left-1/5 rounded-lg shadow-lg cd">
          <img
            src={rand4}
            alt=""
            className="c4-i  lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] object-cover  rounded-lg shadow-lg cdimg"
          />
        </div>

        {/* Right Images */}
        <div className="lg:w-[170px] lg:h-[170px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] p-1 c-5 bg-white absolute top-20  right-68  rounded-lg shadow-lg cd">
          <img
            src={rand5}
            alt=""
            className="c5-1  lg:w-[160px] lg:h-[160px] md:w-[140px] md:h-[140px] sm:w-[110px] sm:h-[110px] object-cover  rounded-lg shadow-lg cdimg"
          />
        </div>

        <div className="lg:w-[120px] lg:h-[120px] sm:w-[100px] sm:h-[100px] p-1  bg-white c-6 absolute top-40 right-13 rounded-lg shadow-lg cd">
          <img
            src={rand6}
            alt=""
            className="c6-1  lg:w-[110px] lg:h-[110px] sm:w-[90px] sm:h-[90px] object-cover  rounded-lg shadow-lg cdimg"
          />
        </div>

        <div className="lg:w-[170px] lg:h-[170px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] p-1  bg-whitec-7 absolute bottom-56 right-8  rounded-lg shadow-lg cd">
          <img
            src={rand7}
            alt=""
            className="c7-i  lg:w-[160px] lg:h-[160px] md:w-[140px] md:h-[140px] sm:w-[110px] sm:h-[110px] object-cover  rounded-lg shadow-lg cdimg"
          />
        </div>
        <div className="lg:w-[170px] lg:h-[170px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] p-1  bg-white c-8 absolute bottom-16 right-1/6 rounded-lg shadow-lg cd">
          <img
            src={rand8}
            alt=""
            className="c8-i  lg:w-[160px] lg:h-[160px] md:w-[140px] md:h-[140px] sm:w-[110px] sm:h-[110px] object-cover  rounded-lg shadow-lg cdimg"
          />
        </div>
        {/* Input Box - Centered */}
        <div className="relative w-full max-w-[737px] h-[70px] bg-white rounded-md flex items-center shadow-lg px-4">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-full h-full pl-5 pr-20 py-3 border-none focus:outline-none text-[12px] sm:text-[14px] font-roboto"
          />
          <button className="absolute right-4 bg-[#FE0101] text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-red-600 shadow-lg transition text-[14px] sm:text-[18px]">
            Generate 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalAsset;
