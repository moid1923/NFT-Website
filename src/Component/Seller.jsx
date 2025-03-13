import React from "react";
import seller1 from "../assets/sell1.png";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const sellers = [
  { id: 1, name: "Jacob Jones", volume: "50.150", followers: "75",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 2, name: "Jacob Jones", volume: "50.150", followers: "50",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 3, name: "Jacob Jones", volume: "50.150", followers: "24",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 4, name: "Jacob Jones", volume: "50.150", followers: "90",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 5, name: "Jacob Jones", volume: "50.150", followers: "110",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 6, name: "Jacob Jones", volume: "50.150", followers: "75",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 7, name: "Jacob Jones", volume: "50.150", followers: "50",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 8, name: "Jacob Jones", volume: "50.150", followers: "24",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 9, name: "Jacob Jones", volume: "50.150", followers: "90",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 10, name: "Jacob Jones", volume: "50.150", followers: "110",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 11, name: "Jacob Jones", volume: "50.150", followers: "75",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 12, name: "Jacob Jones", volume: "50.150", followers: "50",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 13, name: "Jacob Jones", volume: "50.150", followers: "24",percen: "237.13", price: "6.01",item:"9.7k" },
  { id:14, name: "Jacob Jones", volume: "50.150", followers: "90",percen: "237.13", price: "6.01",item:"9.7k" },
  { id: 15, name: "Jacob Jones", volume: "50.150", followers: "110",percen: "237.13", price: "6.01",item:"9.7k" },
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
        <div className="bg-white p-4 flex justify-between items-center w-[133px] h-[48px] font-roboto rounded-md shadow-lg text-[#2B2B2B] font-roboto text-sm font-semibold leading-none tracking-[0.42px]">Category
            <IoIosArrowDown className="text-[#2B2B2B] text-xl" size={28} />
        </div>
        <div className="bg-white py-4 px-[15px] w-[120px] h-[48px]   rounded-lg shadow-lg text-[#2B2B2B] font-roboto text-sm font-semibold leading-normal tracking-[0.42px] text-center">Last 30 Days</div>
      </div>
      <div className="w-full shadow-md rounded-lg overflow-hidden">
        <div className=" text-gray-700 font-semibold text-sm px-3 py-4 grid grid-cols-6 my-4 bg-transparent border-b-gray-500">

          <span className="font-bold text-left text-[12px] sm:text-base lg:text-[22xpx] font-roboto">Collections</span>
          <span className="font-bold text-right sm:text-center md:text-left text-[12px] sm:text-base lg:text-[22xpx] font-roboto">Volume</span>
          <span className="font-bold text-right sm:text-center md:text-left text-[12px] sm:text-base lg:text-[22xpx] font-roboto">Followers</span>
          <span className="font-bold text-right sm:text-center md:text-left text-[12px] sm:text-base lg:text-[22xpx] font-roboto">24%</span>
          <span className="font-bold text-right sm:text-center md:text-left text-[12px] sm:text-base lg:text-[22xpx] font-roboto">Floor Price</span>
          <span className="font-bold text-right sm:text-center md:text-left text-[12px] sm:text-base lg:text-[22xpx] font-roboto">items</span>
        </div>

        {/* Table Rows */}
        <div className="divide-y">
          {sellers.map((seller, index) => (
            <div
              key={seller.id}
              className="grid grid-cols-6 my-4 items-center bg-white shadow-lg  border-none rounded-lg text-gray-800 text-sm px-6 py-4  hover:bg-gray-50"
            >
             
              <div className="flex items-center space-x-3">
              <span className="items-center font-roboto"> {index + 1}</span>
                <img src={seller1} alt="seller" className="w-10 h-10 rounded-full hidden sm:block" />
                <span className="font-bold font-roboto text-[12px] sm:text-[14px] md:text-[16.24px]"
                onClick = {handleSellerClick}
                >{seller.name}</span>
              </div>
              <span className="text-right sm:text-center md:text-left font-roboto text-[12px] sm:text-[14px] md:text-[16.24px]">{seller.volume}</span>
              <span className="text-right sm:text-center md:text-left font-roboto text-[12px] sm:text-[14px] md:text-[16.24px]">{seller.followers}</span>
              <span className="text-[#4CCB9E] text-right sm:text-center md:text-left font-roboto text-[12px] sm:text-[14px] md:text-[16.24px]">{seller.percen}</span>
              <span className="text-right sm:text-center md:text-left font-roboto text-[12px] sm:text-[14px] md:text-[16.24px]">{seller.price}</span>
              <span className="text-right sm:text-center md:text-left font-roboto text-[12px] sm:text-[14px] md:text-[16.24px]">{seller.item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
