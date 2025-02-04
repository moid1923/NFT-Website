import React from "react";
import tc1 from "../assets/tc1.jfif";
import tc2 from "../assets/tc2.jfif";
import tc3 from "../assets/tc3.jfif";
import tc4 from "../assets/tc4.jfif";
import tc5 from "../assets/tc5.jfif";
import tc6 from "../assets/tc6.jfif";
import tclogo from "../assets/tclogo.png";

const collections = [
  {
    id: 1,
    images: [tc1, tc2, tc3, tc4, tc5, tc6],
    title: "WONDERFUL ARTWORK",
    creator: "Jacob Jones",
  },
  {
    id: 2,
    images: [tc1, tc2, tc3, tc4, tc5, tc6],
    title: "WONDERFUL ARTWORK",
    creator: "Jacob Jones",
  },
  {
    id: 3,
    images: [tc1, tc2, tc3, tc4, tc5, tc6],
    title: "WONDERFUL ARTWORK",
    creator: "Jacob Jones",
  },
];

const TopCollection = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="header flex items-center justify-between">
        <h2 className="text-[64px]  mb-6 font-apex">TOP COLLECTIONS</h2>
        <div className="text-right mt-6">
          <a href="#" className="text-red-500 font-semibold text-sm">
            View More Collection
          </a>
        </div>
      </div>

      {/* Collection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="p-4 rounded-2xl shadow-lg bg-white hover:border-blue-500 hover:border-2 transition"
          >
            {/* Image Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[200px] l">
              <div className="col-span-2 row-span-2">
                <img src={collection.images[0]} alt="" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="col-span-2 row-span-2">
                <img src={collection.images[1]} alt="" className="w-full h-full object-cover rounded-md" />
              </div>
              <img src={collection.images[2]} alt="" className="w-full h-full object-cover rounded-md" />
              <img src={collection.images[3]} alt="" className="w-full h-full object-cover rounded-md" />
              <img src={collection.images[4]} alt="" className="w-full h-full object-cover rounded-md" />
              <img src={collection.images[5]} alt="" className="w-full h-full object-cover rounded-md" />
            </div>

            {/* Collection Info */}
            <div className="text-left mt-4 flex items-center gap-3">
              <img src={tclogo} alt="" className="w-10 h-10 object-cover rounded-full" />
              <div>
                <p className="text-lg font-semibold">{collection.title}</p>
                <span className="text-sm text-gray-500">Created by {collection.creator}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
