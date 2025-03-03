import React from "react";
import ai1 from "../assets/ai1.jfif";
import ai2 from "../assets/ai2.jfif";
import ai3 from "../assets/ai3.jfif";
import ai4 from "../assets/ai4.jfif";
import { useNavigate } from "react-router-dom";
const images = [ai1, ai2, ai3, ai4, ai1, ai2, ai3, ai4, ai2, ai3];

export default function NFTGallery({ imagesPerPage = 4 }) {
  const displayedImages = images.slice(0, imagesPerPage);
  const navigate = useNavigate(); // 🔹 Define navigate function

  const handleCardtClick = () => {
    navigate("/aicardt"); // 🔹 Navigate to  cardpage when clicked
  };

  return (
    <div className="min-h-[600px] max-w-[1320px] w-full mx-auto p-10">
      <div className="flex items-center justify-between mb-[75px] flex-col sm:flex-row px-10 gap-6">
        <div className="flex gap-6 items-center justify-center flex-col sm:flex-row text-center">
          <p
            className="text-[#808080] font-roboto text-[22px] font-normal leading-normal capitalize"
          >
            {imagesPerPage}/{imagesPerPage} Generated
          </p>
          <button
            className="text-[#808080] font-roboto text-[22px] font-medium leading-normal capitalize"
          >
            Single NFT
          </button>
        </div>
        <div className="flex gap-6 items-center justify-center flex-col sm:flex-row text-center">
          <p className="text-[#808080] font-roboto text-[16px] font-normal leading-normal">
            Select an NFT to mint
          </p>
          <button
            className="bg-gradient-custom text-white font-montserrat text-[12px] font-semibold tracking-[0.48px] w-[96px] h-[37px] rounded-[9px]"
            style={{ border: "2.7px solid rgba(253, 253, 253, 0.15)" }}
            onClick={handleCardtClick}
          >
            Mint NFT
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1320px] w-full mx-auto`}>        {displayedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`AI NFT ${index + 1}`}
            className="rounded-2xl max-w-[450px] sm:max-w-[288px] object-cover mx-auto w-full h-[265px] shadow-lg hover:scale-105 transition-transform cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
