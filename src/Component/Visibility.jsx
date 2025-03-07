import React from "react";
import visibility from '../assets/visibility.png'
import bim from '../assets/bim.png'
function Visibility() {
  return (
    <div className=" py-8 px-4 sm:px-8 md:px-16 lg:my-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="md:text-[64px] text-[30px] leading-tight text-gray-800 sm:text-5xl font-apex  font-normal md:leading-[76px] tracking-[3%]">
            BOOST YOUR NFTs: ENHANCE VISIBILITY AND VALUE
          </h1>
          <p className="mt-4 text-[#6B6B6B] font-[300]   text-[18px] sm:text-xl font-roboto opacity-70 leading-[21px] ">
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>
          <button className="mt-6 flex gap-2 items-center justify-center text-[22px] w-[217px] h-[58px] cursor-pointer bg-gradient-custom text-white py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 focus:ring focus:ring-red-300 xs:mx-auto">
            Boost <span className="ml-2 cursor-pointer">
              <img src={bim} alt="" className="w-4 h-[18px]" />
            </span>
          </button>
        </div>
        <div className="image-section relative max-w-[554px] w-full h-[611px lg:-mt-24  ">
        <div className="">
          <img src={visibility} alt="" className="w-[554px] h-[611px]" />
        </div>
          {/* <div className="images relative w-[498px] h-[611px]">
            <div className="image-1 w-[242px] h-[322px]  bg-cover absolute top-7 left-[80px] sm:top-7 sm:left-1 md:top-3 md:left-3 " style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="p-3 flex items-center space-x-3 my-3">
                <img
                  src={vlogo}
                  alt="Logo"
                  className="w-10 h-10 rounded-full"
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold">STELLA NOVA</h3>
                  <p className="text-xs text-gray-500">@Stella Nova</p>
                </div>
              </div>
              <div className="">
              <img src={topv} alt="" />
              </div>
              
            </div>
            <div className="image-2 w-[183px] h-[242px]  bg-cover absolute top-[380px] left-[80px] sm:right-3 sm:top[180px] 
              opacity-40 "style={{ backgroundImage: `url(${bg})` }}>
              <div className="p-3 flex items-center space-x-3 my-3">
                <img
                  src={vlogo}
                  alt="Logo"
                  className="w-10 h-10 rounded-full"
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold">STELLA NOVA</h3>
                  <p className="text-xs text-gray-500">@Stella Nova</p>
                </div>
              </div>
              <div className="relative w-[174px] h-[187px]">
              <img src={topv} alt="" className="" />
              </div>
              
            </div>
            <div className="image-3 opacity-30 w-[131px] h-[175px]  bg-cover absolute hidden sm:block bottom-3 left-6 p-1"style={{ backgroundImage: `url(${bg})` }}>
              <div className="p-3 flex items-center space-x-3  ">
                <img
                  src={vlogo}
                  alt="Logo"
                  className="w-6 h-6 rounded-full"
                />
                <div className="mt-2">
                  <h3 className="text-[10px] font-semibold">STELLA NOVA</h3>
                  <p className="text-[8px] text-gray-500">@Stella Nova</p>
                </div>
              </div>
              <div className="max-w-[124px] h-[133px] relative">
              <img src={topv} alt="" className="object-fill absolute -top-2 left-0 " />
              </div>
              
            </div>
          </div> */}
        </div>

        {/* Image Section */}
      </div>
    </div>
  );
}

export default Visibility;
