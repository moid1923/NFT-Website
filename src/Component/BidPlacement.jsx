import React from "react";
import { IoClose } from "react-icons/io5";

const BidPlacement = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
        
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        {/* Title */}
        <h2 className="text-center justify-start text-[#2b2b2b] text-2xl font-normal font-apex">PLACE YOUR BID</h2>

        {/* Bid Amount Input */}
        <div className="mt-4">
          <label className="justify-start text-[#2b2b2b] text-lg font-normal font-roboto">Enter bid amount</label>
          <input
            type="number"
            placeholder="Minimum bid 3.52 FRY"
            className="mt-2 w-full border-2 border-red-500 rounded-lg p-3 outline-none"
          />
        </div>

        {/* Fees Section */}
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="justify-start text-[#2b2b2b] text-lg font-normal font-roboto">Service fee</span> <span className="text-right justify-start text-[#2b2b2b] text-lg font-medium font-roboto">0.1 FRY</span>
          </div>
          <div className="flex justify-between">
            <span className="justify-start text-[#2b2b2b] text-lg font-normal font-roboto">Marketplace fee</span> <span className="text-right justify-start text-[#2b2b2b] text-lg font-medium font-roboto">0.5 FRY</span>
          </div>
        </div>

        {/* Total Bid Amount */}
        <div className="mt-4 flex justify-between text-lg font-bold">
          <span className="justify-start text-[#2b2b2b] text-lg font-normal font-roboto">Total bid amount</span> <span className="text-right justify-start text-[#2b2b2b] text-2xl font-medium font-">4.12 FRY</span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center items-center">
          <button
            className="w-[166px] px-8 py-4 rounded-lg outline-2 outline-offset-[-2px] outline-[#f4f3f3]  flex  items-center gap-2.5 text-center justify-center text-black text-lg font-medium font-roboto capitalize"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="w-[166px] px-8 py-4 bg-gradient-to-tl from-[#fd0000] to-[#ff9191] rounded-lg flex  items-center gap-2.5  text-center justify-center text-white text-lg font-medium font-roboto capitalize">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidPlacement;
