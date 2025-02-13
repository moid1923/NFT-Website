import React, { useState } from "react";
import nft1 from "../assets/nft1.jfif";
import nft2 from "../assets/nft2.jfif";
import nft3 from "../assets/nft3.jfif";
import nft4 from "../assets/nft4.jfif";
import nft5 from "../assets/nft5.jfif";
import nft6 from "../assets/nft6.png";
import nft7 from "../assets/nft7.jfif";
import nft8 from "../assets/nft8.png";
import hero from "../assets/fc-logo.jfif";
import bg from "../assets/bgfeature.png";
import tran from "../assets/tradnft.png";

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

const options = ["Last 30 Minutes", "Last One Hour", "Last 7 Hours", "Last Hours"];

export default function TrendingNFTs() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="py-10 lg:my-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 flex-row md:mb-[50px]">
          <h2 className="md:text-[64px] sm:text-[45px] text-[25px] font-apex font-normal md:leading-[76px] tracking-[4%] ">
            TRENDING NFT'S
          </h2>
          {/* Dropdown Button */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border w-[140px] h-[42px] md:w-[213px] md:h-[52px] border-red-500 text-red-500 px-2 md:px-[25px] py-[14px] rounded-lg flex justify-between items-center text-md sm:text-base cursor-pointer text-[14px] md:text-[18px] font-normal"
            >
              {selectedOption}
              <img src={tran} alt="Dropdown Icon" className="w-4 h-4 ml-1" />
            </button>
            {isOpen && (
              <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOpen(false);
                    }}
                    className="px-[25px] py-[14px] text-black cursor-pointer hover:bg-red-100 text-[18px] font-normal"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-3 lg:gap-6">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="w-full max-w-[308px] h-[410px] rounded-2xl p-4 shadow-lg overflow-hidden mx-auto transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="p-3 flex items-center space-x-3">
                <img src={hero} className="w-10 h-10 rounded-full" alt="Profile" />
                <div>
                  <h3 className="text-[18px] font-apex">STELLA NOVA</h3>
                  <p className="text-[11px] text-gray-500">@Stella Nova</p>
                </div>
              </div>

              <div className="relative w-full h-[84%]">
                <img
                  src={nft.img}
                  alt="NFT"
                  className="w-full h-[100%] object-cover absolute rounded-2xl"
                />

                <div className="p-3 w-full flex justify-between items-center absolute bottom-2 z-40">
                  <button className="bg-red-500 text-white text-[12px] px-[17px] py-[11px] rounded-md text-sm cursor-pointer hover:opacity-70 transition duration-200">
                    Buy
                  </button>
                  <span className="text-sm font-bold bg-white px-3 py-[11px] text-[12px] rounded-lg">
                    Price: {nft.price} ETH
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
