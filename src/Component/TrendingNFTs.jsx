import React from "react";
import nft1 from "../assets/nft1.jfif";
import nft2 from "../assets/nft2.jfif";
import nft3 from "../assets/nft3.jfif";
import nft4 from "../assets/nft4.jfif";
import nft5 from "../assets/nft5.jfif";
import nft6 from "../assets/nft6.png";
import nft7 from "../assets/nft7.jfif";
import nft8 from "../assets/nft8.png";
import hero from '../assets/fc-logo.jfif'
import bg from '../assets/bgfeature.png'
const nfts = [
  { id: 1, img: nft1, price: "142.02" },
  { id: 2, img: nft2, price: "142.02" },
  { id: 3, img: nft3, price: "142.02" },
  { id: 4, img: nft4, price: "142.02" },
  { id: 5, img: nft5, price: "142.02" },
  { id: 6, img: nft6, price: "142.02" },
  { id: 7, img: nft7, price: "142.02" },
  { id: 8, img: nft8, price: "142.02" },
];

export default function TrendingNFTs() {
  return (
    <div className=" py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
          <h2 className="md:text-[64px] text-[45px]  font-apex">TRENDING NFT'S</h2>
          <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg flex items-center">
            Last 30 Minutes <span className="ml-2">▼</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="w-full max-w-[308px] h-[410px] rounded-2xl p-2 shadow-lg overflow-hidden mx-auto transform hover:scale-105 transition-transform duration-300 "
              style={{ backgroundImage: `url(${bg})` }}
              
            >
              <div className="p-3 flex items-center space-x-3">
                <img
                  src={hero}

                  className="w-10 h-10 rounded-full"
                />
                <div className="">
                  <h3 className="text-sm  font-apex">STELLA NOVA</h3>
                  <p className="text-xs text-gray-500">@Stella Nova</p>
                </div>
              </div>


            <div className=" relative w-full h-[84%]">
            <img
                src={nft.img}
                alt="NFT"
                className="w-full h-[100%] object-cover absolute rounded-2xl"
              />

              <div className="p-3 w-full flex justify-between  items-center absolute bottom-2 z-40">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                  Buy
                </button>
                <span className="text-sm font-bold bg-white px-3 py-2 rounded-lg">Price: {nft.price} ETH</span>
              </div>
            </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
