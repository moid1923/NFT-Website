import React from "react";
import oction1 from "../assets/oction1.png";
import oction2 from "../assets/oction2.png";
import oction3 from "../assets/oction3.png";
import oction4 from "../assets/oction4.png";
import oction5 from "../assets/oction5.png";
import oction6 from "../assets/oction6.png";
import oction7 from "../assets/oction7.jfif";
import oction8 from "../assets/oction8.png";
import hero from "../assets/fc-logo.jfif";
import MainBtn from "./MainBtn";
import bg from "../assets/bgfeature.png";
const oction = [
  { id: 1, img: oction1, price: "142.02" },
  { id: 2, img: oction2, price: "142.02" },
  { id: 3, img: oction3, price: "142.02" },
  { id: 4, img: oction4, price: "142.02" },
  { id: 5, img: oction5, price: "142.02" },
  { id: 6, img: oction6, price: "142.02" },
  { id: 7, img: oction7, price: "142.02" },
  { id: 8, img: oction8, price: "142.02" },
];
function Oction() {
  return (
    <div>
      <div className="py-10 lg:my-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}

          <h2 className="md:text-[64px] text-[45px] text-center  md:text-left  font-apex font-normal leading-[76px] tracking-[4%]">
            Auction
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {oction.map((nft) => (
              <div
                key={nft.id}
                className="group w-full max-w-[308px] h-[410px] p-4 rounded-2xl shadow-lg overflow-hidden mx-auto hover:opacity-90"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="p-3 flex items-center space-x-3">
                  <img src={hero} className="w-10 h-10 rounded-full" />
                  <div className="">
                    <h3 className="text-sm font-apex">STELLA NOVA</h3>
                    <p className="text-xs text-gray-500">@Stella Nova</p>
                  </div>
                </div>

                <div className="relative w-full h-[84%]">
                  <img
                    src={nft.img}
                    alt="NFT"
                    className="w-full h-[100%] object-cover absolute rounded-2xl"
                  />
                  <div className="">
                    <p
                      className="btn-auc bg-white text-black rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 tracking-wider 
            transition-all duration-300 
            group-hover:hidden"
                    >
                      3:06:59:18
                    </p>
                    <p
                      className="btn-auc hidden bg-white text-black rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 tracking-wider 
            transition-all duration-300 
            group-hover:bg-red-500 group-hover:text-white group-hover:top-20 group-hover:block"
                    >
                     place a bid 
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="text-[22px] block mx-auto cursor-pointer bg-gradient-to-r from-[#FF9292] to-[#FD0000] text-white px-8 py-4 rounded-lg shadow-md hover:opacity-70 transition duration-200 text-center items-center mt-[70px]">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Oction;
