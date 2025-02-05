import React from "react";
import topv from "../assets/topv.png";
import botv from "../assets/botv.png";
import sidev from "../assets/sidev.png";
import vlogo from "../assets/vlogo.jfif";

function Visibility() {
  return (
    <div className=" py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[64px]  text-gray-900 sm:text-5xl font-apex">
            BOOST YOUR NFTs: ENHANCE VISIBILITY AND VALUE
          </h1>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl font-triodion">
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>
          <button className="mt-6 bg-red-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 focus:ring focus:ring-red-300">
            Boost <span className="ml-2">🚀</span>
          </button>
        </div>
        <div className="image-section lg:w-1/2 relative h-[611px]">
            <div  className="absolute top-1 left-10  w-full max-w-[242px] h-[322px] bg-white rounded-2xl s"
            >
               <div className="p-3 flex items-center space-x-3 overflow-hidden ">
                                  <img
                                    src={vlogo}
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <div>
                                    <h3 className="text-sm font-semibold">STELLA NOVA</h3>
                                    <p className="text-xs text-gray-500">@Stella Nova</p>
                                  </div>
                                </div>
                  
                  
                              <div className=" relative w-full h-[84%] ">
                              <img
                                  src={topv}
                                  alt="NFT"
                                  className="w-full h-[100%] object-cover absolute"
                                />
                  
                                <div className="p-3 w-full flex justify-between  items-center absolute bottom-2 z-40">
                                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                                    Buy
                                  </button>
                                  <span className="text-sm font-bold bg-white px-3 py-2 rounded-lg">Price: 142.2 ETH</span>
                                </div>
                              </div>

            </div>
            <div  className="absolute bottom-3 left-4  w-full max-w-[220px] h-[245px] bg-white rounded-2xl opacity-0.6 "
            >
               <div className="p-3 flex items-center space-x-3">
                                  <img
                                    src={vlogo}
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <div>
                                    <h3 className="text-[12px] font-semibold">STELLA NOVA</h3>
                                    <p className="text-[10px] text-gray-500">@Stella Nova</p>
                                  </div>
                                </div>
                  
                  
                              <div className=" relative w-full h-[84%]">
                              <img
                                  src={topv}
                                  alt="NFT"
                                  className="w-full h-[100%] object-cover absolute"
                                />
                  
                                <div className="p-3 w-full flex justify-between  items-center absolute bottom-2 z-40">
                                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                                    Buy
                                  </button>
                                  <span className="text-sm font-bold bg-white px-3 py-2 rounded-lg">Price: 142.2 ETH</span>
                                </div>
                              </div>

            </div>
            <div  className="absolute right-0 bottom-20 w-full max-w-[201px] h-[175px] bg-white rounded-2xl opacity-0.6"
            >
               <div className="p-3 flex items-center space-x-3">
                                  <img
                                    src={vlogo}
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <div>
                                    <h3 className="text-[12px] font-semibold">STELLA NOVA</h3>
                                    <p className="text-[10px] text-gray-500">@Stella Nova</p>
                                  </div>
                                </div>
                  
                  
                              <div className=" relative w-full h-[84%]">
                              <img
                                  src={topv}
                                  alt="NFT"
                                  className="w-full h-[100%] object-cover absolute"
                                />
                  
                                <div className="p-3 w-full flex justify-between  items-center absolute bottom-2 z-40">
                                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                                    Buy
                                  </button>
                                  <span className="text-sm font-bold bg-white px-3 py-2 rounded-lg">Price: 142.2 ETH</span>
                                </div>
                              </div>

            </div>
        </div>

        {/* Image Section */}
        
      </div>
    </div>
  );
}

export default Visibility;
