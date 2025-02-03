import React from "react";

import fcone from "../assets/fc-1.png";
import fctwo from "../assets/fc-2.png";
import fcthree from "../assets/fc-3.png";
import fcfour from "../assets/fc-4.jfif";
import fclogo from '../assets/fc-logo.jfif'

const cards = [
  { id: 1, img: fcone, price: "$20.00" },
  { id: 2, img: fctwo, price: "$25.00" },
  { id: 3, img: fcthree, price: "$30.00" },
  { id: 4, img: fcfour, price: "$22.00" },
];

export default function FeaturedCollection() {
  return (
     <div className="bg-gradient-to-b from-pink-100 to-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <h2 className="text-3xl font-bold heading-font">Featured Collection</h2>
            <div className="flex justify-between items-center mb-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sapiente, ea id unde blanditiis rem.</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center">
                Last 30 Minutes <span className="ml-2">▼</span>
              </button>
            </div>
    
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="w-full max-w-[308px] h-[410px] bg-white rounded-2xl shadow-lg overflow-hidden mx-auto"
                >
                  <div className="p-3 flex items-center space-x-3">
                    <img
                      src={fclogo}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">STELLA NOVA</h3>
                      <p className="text-xs text-gray-500">@Stella Nova</p>
                    </div>
                  </div>
    
    
                <div className=" relative w-full h-[84%]">
                <img
                    src={card.img}
                    alt="NFT"
                    className="w-full h-[100%] object-cover absolute"
                  />
    
                  <div className="p-3 w-full flex justify-between  items-center absolute bottom-2 z-40">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                      Buy
                    </button>
                    <span className="text-sm font-bold bg-white px-3 py-2 rounded-lg">Price: {card.price} ETH</span>
                  </div>
                </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
  );
}
