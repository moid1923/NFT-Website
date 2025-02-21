import React from "react";
import seller1 from "../assets/sell1.png";
import seller2 from "../assets/sell2.png";
import seller3 from "../assets/sell3.png";
import seller4 from "../assets/sell4.png";
import seller5 from "../assets/sell5.png";
import seller6 from "../assets/sell6.png";
import seller7 from "../assets/sell7.png";
import seller8 from "../assets/sell8.png";

const sellers = [
  { id: 1, img: seller1, name: "Jacob Jones", price: "245.5 FRY" },
  { id: 2, img: seller2, name: "Jacob Jones", price: "245.5 FRY" },
  { id: 3, img: seller3, name: "Jacob Jones", price: "245.5 FRY" },
  { id: 4, img: seller4, name: "Jacob Jones", price: "245.5 FRY" },
  { id: 5, img: seller5, name: "Jacob Jones", price: "245.5 FRY" },
  { id: 6, img: seller6, name: "Jacob Jones", price: "245.5 FRY" },
  { id: 7, img: seller7, name: "Jacob Jones", price: "245.5 FRY" },
  { id: 8, img: seller8, name: "Jacob Jones", price: "245.5 FRY" },
];

export default function TopSellers() {
  return (
    <div className=" py-10 lg:my-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 flex-col md:flex-row md:mb-[50px]">
          <h2 className="md:text-[64px] text-[30px] sm:text-[45px]   font-apex font-normal leading-[76px] tracking-[4%]">TOP SELLER</h2>
          <button className="text-[#fe0101] text-[22px] font-roboto font-semibold hover:underline cursor-pointer">
            View All
          </button>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mx-auto">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className=" p-3   flex items-center space-x-3"
            >
              <div className="relative">
                <img
                  src={seller.img}
                  alt={seller.name}
                  className="w-[80px] h-[80px] lg:w-[116px] lg:h-[116px] rounded-xl object-cover rounded-tr-4xl "
                />

               <div className="md:w-[25px] md:h-[25px] h-[20px] w-[20px] flex items-center justify-center lg:w-[30px] lg:h-[30px] absolute -right-1 -top-1 md:-right-2 md:-top-2 lg:-top-1 lg:-right-1  rounded-full " >
               <span className=" bg-[#7872ff] text-white text-xs font-bold px-2 py-1 rounded-full  w-full h-full flex justify-center items-center text-center  ">
                  ✓
                </span>
               </div>
                
              </div>
              <div className="flex flex-col ">
                <h3 className="lg:text-[22px] md:text-[18px] sm:text-[16px] text-[12px] font-semibold leading-tight">{seller.name}</h3>
                <p className="lg:text-[14px] text-[10px] text-gray-500">{seller.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
