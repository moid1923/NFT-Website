import React from "react";
import seller1 from "../assets/sell1.png";
import seller2 from "../assets/sell2.png";
import seller3 from "../assets/sell3.png";
import seller4 from "../assets/sell4.png";
import seller5 from "../assets/sell5.png";
import logo from "../assets/felogo.png";

import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const sellers = [
  {
    id: 1,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "75",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller1,
  },
  {
    id: 2,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "50",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller2,
  },
  {
    id: 3,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "24",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller3,
  },
  {
    id: 4,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "90",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller4,
  },
  {
    id: 5,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "110",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller5,
  },
  {
    id: 6,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "75",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller1,
  },
  {
    id: 7,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "50",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller3,
  },
  {
    id: 8,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "24",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller2,
  },
  {
    id: 9,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "90",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller4,
  },
  {
    id: 10,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "110",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller5,
  },
  {
    id: 11,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "75",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller1,
  },
  {
    id: 12,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "50",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller3,
  },
  {
    id: 13,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "24",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller2,
  },
  {
    id: 14,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "90",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller4,
  },
  {
    id: 15,
    name: "Jacob Jones",
    volume: "50.150",
    followers: "110",
    percen: "237.13",
    price: "6.01",
    item: "9.7k",
    image: seller5,
  },
];

export default function Seller() {
  const navigate = useNavigate(); // 🔹 Define navigate function

  const handleSellerClick = () => {
    navigate("/jcollection"); // 🔹 Navigate to /pixacio when clicked
  };
  return (
    <div className="max-w-[1320px] mx-auto p-4">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-6 font-roboto">
        <div className="bg-white p-4 flex justify-between items-center w-[133px] h-[48px] font-roboto rounded-md shadow-lg text-[#2B2B2B] font-roboto text-sm font-semibold leading-none tracking-[0.42px]">
          Category
          <IoIosArrowDown className="text-[#2B2B2B] text-xl" size={28} />
        </div>
        <div className="bg-white py-4 px-[15px] w-[120px] h-[48px]   rounded-lg shadow-lg text-[#2B2B2B] font-roboto text-sm font-semibold leading-normal tracking-[0.42px] text-center">
          Last 30 Days
        </div>
      </div>
      <div className="w-full  rounded-lg overflow-hidden">
        <div className=" max-w-[1320px] w-full font-semibold text-sm px-3 py-4 grid grid-cols-6 my-4 bg-transparent border-[2.8px] border-[#E7E7E7]">
          <span className="text-left sm:text-center md:text-left text-[12px] sm:text-base lg:text-[22xpx] font-roboto text-[#2B2B2B] font-roboto  font-semibold leading-normal tracking-[0.11px] [font-variant-numeric:lining-nums_proportional-nums]">
            Collections
          </span>
          <span className="text-right sm:text-center  text-[12px] sm:text-base lg:text-[22xpx] font-roboto text-[#2B2B2B] font-roboto  font-semibold leading-normal tracking-[0.11px] [font-variant-numeric:lining-nums_proportional-nums]">
            Volume
          </span>
          <span className="text-right sm:text-center  text-[12px] sm:text-base lg:text-[22xpx] font-roboto text-[#2B2B2B] font-roboto  font-semibold leading-normal tracking-[0.11px] [font-variant-numeric:lining-nums_proportional-nums] ">
            Followers
          </span>
          <span className="text-right sm:text-center  text-[12px] sm:text-base lg:text-[22xpx] font-roboto text-[#2B2B2B] font-roboto  font-semibold leading-normal tracking-[0.11px] [font-variant-numeric:lining-nums_proportional-nums]">
            24%
          </span>
          <span className="text-right sm:text-center  text-[12px] sm:text-base lg:text-[22xpx] font-roboto text-[#2B2B2B] font-roboto  font-semibold leading-normal tracking-[0.11px] [font-variant-numeric:lining-nums_proportional-nums]">
            Floor Price
          </span>
          <span className="text-right sm:text-center  text-[12px] sm:text-base lg:text-[22xpx] font-roboto text-[#2B2B2B] font-roboto  font-semibold leading-normal tracking-[0.11px] [font-variant-numeric:lining-nums_proportional-nums]">
            items
          </span>
        </div>

        {/* Table Rows */}
        <div className="divide-y">
          {sellers.map((seller, index) => (
            <div
              key={seller.id}
              className="grid grid-cols-6 my-4 items-center bg-transparent shadow-lg  border-[2.8px] border-[#E7E7E7] rounded-lg text-gray-800 text-sm px-6 py-4  hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <span className="items-center font-roboto"> {index + 1}</span>
                <img
                  src={seller.image}
                  alt="seller"
                  className="lg:w-[74px] lg:h-[74px] w-10 h-10  rounded-[20px] hidden sm:block"
                />
                <span
                  className="font-bold font-roboto text-[12px] sm:text-[14px] md:text-[16.24px] text-[#2B2B2B] font-roboto  leading-none tracking-[0.11px] 
"
                  onClick={handleSellerClick}
                >
                  {seller.name}
                </span>
              </div>
              <div className="flex gap-1 items-center justify-center">
              <img src={logo} alt=""  className="bg-black w-4 h-4 rounded-full"/>
                <span className="text-right sm:text-center md:text-left font-roboto text-[12px] sm:text-[14px] md:text-[16.24px] text-black font-medium leading-[27.833px]
">
                  {seller.volume}
                </span>
              </div>

              <span className="text-right sm:text-center font-roboto text-[12px] sm:text-[14px] md:text-[16.24px] text-black font-roboto  font-medium leading-[27.833px]
">
                {seller.followers}
              </span>
              <span className="text-[#4CCB9E] text-right sm:text-center  font-roboto text-[12px] sm:text-[14px] md:text-[16.24px]  font-roboto  font-medium leading-[27.833px]">
                
                +{seller.percen}%
              </span>
              <div className="flex gap-2 items-center justify-center">
              <img src={logo} alt=""  className="bg-black w-4 h-4 rounded-full"/>
                <span className="text-right sm:text-center  font-roboto text-[12px] sm:text-[14px] md:text-[16.24px]  text-black font-roboto font-medium leading-[27.833px]
">
                  {seller.price}
                </span>
              </div>
              <span className="text-right sm:text-center  font-roboto text-[12px] sm:text-[14px] md:text-[16.24px] text-black font-roboto  font-medium leading-[27.833px]
">
                {seller.item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
