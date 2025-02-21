import React from "react";
import { FaClock, FaTag } from "react-icons/fa";
import pixacio from "../assets/pixNFT.jfif"; // Your image file

export default function PixacioNFT() {
  return (
    <div className="max-w-[1320px] w-full mx-auto p-6 ">
      {/* Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-10">
        {/* Left - NFT Image */}
        <div className="flex justify-center max-w-[546px] max-h-[610px] py-5 bg-white w-full items-center rounded-xl ">
          <img src={pixacio} alt="Pixacio NFT" className=" rounded-xl shadow-lg w-[514px] max-h-[572px]" />
        </div>

        {/* Right - NFT Details */}
        <div className="space-y-4 max-w-[754px] w-full py-5">
          {/* Title */}
          <h1 className="text-5xl font-bold tracking-wide relative font-apex">
            PIXACIO
            
          </h1>
          <p className="text-gray-500 text-lg">
            Owned by <span className="font-semibold text-black font-roboto">Stella Nova</span>
          </p>

          {/* Sale Info */}
          
          {/* Price & Buy Section */}
          <div className="bg-white rounded-lg shadow flex flex-col font-roboto">
          <div className="flex items-center space-x-2 text-gray-500 p-6">
            <FaClock />
            <p>Sale ends 18 November 2023 at 8:47 am</p>
          </div>
<hr className="bg-gray-100" />
               <div className="p-6 font-roboto">
               <p className="text-gray-500 text-sm">Current Price</p>
            <p className="text-3xl font-bold">5.001 FRY</p>
            <div className="flex gap-4 mt-4">
              <button className="w-1/2 py-3 bg-white text-black rounded-lg font-semibold border border-gray-100 cursor-pointer">
                Buy now
              </button>
              <button className="w-1/2 py-3 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg font-semibold cursor-pointer">
                Make offer
              </button>
               </div>
            
            </div>
          </div>

          {/* Listings */}
          <div className="bg-white rounded-lg shadow font-roboto">
            <div className="flex justify-between p-4 items-center">
              <h3 className="text-xl font-semibold">Listings</h3>
              <button className="text-gray-500">▼</button>
            </div>
            <hr className="bg-gray-100 text-gray-100" />
            <div className="mt-4 ">
              <div className="flex justify-between text-gray-600 text-sm  p-4">
                <span>Price</span> <span>USD Price</span> <span>Quantity</span> <span>From</span>
              </div>
              <hr />
              <div className="mt-2 flex justify-between items-center p-4">
                <span className="font-bold">0.008 FRY</span>
                <span>$4.25</span>
                <span>2</span>
                <button className="px-4 py-1 bg-red-500 text-white rounded-md">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
