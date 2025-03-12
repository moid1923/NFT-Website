import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AddTraitsModal = ({ isOpen = true, onClose }) => {
  const navigate = useNavigate();

  // Handle the close logic
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1); // Moves back one step in history
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        {/* Title */}
        <h2 className="font-apex text-[#2B2B2B] text-center font-apex text-2xl font-normal leading-normal uppercase">ADD TRAITS</h2>
        <hr className="my-[25px] border-red-500" />

        {/* Input Fields */}
        <div className="flex flex-col md:flex-row gap-4 my-4">
          {/* Type Input */}
          <div className="flex-1">
            <label className="font-roboto font-normal text-base leading-none tracking-normal text-start mb-3 block ">Type</label>
            <input
              type="text"
              placeholder="Ex. Size"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none font-roboto font-normal  leading-none tracking-normal "
            />
          </div>
          {/* Name Input */}
          <div className="flex-1">
            <label className="font-roboto font-normal text-base leading-none tracking-normal text-start mb-3 block">Name</label>
            <input
              type="text"
              placeholder="Ex. Large"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none font-roboto font-normal text-sm leading-none tracking-normal "
            />
          </div>
        </div>

        <hr className=" border-red-500 my-[25px]" />

        {/* Add Button */}
        <div className="flex justify-end">
          <button className=" bg-gradient-to-l from-[#fd0000] to-[#ff9191] text-white px-4 py-2 rounded-md font-semibold">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTraitsModal;
