import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const GenerateNFTModal = ({ isOpen = true, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="w-[415px] h-[611px] bg-white rounded-[25px] px-8 py-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={handleClose}
        >
          <IoClose size={24} />
        </button>

        {/* Title */}
        <h2 className="text-center justify-start text-[#2b2b2b] text-2xl font-normal font-apex mb-4 uppercase">
          Generate NFT
        </h2>

        {/* Type Select */}
        <div className="my-[10px] ">
          <label className="block justify-start text-[#2b2b2b] text-lg font-normal font-roboto mb-1">
            Type
          </label>
          <select className=" border border-gray-300 rounded-lg p-2 text-sm w-[353px] h-[55px] px-[25px] py-3.5  outline-[1.80px] outline-offset-[-1.80px] outline-[#fd0000] inline-flex justify-start items-center gap-2.5">
            <option>Single NFT</option>
            <option>Multiple NFTs</option>
          </select>
        </div>

        {/* Prompt Textarea */}
        <div className="my-[10px]">
          <label className="block justify-start text-[#2b2b2b] text-lg font-normal font-roboto mb-1">
            Prompt
          </label>
          <textarea
            rows={4}
            className=" border border-gray-300 rounded-lg p-2 text-sm w-[353px] h-[109px] px-[25px] py-3.5  outline-[1.80px] outline-offset-[-1.80px] outline-[#fd0000] inline-flex justify-start items-start gap-2.5"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus congue ante..."
          />
        </div>

        {/* Payment Method & Cost */}
        <div className="my-[10px] w-[353px] h-[91px] px-[25px] py-3.5 bg-[#f4f3f3] rounded-lg outline-[1.80px] outline-offset-[-1.80px] outline-gray-200 inline-flex flex-col justify-center items-start gap-2.5">
          <p className="text-center justify-start text-[#2b2b2b] text-lg font-normal font-roboto">
            Payment Method
          </p>
          <p className="text-center justify-start text-[#808080] text-sm font-normal font- mt-1">
            Cost of Generation: 0.032 FRY
          </p>
        </div>
        <hr className="text-red-500 my-5" />
        {/* Confirm Button */}
        <div class="px-8 py-4 bg-gradient-to-l from-[#fd0000] to-[#ff9191] rounded-lg w-[144px] flex justify-end items-center gap-2.5 absolute right-8">
          <button class=" text-center text-white text-lg font-medium font-roboto capitalize">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateNFTModal;
