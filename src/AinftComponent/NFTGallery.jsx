import React from "react";
import ai1 from "../assets/ai1.jfif";
import ai2 from "../assets/ai2.jfif";
import ai3 from "../assets/ai3.jfif";
import ai4 from "../assets/ai4.jfif";

const images = [ai1, ai2, ai3, ai4, ai1, ai2, ai3, ai4, ai2, ai3];

export default function NFTGallery({ imagesPerPage = 4 }) {
  const displayedImages = images.slice(0, imagesPerPage);

  return (
    <div className="min-h-[1080px] max-w-[1320px] w-full mx-auto ">
      <div className="flex items-center justify-between mb-[75px]">
        <div className="flex gap-6 items-center justify-center">
          <p
            className="text-[#808080] text-center font-roboto text-[22px] font-normal leading-normal capitalize"
          >
            {displayedImages.length}/{images.length} Generated
          </p>
          <button
            className="text-[#808080] text-center font-roboto text-[22px] font-medium leading-normal capitalize"
          >
            Single NFT
          </button>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <p className="text-[#808080] text-right font-roboto text-[16px] font-normal leading-normal">
            Select an NFT to mint
          </p>
          <button
            className="bg-gradient-custom text-white font-montserrat text-[12px] font-semibold tracking-[0.48px] w-[96px] h-[37px] rounded-[9px]"
            style={{ border: "2.7px solid rgba(253, 253, 253, 0.15)" }}
          >
            Mint NFT
          </button>
        </div>
      </div>

      <div className={`max-w-[1320px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  mx-auto`}>
        {displayedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`AI NFT ${index + 1}`}
            className="rounded-2xl max-w-[288px] w-full h-[265px] shadow-lg hover:scale-105 transition-transform cursor-pointer mx-auto"
          />
        ))}
      </div>
    </div>
  );
}
