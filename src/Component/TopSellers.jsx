import React from "react";
import seller1 from "../assets/seller1.png";
import seller2 from "../assets/seller2.png";
import seller3 from "../assets/seller3.png";
import seller4 from "../assets/seller4.png";
import seller5 from "../assets/seller5.png";
import seller6 from "../assets/seller6.png";
import seller7 from "../assets/seller7.png";
import seller8 from "../assets/seller8.png";

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
    <div className=" py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[64px]  font-apex">TOP SELLER</h2>
          <button className="text-red-500 text-lg font-semibold hover:underline">
            View All
          </button>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className=" p-3   flex items-center space-x-3"
            >
              <div className="relative">
                <img
                  src={seller.img}
                  alt={seller.name}
                  className="w-[80px] h-[80px] rounded-xl object-cover rounded-tr-4xl "
                />

               <div className="absolute top-0 right-0 bg-white p-1 m-1 rounded-full " >
               <span className=" bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  ✓
                </span>
               </div>
                
              </div>
              <div className="flex flex-col ">
                <h3 className="text-sm font-semibold">{seller.name}</h3>
                <p className="text-xs text-gray-500">{seller.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
