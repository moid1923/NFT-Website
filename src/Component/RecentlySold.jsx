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
import flogo from '../assets/felogo.png'
const nfts = [
  { id: 1, img: nft1, logo: flogo },
  { id: 2, img: nft2, logo: flogo },
  { id: 3, img: nft3, logo: flogo },
  { id: 4, img: nft4, logo: flogo },
  { id: 5, img: nft5, logo: flogo},
  { id: 6, img: nft6, logo: flogo },
  { id: 7, img: nft7, logo: flogo },
  { id: 8, img: nft8, logo: flogo },
];

export default function RecentlySold() {
  return (
    <div className=" py-10 lg:my-10">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Header */}
        
          <h2 className="md:text-[64px] text-[30px] sm:text-[45px] xs:text-center md:text-left  font-apex font-normal leading-[76px] tracking-[4%] md:mb-[50px]">Recently Sold</h2>
          
       

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="w-full max-w-[308px] h-[410px] p-2 gap-6 rounded-2xl shadow-lg overflow-hidden mx-auto z-10  "
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="p-3 flex items-center space-x-3">
                <img
                  src={hero}

                  className="w-[53px] h-[53px] rounded-full"
                />
                <div>
                <h3 className="text-[18px] font-apex font-[300] text-[#2b2b2b]">STELLA NOVA</h3>
                <p className="text-[11px] text-[#6B6B6B] tracking-wide leading-0.5 font-roboto  font-[300]">@Stella Nova</p>
                </div>
              </div>


            <div className=" relative max-w-[292px] h-[314px]">
            <img
                src={nft.img}
                alt="NFT"
                className="w-full h-[100%] object-cover absolute opacity-[330] rounded-2xl mix-blend-multiply"
              />

              <div className="p-3 w-full flex justify-between  items-center absolute bottom-2 z-40">
                <button
                style={{ background: "linear-gradient(318deg, #FD0000 26.88%, #BB5151 105.85%)" }}
                 className=" font-[500] text-white font-roboto px-3 py-1 rounded-md text-[12px] w-[56px] h-[36px] cursor-pointer opacity-80">
                  Buy
                </button>
                <span className="text-sm font-roboto  w-[123px] font-medium text-[#2B2B2B] h-[36px] bg-white px-3 py-[11px] text-[12px] rounded-lg flex justify-center items-center gap-1">
                      Price:
                      <span className="w-[15px] h-[15px] rounded-full bg-black flex items-center justify-center"><img src={nft.logo} alt="" className="w-[10px] h-[10px] bg-black rounded-full" /></span>
                      <span className="text-[12px] font-roboto font-medium text-[#808080] tracking-[0.48px] capitalize">  142.02</span> 
                    </span>
              </div>
              <div className=''>
                        <button
                        style={{ background: "linear-gradient(318deg, #FD0000 26.88%, #BB5151 105.85%)" }}
                         className=' w-[96px] h-[37px] text-white text-[12px] font-roboto leading-[14px] tracking-[4%] text-center  px-5 py-2 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase '>Sold</button>
                    </div>
            </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
