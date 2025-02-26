import React from "react";
import tc1 from "../assets/tc1.jfif";
import tc2 from "../assets/tc2.jfif";
import tc3 from "../assets/tc3.jfif";
import tc4 from "../assets/tc4.jfif";
import tc5 from "../assets/tc5.jfif";
import tc6 from "../assets/tc6.jfif";
import seller1 from "../assets/sell1.png";
import seller2 from "../assets/sell2.png";
import seller3 from "../assets/sell3.png";
import tclogo from "../assets/tclogo.png";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: 1,
    images: [tc1, tc2, tc3, tc4, tc5, tc6],
    logo: seller1,
    title: "WONDERFUL ARTWORK",
    creator: "Jacob Jones",
  },
  {
    id: 2,
    images: [tc1, tc2, tc3, tc4, tc5, tc6],
    logo:seller2,
    title: "WONDERFUL ARTWORK",
    creator: "Jacob Jones",
  },
  {
    id: 3,
    images: [tc1, tc2, tc3, tc4, tc5, tc6],
    logo : seller3,
    title: "WONDERFUL ARTWORK",
    creator: "Jacob Jones",
  },
];

const TopCollection = () => {
  const navigate = useNavigate(); // Initialize navigate function
  
  // Navigate to the collection page
  const handleCollectionClick = () => {
    navigate("/collection"); // Navigate to the Collection page
  };

  return (
    <div className="container mx-auto  lg:p-6 max-w-[1320px] w-full lg:my-10">
      {/* Header Section */}
      <div className="header flex items-center justify-between flex-col md:flex-row md:mb-[50px]">
        <h2 className="md:text-[64px] text-[30px] sm:text-[45px] text-center md:text-left md:mb-3 font-apex font-normal md:leading-[76px] tracking-[4%] ">TOP COLLECTIONS</h2>
        <div className="text-right md:mt-6 my-3 ">
          {/* Use button or div instead of <a> for navigation */}
          <button
            className="text-red-500 font-semibold md:text-[22px] leading-[25.78px] cursor-pointer font-roboto"
            onClick={handleCollectionClick} // Trigger navigation on button click
          >
            View More Collection
          </button>
        </div>
      </div>

      {/* Collection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="p-4 rounded-2xl shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 m-4 md:m-0"
          >
            {/* Image Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 md:max-w-[397px] md:h-[198px]   w-full">
              <div className="col-span-2 row-span-2 ">
                <img src={collection.images[0]} alt="" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="col-span-2 row-span-2 ">
                <img src={collection.images[1]} alt="" className="w-full h-full object-cover rounded-xl" />
              </div>
              <img src={collection.images[2]} alt="" className="w-full h-full object-cover rounded-xl " />
              <img src={collection.images[3]} alt="" className="w-full h-full object-cover rounded-xl" />
              <img src={collection.images[4]} alt="" className="w-full h-full object-cover rounded-xl" />
              <img src={collection.images[5]} alt="" className="w-full h-full object-cover rounded-xl" />
            </div>

            {/* Collection Info */}
            <div className="text-left mt-4 flex items-center gap-3 relative">
            <span className="absolute top-0 left-[55px] bg-[#7872ff] text-white text-xs font-bold px-2 py-1 rounded-full  w-[16px] h-[16px] flex justify-center items-center text-center  ">
                  ✓
                </span>
              <img src={collection.logo} alt="" className="w-[68px] h-[68px] object-cover " />
              <div>
                <p className="lg:text-[18px] md:text-[16px]text-[14px] leading-[21px] font-semibold">{collection.title}</p>
                <span className="md:text-[14px] text-[12px] leading-[16px] text-gray-500">Created by {collection.creator}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
