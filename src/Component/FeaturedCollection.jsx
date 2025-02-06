import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from '../assets/bgfeature.png'
import fcone from "../assets/fc-1.png";
import fctwo from "../assets/fc-2.png";
import fcthree from "../assets/fc-3.png";
import fcfour from "../assets/fc-4.jfif";
import fclogo from "../assets/fc-logo.jfif";
import lefti from "../assets/fbtn.png";
import righti from "../assets/fbtn2.png";
const cards = [
  { id: 1, img: fcone, price: "$20.00" },
  { id: 2, img: fctwo, price: "$25.00" },
  { id: 3, img: fcthree, price: "$30.00" },
  { id: 4, img: fcfour, price: "$22.00" },
];

// Custom Previous and Next Buttons
const NextArrow = ({ onClick }) => (
  <div className="absolute transform -translate-y-1/2 z-10 cursor-pointer right-3 -top-10" onClick={onClick}>
    <img src={righti} alt="Next" className="w-10 h-10" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute  transform -translate-y-1/2 z-10 cursor-pointer right-20 -top-10" onClick={onClick}>
    <img src={lefti} alt="Previous" className="w-10 h-10" />
  </div>
);

export default function FeaturedCollection() {
  const settings = {
    dots: false, // Show dots below the slider
    infinite: true, // Loop the items infinitely
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of cards visible at once (Desktop)
    slidesToScroll: 1, // Scroll one card at a time
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-apex md:text-[64px] xs:text-center sm:text-start">
          Featured Collection
        </h2>
        <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
          <p className="text-[18px] opacity-70">
            Explore our exclusive featured collection, showcasing innovative campaigns and creative
            <br /> storytelling from top brands around the world.
          </p>
        </div>

        {/* Slick Carousel */}
        <Slider {...settings} className="relative">
          {cards.map((card) => (
            <div key={card.id} className="px-3">
              <div className="w-full max-w-[308px] h-[411px]  p-4 rounded-2xl shadow-lg overflow-hidden mx-auto relative"
              style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="absolute w-[30px] h-[30px] rounded-full"></div>
                <div className="p-3 flex items-center space-x-3 my-3">
                  <img src={fclogo} alt="Logo" className="w-10 h-10 rounded-full" />
                  <div className="mt-2">
                    <h3 className="text-sm font-semibold">STELLA NOVA</h3>
                    <p className="text-xs text-gray-500">@Stella Nova</p>
                  </div>
                </div>

                <div className="relative w-[282px] h-[314px] ">
                  <img src={card.img} alt="NFT" className="w-full h-full object-cover  rounded-2xl absolute bottom-4 right-1" />
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
