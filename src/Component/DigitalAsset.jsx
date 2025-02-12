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
    <div className="relative   flex flex-col items-center justify-center w-full p-5 overflow-hidden lg:my-10">
      {/* Title */}
      <h1 className="text-center text-black font-apex text-[35px] sm:text-4xl md:text-5xl lg:text-[64px] mb-8">
        TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
      </h1>

      {/* Floating Images & Input Container */}
      <div className="relative w-full max-w-[1320px]  h-[831px] flex items-center justify-center mx-auto">
        {/* Left Images */}
        <div className="w-[120px] h-[120px] c-1 bg-white absolute p-1 top-30 left-10 rounded-lg shadow-lg cd">
          <img src={rand1} alt="" className="c1-i w-[110px] h-[110px] object-cover  rounded-lg shadow-lg cdimg"/>
         </div>
         <div className="w-[170px] h-[170px]  bg-white p-1 c-2 absolute top-[40%] left-10 rounded-lg shadow-lg cd">
          <img src={rand2} alt="" className="c2-i  w-[160px] h-[160px] object-cover rounded-lg shadow-lg cdimg"/>
         </div>
         <div className="w-[120px] h-[120px]  bg-white p-1 c-3 absolute bottom-36 left-0 rounded-lg shadow-lg cd">
          <img src={rand3} alt="" className="c3-i  w-[110px] h-[110px] object-cover  rounded-lg shadow-lg cdimg"/>
         </div>
         <div className="w-[120px] h-[120px]  bg-white p-1 c-4 absolute bottom-12 left-1/6 rounded-lg shadow-lg cd">
          <img src={rand4} alt="" className="c4-i  w-[110px] h-[110px] object-cover  rounded-lg shadow-lg cdimg"/>
         </div>
           
        {/* Right Images */}
        <div className="w-[170px] h-[170px] p-1 c-5 bg-white absolute top-5 right-56 rounded-lg shadow-lg cd">
          <img src={rand5} alt="" className="c5-1  w-[160px] h-[160px] object-cover  rounded-lg shadow-lg cdimg"/>
         </div>
        
         <div className="w-[120px] h-[120px] p-1  bg-white c-6 absolute top-32 right-10 rounded-lg shadow-lg cd">
          <img src={rand6} alt="" className="c6-1  w-[110px] h-[110px] object-cover  rounded-lg shadow-lg cdimg"/>
         </div>
         
         <div className="w-[170px] h-[170px] p-1  bg-whitec-7 absolute bottom-56 right-0 rounded-lg shadow-lg cd">
          <img src={rand7} alt="" className="c7-i  w-[160px] h-[160px] object-cover  rounded-lg shadow-lg cdimg"/>
         </div>
         <div className="w-[170px] h-[170px] p-1  bg-white c-8 absolute bottom-4 right-1/6 rounded-lg shadow-lg cd">
          <img src={rand8} alt="" className="c8-i  w-[160px] h-[160px] object-cover  rounded-lg shadow-lg cdimg"/>
         </div>
        {/* Input Box - Centered */}
        <div className="relative w-full max-w-[737px] bg-white rounded-md flex items-center shadow-lg px-4 py-2">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-full sm:py-3 sm:px-5 border-none focus:outline-none text-[12px] px-2 py-3 sm:text-[14px] font-roboto "
          />
          <button className="absolute right-2 bg-red-500 text-white px-2  sm:px-6 py-2 rounded-lg font-medium  hover:bg-red-600 shadow-lg transition text-[14px] sm:text-[18px]">
            Generate 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalAsset;
