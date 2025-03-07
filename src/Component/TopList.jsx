import React, { useState, useEffect } from "react";
import { ChevronDown, Filter, Search } from "lucide-react";
import { FiRefreshCcw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import oction1 from "../assets/oction1.png";
import oction2 from "../assets/oction2.png";
import oction3 from "../assets/oction3.png";
import oction4 from "../assets/oction4.png";
import oction5 from "../assets/oction5.png";
import oction6 from "../assets/oction6.png";
import oction7 from "../assets/oction7.jfif";
import oction8 from "../assets/oction8.png";
import pix1 from "../assets/pix1.jfif";
import pix2 from "../assets/pix2.jfif";
import pix3 from "../assets/pix3.jfif";
import pix4 from "../assets/pix4.jfif";
import pix5 from "../assets/pix5.jfif";
import pix6 from "../assets/pix6.jfif";
import pix7 from "../assets/pix7.jfif";
import pix8 from "../assets/pix8.jfif";
import hero from "../assets/fc-logo.jfif";
import bg from "../assets/bgfeature.png";
import flogo from "../assets/felogo.png";
import refresh from '../assets/refresh.png'

const oction = [
  { id: 1, img: oction1, price: "142.02" },
  { id: 2, img: oction2, price: "142.02" },
  { id: 3, img: oction3, price: "142.02" },
  { id: 4, img: oction4, price: "142.02" },
  { id: 5, img: oction5, price: "142.02" },
  { id: 6, img: oction6, price: "142.02" },
  { id: 7, img: oction7, price: "142.02" },
  { id: 8, img: oction8, price: "142.02" },
  { id: 9, img: oction3, price: "142.02" },
  { id: 10, img: oction4, price: "142.02" },
  { id: 11, img: oction5, price: "142.02" },
  { id: 12, img: oction6, price: "142.02" },
  { id: 13, img: pix1, price: "142.02" },
  { id: 14, img: pix2, price: "142.02" },
  { id: 15, img: pix3, price: "142.02" },
  { id: 16, img: pix4, price: "142.02" },
  { id: 17, img: pix5, price: "142.02" },
  { id: 18, img: pix6, price: "142.02" },
  { id: 19, img: pix7, price: "142.02" },
  { id: 20, img: pix8, price: "142.02" },
  { id: 21, img: pix5, price: "142.02" },
  { id: 22, img: pix2, price: "142.02" },
  { id: 23, img: pix1, price: "142.02" },
  { id: 24, img: pix3, price: "142.02" },
  { id: 25, img: pix7, price: "142.02" },
  { id: 26, img: pix8, price: "142.02" },
];
const filterOptions = [
  { label: "Popular", count: 15 },
  {
    label: "Price",
    count: "",
    hasDropdown: true,
    customComponent: (
      <div className="flex flex-col items-center gap-2 p-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Min"
            className="w-16 p-2 text-center border border-red-500 bg-black text-white rounded-md"
          />
          <span>to</span>
          <input
            type="text"
            placeholder="Max"
            className="w-16 p-2 text-center border border-red-500 bg-black text-white rounded-md"
          />
        </div>
        <button className="w-full py-2 text-white bg-[#fe0101] rounded-lg hover:bg-red-700">
          Apply
        </button>
      </div>
    ),
  },
  {
    label: "Background",
    count: 20,
    hasDropdown: true,
    customComponent: (
      <div className="p-2 space-y-2">
        <div className="relative">
          <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="space-y-2 ">
          {[
            { label: "White", count: 37 },
            { label: "Red", count: 5 },
            { label: "Light Blue", count: 10 },
          ].map((item, index) => (
            <label
              key={index}
              className=" flex items-center justify-between px-2 py-3 gap-6 border-none rounded-md cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-6 h-6" />
                <span className="text-sm">{item.label}</span>
              </div>
              <span className="text-sm font-semibold">{item.count}</span>
            </label>
          ))}
        </div>
      </div>
    ),
  },
  { label: "Clothing", count: 110 },
  { label: "Eye", count: 2 },
  { label: "Body Color", count: 11 },
  { label: "Head", count: 33 },
];
function TopList({
  maxImages,
  start,
  title = "Auction",
  bid = "Place a bid",
  explore = "",
  showButtons = false,
  showBuyButton = false,
  showAnimatedButton = true,
  showSearchBar = false,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleFilter = (label, hasDropdown) => {
    if (hasDropdown) {
      setActiveDropdown((prev) => (prev === label ? null : label));
    }
  };
  const navigate = useNavigate(); // 🔹 Define navigate function

  const handlePixClick = () => {
    navigate("/pixNFT"); // 🔹 Navigate to /pixacio when clicked
  };
  return (
    <div className="py-10 mt-10 lg:mt-20 lg-mb-10">
      <div className="max-w-[1920px]  px-4 z-10">
        {/* Header */}

        {/* Cards Grid */}
        <div className="max-w-[1920px] flex flex-col gap-1 items-center justify-between md:flex-row relative ">
          <div className="w-[320px]  sm:block bg-white p-4 rounded-lg shadow-lg border self-start mx-auto mb-10 ">
            <div
              className="flex  max-w-[292px] items-center justify-between cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Filter className="w-5 h-5 text-gray-700" />
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isOpen && (
              <div className="mt-4 space-y-2 lg:w-[242px] ">
                {filterOptions.map((option, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg">
                    <div
                      className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-lg "
                      onClick={() =>
                        toggleFilter(option.label, option.hasDropdown)
                      }
                    >
                      <span className="text-sm">{option.label}</span>
                      <span className="text-sm font-semibold flex gap-4 justify-center items-center">
                        {option.count}
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </span>
                    </div>
                    {activeDropdown === option.label && option.hasDropdown && (
                      <div className="bg-gray-100 rounded-lg shadow-md p-3">
                        {option.customComponent}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className={`card-section relative flex flex-wrap gap-6 max-w-[1280] justify-center items-center xl:justify-start mt-20
            }`}
          >
            {title && (
              <h2 className="absolute -top-30 md:-top-30 xl:left-2 md:text-[64px] text-[30px] sm:text-[45px] text-center md:text-left font-apex font-normal leading-[76px] tracking-[4%] mb-[50px]">
                {title}
              </h2>
            )}
           { showSearchBar ? (
            <div className="absolute -top-20 lg:right-[120px] w-[320px]   lg:w-[613px] h-[55px] bg-[#fff8f8] rounded-[15px] border-2 border-[#e7e7e7] ">
              <Search className="absolute top-6 left-6 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search by name"
                className="w-full pl-16 pr-4 py-3 text-[18px] text-[#808080] text-lg font-normal font-roboto tracking-wide rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          ) : (
            <div className="flex items-center space-x-2 absolute -top-12 xl:-top-20 xl:right-[280px] ">
               <img src={refresh} alt="" className="w-{32px} h-[32px" />
              <p className="text-[#7d7d7d] text-xs font-medium font-roboto  ms-[10px]">Refreshed A While Ago</p>
            </div>
          )}
         

            {oction.slice(start, start + maxImages).map((nft) => (
              <div
                key={nft.id}
                className="group relative  w-full max-w-[308px] h-[410px] md:max-w-[280px] lg:max-w-[308px] p-2 sm:p-2 xl:ms-4 rounded-2xl shadow-lg overflow-hidden  hover:opacity-90 z-10"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="p-3 mb-1 flex items-center space-x-3">
                  <img
                    src={hero}
                    className="w-13 h-13 rounded-full"
                    alt="Owner"
                  />
                  <div>
                  <h3 className="text-[18px] font-apex font-[300] text-[#2b2b2b]">STELLA NOVA</h3>
                  <p className="text-[11px] text-[#6B6B6B] tracking-wide leading-0.5">@Stella Nova</p>
                  </div>
                </div>

                <div className="relative max-w-[292px] w-full h-[314px]">
                  <img
                    src={nft.img}
                    alt="NFT"
                    className="w-full h-[100%] object-cover absolute rounded-2xl"
                  />
                  {showButtons && (
                    <div className="p-3 w-full flex justify-between items-center absolute bottom-0 z-40">
                      {showBuyButton ? (
                        <button
                          className="bg-gradient-custom text-white text-[12px] w-[56px] h-[36px]  rounded-md text-sm cursor-pointer hover:bg-red-700 transition duration-200"
                          onClick={handlePixClick}
                        >
                          Buy
                        </button>
                      ) : (
                        <button className="bg-white  w-[91px] h-[36px]  py-[11px] rounded-md text-sm cursor-pointer hover:opacity-70 transition duration-200 text-[#2B2B2B] font-roboto text-[12px] font-medium tracking-[0.48px] capitalize">
                          In Stock <span className="text-[#808080] font-roboto text-[12px] font-medium tracking-[0.48px] capitalize ms-1">7</span>
                        </button>
                      )}
                      <span className="text-sm  w-[123px] h-[36px] bg-white px-3 py-[11px]  rounded-lg flex justify-center items-center gap-1 text-[#2B2B2B] font-roboto text-[12px] font-medium leading-normal tracking-[0.48px] capitalize">
                        Price:
                        <span className="w-[15px] h-[15px] rounded-full bg-black flex items-center justify-center"><img src={flogo} alt="" className="w-[10px] h-[10px] bg-black rounded-full" /></span>
                        <span className="text-[#808080] font-roboto text-[12px] font-medium leading-normal tracking-[0.48px] capitalize">142.02</span>
                      </span>
                    </div>
                  )}

                  {showAnimatedButton && ( // Conditionally show the animated button
                    <div className="animated-btn">
                      <p
                        className="btn-auc w-[143px] h-[44px] bg-white opacity-80 text-black rounded-[8.26px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 tracking-wider 
                      transition-all duration-300 group-hover:top-[220px]"
                      >
                       <span className="text-[#2B2B2B] font-roboto text-[18.913px] font-medium tracking-[2.08px] capitalize">3:06:59:18</span> 
                      </p>
                      <p
                        className="btn-auc hidden bg-white text-black rounded-xl absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 tracking-wider 
                      transition-all duration-300 cursor-pointer group-hover:bg-red-500 group-hover:text-white group-hover:bottom-32 group-hover:block"
                      >
                        {bid}
                      </p>
                    </div>
                  )}
                </div>

                {/* Conditionally Render Buy Button & Price */}
              </div>
            ))}
          </div>
          <div className="extra w-[302px] h-[320px] hidden 2xl:block bg-black"></div>
        </div>
      </div>
    </div>
  );
}

export default TopList;
