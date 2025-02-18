import React from "react";
import { FaClock, FaTag } from "react-icons/fa";
import pixacio from "../assets/pixaciohero.jfif"; // Your image file

export default function PixacioNFT() {
  return (
    <div className="max-w-6xl mx-auto p-6 ">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - NFT Image */}
        <div className="flex justify-center">
          <img src={pixacio} alt="Pixacio NFT" className="w-full max-w-sm rounded-xl shadow-lg" />
        </div>

        {/* Right - NFT Details */}
        <div className="space-y-4">
          {/* Title */}
          <h1 className="text-5xl font-bold tracking-wide relative">
            PIXACIO
            <span className="block w-16 h-1 bg-black mt-1"></span>
          </h1>
          <p className="text-gray-500 text-lg">
            Owned by <span className="font-semibold text-black">Stella Nova</span>
          </p>

          {/* Sale Info */}
          
          {/* Price & Buy Section */}
          <div className="bg-gray-100 rounded-lg shadow flex flex-col">
          <div className="flex items-center space-x-2 text-gray-500 p-6">
            <FaClock />
            <p>Sale ends 18 November 2023 at 8:47 am</p>
          </div>
<hr />
               <div className="p-6">
               <p className="text-gray-500 text-sm">Current Price</p>
            <p className="text-3xl font-bold">5.001 FRY</p>
            <div className="flex gap-4 mt-4">
              <button className="w-1/2 py-3 bg-white text-black rounded-lg font-semibold">
                Buy now
              </button>
              <button className="w-1/2 py-3 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg font-semibold">
                Make offer
              </button>
               </div>
            
            </div>
          </div>

          {/* Listings */}
          <div className="bg-gray-100  rounded-lg shadow">
            <div className="flex justify-between p-4 items-center">
              <h3 className="text-xl font-semibold">Listings</h3>
              <button className="text-gray-500">▼</button>
            </div>
            <hr />
            <div className="mt-4 ">
              <div className="flex justify-between text-gray-600 text-sm  p-2">
                <span>Price</span> <span>USD Price</span> <span>Quantity</span> <span>From</span>
              </div>
              <hr />
              <div className="mt-2 flex justify-between items-center">
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
