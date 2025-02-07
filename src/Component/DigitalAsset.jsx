import React from "react";
import rand1 from "../assets/rand1.jfif";
import rand2 from "../assets/rand2.png";
import rand3 from "../assets/rand3.png";
import rand4 from "../assets/rand4.jfif";
import rand5 from "../assets/rand5.png";
import rand6 from "../assets/rand6.png";
import rand7 from "../assets/rand7.png";
import rand8 from "../assets/rand8.png";
import './digital.css'
const DigitalAsset = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-5 overflow-hidden">
      {/* Title */}
      <h1 className="text-center text-black font-apex text-[35px] sm:text-4xl md:text-5xl lg:text-[64px] mb-8">
        TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
      </h1>

      {/* Floating Images & Input Container */}
      <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center">
        {/* Left Images */}
        <img src={rand1} className="absolute top-0 left-10 w-16 sm:w-20 md:w-24 rounded-lg shadow-lg" />
        <img src={rand2} className="c-2 absolute top-1/3 left-5 w-16 sm:w-20 md:w-24 rounded-lg shadow-lg" />
        <img src={rand3} className="c-3 absolute bottom-10 left-20 w-16 sm:w-20 md:w-24 rounded-lg shadow-lg" />
        <img src={rand4} className="c-4 absolute bottom-0 left-1/4 w-16 sm:w-20 md:w-24 rounded-lg shadow-lg" />

        {/* Right Images */}
        <img src={rand5} className="absolute top-5 right-10 w-16 sm:w-20 md:w-24 rounded-lg shadow-lg" />
        <img src={rand6} className="c-6 absolute top-1/2 right-5 w-16 sm:w-20 md:w-24 rounded-lg shadow-lg" />
        <img src={rand7} className="c-7 absolute bottom-10 right-20 w-20 md:w-24 rounded-lg shadow-lg" />
        <img src={rand8} className="c-8 absolute bottom-0 right-1/4 w-16 sm:w-20 md:w-24 rounded-lg shadow-lg" />

        {/* Input Box - Centered */}
        <div className="relative w-full max-w-lg bg-white rounded-full flex items-center shadow-lg px-4 py-2">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-full sm:py-3 sm:px-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 text-[12px] px-2 py-3 sm:text-[18px] "
          />
          <button className="absolute right-5 bg-red-500 text-white px-2  sm:px-6 py-2 rounded-full font-medium shadow-md hover:bg-red-600 transition text-[14px] sm:text-[18px]">
            Generate 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalAsset;
