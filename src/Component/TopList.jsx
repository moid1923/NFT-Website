import React, { useState ,useEffect} from "react";
import { ChevronDown, Filter, Search } from "lucide-react";
import oction1 from "../assets/oction1.png";
import oction2 from "../assets/oction2.png";
import oction3 from "../assets/oction3.png";
import oction4 from "../assets/oction4.png";
import oction5 from "../assets/oction5.png";
import oction6 from "../assets/oction6.png";
import oction7 from "../assets/oction7.jfif";
import oction8 from "../assets/oction8.png";
import hero from "../assets/fc-logo.jfif";
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
  { id: 9, img: oction3, price: "142.02" },
  { id: 10, img: oction4, price: "142.02" },
  { id: 11, img: oction5, price: "142.02" },
  { id: 12, img: oction6, price: "142.02" },
];
const filterOptions = [
  { label: "Popular", count: 15 },
  {
    label: "Price",
    count: 0,
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
  maxImages = 12,
  title = "Auction",
  bid = "Place a bid",
  explore = "",
  showButtons = false
}) {
    const [isOpen, setIsOpen] = useState(true);
      const [activeDropdown, setActiveDropdown] = useState(null);
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) {
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
  
  return (
    <div className="py-10 lg:my-10">
      <div className="max-w-[1920px] mx-auto px-4 z-10">
        {/* Header */}
        <h2 className="md:text-[64px] text-[30px] sm:text-[45px] text-center md:text-left font-apex font-normal leading-[76px] tracking-[4%] mb-[50px]">
          {title}
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-col items-center gap-4 md:flex-row ">
        <div className="w-[292px]  sm:block bg-white p-4 rounded-lg shadow-lg border self-start mx-auto ">
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
                  <div className="mt-4 space-y-2">
                    {filterOptions.map((option, index) => (
                      <div key={index} className="bg-gray-100 rounded-lg">
                        <div
                          className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-lg"
                          onClick={() => toggleFilter(option.label, option.hasDropdown)}
                        >
                          <span className="text-sm">{option.label}</span>
                          {option.count !== 0 && (
                            <span className="text-sm font-semibold">{option.count}</span>
                          )}
                          <ChevronDown className="w-4 h-4 text-gray-500" />
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
        <div className="flex flex-wrap gap-6">
          {oction.slice(0, maxImages).map((nft) => (
            <div
              key={nft.id}
              className="group relative  w-full max-w-[308px] h-[410px] sm:p-4 xl:ms-4 rounded-2xl shadow-lg overflow-hidden mx-auto hover:opacity-90 z-10"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="p-3 flex items-center space-x-3">
                <img
                  src={hero}
                  className="w-10 h-10 rounded-full"
                  alt="Owner"
                />
                <div>
                  <h3 className="md:text-[18px] sm:text-[16px] xl:text-[14px] font-apex ">STELLA NOVA</h3>
                  <p className="text-[11px] text-gray-500">@Stella Nova</p>
                </div>
              </div>

              <div className="relative w-full h-[84%]">
                <img
                  src={nft.img}
                  alt="NFT"
                  className="w-full h-[100%] object-cover absolute rounded-2xl"
                />
                {showButtons &&(
                  <div className="p-3 w-full flex justify-between items-center absolute bottom-0 z-40">
                  <button className=" bg-white text-[12px] px-[17px] py-[11px] rounded-md text-sm cursor-pointer hover:opacity-70 transition duration-200">
                    In Stock  7
                  </button>
                  <span className="text-sm font-bold bg-white px-3 py-[11px] text-[12px] rounded-lg">
                    Price: {nft.price} ETH
                  </span>
                </div>
                )}
                
                <div>
                  <p
                    className="btn-auc bg-white text-black rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 tracking-wider 
                    transition-all duration-300 group-hover:top-[220px]"
                  >
                    3:06:59:18
                  </p>
                  <p
                    className="btn-auc hidden bg-white text-black rounded-xl absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 tracking-wider 
                    transition-all duration-300 cursor-pointer group-hover:bg-red-500 group-hover:text-white group-hover:bottom-32 group-hover:block"
                  >
                    {bid}
                  </p>
                </div>
              </div>

              {/* Conditionally Render Buy Button & Price */}
              
                
              
            </div>
          ))}
        </div>
        </div>
       

      </div>
    </div>
  );
}

export default TopList;
