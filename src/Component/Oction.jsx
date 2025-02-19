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
import exbt from '../assets/ebtn.png'
import bg from "../assets/bgfeature.png";
import { useNavigate } from "react-router-dom";
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
function Oction({
  maxImages = 12,
  title = "Auction",
  bid = "Place a bid",
  explore = "",
  showButtons = false
}) {
  const navigate = useNavigate(); // Initialize navigate function

  const handleExploreClick = () => {
    navigate("/auction"); // Navigate to Auction page
  };
  return (
    <div className="py-10 lg:my-10">
      <div className="max-w-7xl mx-auto px-4 z-10">
        {/* Header */}
        <h2 className="md:text-[64px] text-[30px] sm:text-[45px] text-center md:text-left font-apex font-normal leading-[76px] tracking-[4%] mb-[50px]">
          {title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-10">
          {oction.slice(0, maxImages).map((nft) => (
            <div
              key={nft.id}
              className="group relative w-full max-w-[308px] h-[410px] p-[7px] rounded-2xl shadow-lg overflow-hidden mx-auto hover:opacity-90 z-10"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="p-3 flex items-center space-x-3">
                <img
                  src={hero}
                  className="w-[53px] h-[53px] rounded-full"
                  alt="Owner"
                />
                <div>
                  <h3 className="text-[18px] font-apex">STELLA NOVA</h3>
                  <p className="text-[11px] text-gray-500">@Stella Nova</p>
                </div>
              </div>

              <div className="relative w-[280px] h-[314px]">
                <img
                  src={nft.img}
                  alt="NFT"
                  className="w-full h-[100%] object-cover absolute rounded-2xl"
                />
                {showButtons &&(
                  <div className="p-3 w-full flex justify-between items-center absolute bottom-0 z-40">
                  <button className=" bg-white text-[12px] px-2 py-1 lg:px-[7px] lg:py-[11px] rounded-md text-sm cursor-pointer hover:opacity-70 transition duration-200">
                    In Stock  7
                  </button>
                  <span className="text-sm font-bold bg-white px-1 py-1 lg:px-[7px] lg:py-[11px] text-[12px] rounded-lg">
                    Price: {nft.price} ETH
                  </span>
                </div>
                )}
                
                <div>
                  <p
                    className="btn-auc bg-white opacity-70 text-black rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 tracking-wider 
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

        {/* Conditionally Render Explore Button */}
        {explore && (
          <button  onClick={handleExploreClick}
           className="flex text-[22px] lg:w-[228px] lg:h-[58px] gap-2 mx-auto cursor-pointer bg-gradient-to-r from-red-400 to-[#FD0000] text-white px-8 py-3 rounded-lg shadow-md hover:opacity-70 transition duration-200 text-center items-center mt-[70px]">
            {explore } <img src={exbt} alt="" className="w-6 h-6"/>
          </button>
        )}
      </div>
    </div>
  );
}

export default Oction;
