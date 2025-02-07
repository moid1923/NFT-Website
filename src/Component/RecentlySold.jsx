import React from "react";
import nft1 from "../assets/sold1.jfif";
import nft2 from "../assets/sold2.png";
import nft3 from "../assets/sold3.png";
import nft4 from "../assets/sold4.png";
import nft5 from "../assets/sold5.png";
import nft6 from "../assets/sold6.jfif";
import nft7 from "../assets/sold7.png";
import nft8 from "../assets/sold8.png";
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

export default function RecentlySold() {
  return (
    <div className=" py-10 lg:my-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        
          <h2 className="md:text-[64px] text-[45px] xs:text-center md:text-left  font-apex">Recently Sold</h2>
          
       

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="w-full max-w-[308px] h-[410px] p-2 rounded-2xl shadow-lg overflow-hidden mx-auto hover:opacity-50"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="p-3 flex items-center space-x-3">
                <img
                  src={hero}

                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-sm font-semibold">STELLA NOVA</h3>
                  <p className="text-xs text-gray-500">@Stella Nova</p>
                </div>
              </div>


            <div className=" relative w-full h-[84%]">
            <img
                src={nft.img}
                alt="NFT"
                className="w-full h-[100%] object-cover absolute opacity-[0.7] rounded-2xl"
              />

              <div className="p-3 w-full flex justify-between  items-center absolute bottom-2 z-40">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm opacity-[0.7]">
                  Buy
                </button>
                <span className="text-sm font-bold bg-white px-3 py-2 rounded-lg opacity-[0.7]">Price: {nft.price} ETH</span>
              </div>
              <div className=''>
                        <p className='bg-red-500  w-[96px] h-[37px] text-white text-[12px] text-center tracking-wider px-5 py-2 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   '>Sold</p>
                    </div>
            </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
