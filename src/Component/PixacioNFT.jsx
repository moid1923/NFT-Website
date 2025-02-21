import React, { useState } from "react";
import { FaClock, FaTag } from "react-icons/fa";
import pixacio from "../assets/pixNFT.jfif"; // Your image file
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function PixacioNFT() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="max-w-[1320px] w-full mx-auto p-6 ">
      {/* Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-10">
        {/* Left - NFT Image */}
        <div className="flex justify-center max-w-[546px] max-h-[610px] py-5 bg-white w-full items-center rounded-xl ">
          <img
            src={pixacio}
            alt="Pixacio NFT"
            className=" rounded-xl shadow-lg w-[514px] max-h-[572px]"
          />
        </div>

        {/* Right - NFT Details */}
        <div className="space-y-4 max-w-[754px] w-full py-5">
          {/* Title */}
          <h1 className="text-5xl font-bold tracking-wide relative font-apex">
            PIXACIO
          </h1>
          <p className="text-gray-500 text-lg">
            Owned by{" "}
            <span className="font-semibold text-black font-roboto">
              Stella Nova
            </span>
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
                <button className="w-1/2 py-3 bg-white text-black rounded-lg font-semibold border border-gray-300 cursor-pointer">
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
                <span>Price</span> <span>USD Price</span> <span>Quantity</span>{" "}
                <span>From</span>
                <button className="px-4 py-1"></button>
              </div>
              <hr />
              <div className="mt-2 flex justify-between items-center p-4">
                <span className="font-bold">0.008 FRY</span>
                <span>$4.25</span>
                <span>2</span>
                <span>16DD55</span>
                <button className="px-4 py-1 bg-red-500 text-white rounded-md">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4  bg-red-600 h-[600px] mt-3">
        <div className="col-1 max-w-[546px] max-h-[610px] bg-blue">
          <div className="row-1">
            <div className="border border-gray-300   w-full max-w-[546px] shadow-sm bg-white">
              <div
                className="flex justify-between items-center p-4 cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-center gap-2 p-2">
                  <FaBars className="text-gray-600 text-lg" />
                  <span className="font-semibold text-gray-800 text-base">
                    Description
                  </span>
                </div>
                {isOpen ? (
                  <IoIosArrowUp className="text-gray-600 text-xl" />
                ) : (
                  <IoIosArrowDown className="text-gray-600 text-xl" />
                )}
              </div>
               
              {/* Content Section (Hidden by Default) */}
              {isOpen && (
                
                <div className="">
                  <hr className="pb-3"/>
                  <p className=" px-4">By <span className="font-bold text-gray-900">Stella Nova</span> </p>
                  <p className="text-gray-600 text-sm mt-1 px-4 pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris eu feugiat felis, in maximus neque. Morbi rutrum est
                    interdum, suscipit erat et, mattis ante. Donec at diam
                    pulvinar, pulvinar orci vitae, luctus mauris.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="row-2"></div>
        </div>
        <div className="col-2 max-w-[754px] w-full bg-black">
          <div className="row-1 w-full ">
          <div className="bg-white rounded-lg shadow font-roboto">
            <div className="flex justify-between p-4 items-center">
              <h3 className="text-xl font-semibold">Listings</h3>
              <button className="text-gray-500">▼</button>
            </div>
            <hr className="bg-gray-100 text-gray-100" />
            <div className="mt-4 ">
              <div className="flex justify-between text-gray-600 text-sm  p-4">
                <span>Price</span> <span>USD Price</span> <span>Quantity</span>{" "}
                <span>From</span>
                <button className="px-4 py-1"></button>
              </div>
              <hr />
              <div className="mt-2 flex justify-between items-center p-4">
                <span className="font-bold">0.008 FRY</span>
                <span>$4.25</span>
                <span>2</span>
                <span>16DD55</span>
                <button className="px-4 py-1 bg-red-500 text-white rounded-md">
                  Buy
                </button>
              </div>
              <div className="mt-2 flex justify-between items-center p-4">
                <span className="font-bold">0.008 FRY</span>
                <span>$4.25</span>
                <span>2</span>
                <span>16DD55</span>
                <button className="px-4 py-1 bg-red-500 text-white rounded-md">
                  Buy
                </button>
              </div>
              <div className="mt-2 flex justify-between items-center p-4">
                <span className="font-bold">0.008 FRY</span>
                <span>$4.25</span>
                <span>2</span>
                <span>16DD55</span>
                <button className="px-4 py-1 bg-red-500 text-white rounded-md">
                  Buy
                </button>
              </div>
            </div>
          </div>
          </div>
          <div className="row-2"></div>
        </div>
      </div>
    </div>
  );
}
