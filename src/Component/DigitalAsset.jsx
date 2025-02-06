import React from "react";
import rand1 from "../assets/rand1.jfif";
import rand2 from "../assets/rand2.png";
import rand3 from "../assets/rand3.png";
import rand4 from "../assets/rand4.jfif";
import rand5 from "../assets/rand5.png";
import rand6 from "../assets/rand6.png";
import rand7 from "../assets/rand7.png";
import rand8 from "../assets/rand8.png";

const DigitalAsset = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen  p-5 overflow-hidden">
      {/* Title */}
      <h1 className="md:text-[64px] text-[45px] sm:text-4xl md:text-5xl text-center text-black mb-8 font-apex" >
        TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
      </h1>

      {/* Floating Images */}
      <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center">
        {/* Left Images */}
        <img src={rand1} className="absolute top-0 left-10 w-20 sm:w-24 rounded-lg shadow-lg" />
        <img src={rand2} className="absolute top-1/3 left-5 w-20 sm:w-24 rounded-lg shadow-lg" />
        <img src={rand3} className="absolute bottom-10 left-20 w-20 sm:w-24 rounded-lg shadow-lg" />
        <img src={rand4} className="absolute bottom-20 left-1/4 w-20 sm:w-24 rounded-lg shadow-lg" />

        {/* Right Images */}
        <img src={rand5} className="absolute top-5 right-10 w-20 sm:w-24 rounded-lg shadow-lg" />
        <img src={rand6} className="absolute top-1/2 right-5 w-20 sm:w-24 rounded-lg shadow-lg" />
        <img src={rand7} className="absolute bottom-10 right-20 w-20 sm:w-24 rounded-lg shadow-lg" />
        <img src={rand8} className="absolute bottom-20 right-1/4 w-20 sm:w-24 rounded-lg shadow-lg" />
      </div>

      {/* Input Box */}
      <div className="relative w-full max-w-xl mt-6">
        <input
          type="text"
          placeholder="Fantasy Creature holding a sword..."
          className="w-full py-3 px-5 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-red-600 transition">
          Generate 🚀
        </button>
      </div>
    </div>
  );
};

export default DigitalAsset;
