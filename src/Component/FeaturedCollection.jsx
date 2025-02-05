import React, { useState } from "react";
import fcone from "../assets/fc-1.png";
import fctwo from "../assets/fc-2.png";
import fcthree from "../assets/fc-3.png";
import fcfour from "../assets/fc-4.jfif";
import fclogo from "../assets/fc-logo.jfif";
import lefti from "../assets/fbtn.png";
import righti from "../assets/fbtn2.png";
import cardimg from '../assets/cardstyle.png';
const cards = [
  { id: 1, img: fcone, price: "$20.00" },
  { id: 2, img: fctwo, price: "$25.00" },
  { id: 3, img: fcthree, price: "$30.00" },
  { id: 4, img: fcfour, price: "$22.00" },
];

export default function FeaturedCollection() {
  // currentIndex will serve as our rotation offset.
  const [currentIndex, setCurrentIndex] = useState(0);

  // When clicking "Next", increase the offset by one (wrap around using modulo)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // When clicking "Prev", decrease the offset by one (wrap around if needed)
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  // Rotate the array so that the card order is shifted
  const rotatedCards = [
    ...cards.slice(currentIndex),
    ...cards.slice(0, currentIndex),
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-apex md:text-[64px]">Featured Collection</h2>
        <div className="flex justify-between items-center mb-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            sapiente, ea id unde blanditiis rem.
          </p>
          <div className="feedback-btn flex gap-x-5 justify-center">
            <div
              className="flex items-center justify-center w-12 h-12 left-arrow transform rounded-md cursor-pointer"
              onClick={handlePrev}
            >
              <img src={lefti} alt="Previous" className="object-fill" />
            </div>
            <div
              className="right-arrow flex items-center justify-center w-12 h-12 transform bg-primary rounded-md cursor-pointer"
              onClick={handleNext}
            >
              <img src={righti} alt="Next" className="object-fill" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 " >
          {rotatedCards.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[308px] h-[410px] bg-white rounded-2xl shadow-lg overflow-hidden mx-auto "
            >
              <div className="p-3 flex items-center space-x-3">
                <img src={fclogo} alt="Logo" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-sm font-semibold">STELLA NOVA</h3>
                  <p className="text-xs text-gray-500">@Stella Nova</p>
                </div>
              </div>

              <div className="relative w-full h-[84%]">
                <img
                  src={card.img}
                  alt="NFT"
                  className="w-full h-full object-cover absolute"
                />

                <div className="p-3 w-full flex justify-between items-center absolute bottom-2 z-40">
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Buy
                  </button>
                  <span className="text-sm font-bold bg-white px-3 py-2 rounded-lg">
                    Price: {card.price} ETH
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
