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
import flogo from '../assets/felogo.png'
const cards = [
  { id: 1, img: fcone, logo: flogo },
  { id: 2, img: fctwo, logo: flogo },
  { id: 3, img: fcthree, logo: flogo },
  { id: 4, img: fcfour, logo: flogo },
];

// Custom Previous and Next Buttons
const NextArrow = ({ onClick }) => (
  <div className="absolute transform -translate-y-1/2 z-10 cursor-pointer right-3 md:-top-19 -top-4" onClick={onClick}>
    <img src={righti} alt="Next" className="w-10 h-10 lg:w-[67px] lg:h-[67px]" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute transform -translate-y-1/2 z-10 cursor-pointer right-20 md:-top-19 -top-4" onClick={onClick}>
    <img src={lefti} alt="Previous" className="w-10 h-10 lg:w-[67px] lg:h-[67px]" />
  </div>
);

export default function FeaturedCollection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards visible at once (Desktop)
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 lg:my-10">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        
        <div className="md:mb-[50px] ">
        <h2 className="text-3xl xs:text-center font-apex md:text-[64px] xs:text-center text-bold md:text-start font-normal leading-[76px] tracking-[4%] ">
          Featured Collection
        </h2>
          <p className="text-[18px] sm:text-[22px] md:text-[18px] text-[#6B6B6B] opacity-70 mb-10  text-center md:text-left font-roboto font-[300]">
            Explore our exclusive featured collection, showcasing innovative campaigns and creative
            <br /> storytelling from top brands around the world.
          </p>
        </div>

        {/* Slick Carousel */}
        <Slider {...settings} className="relative">
          {cards.map((card) => (
            <div key={card.id} className="pr-4"> 
              <div 
                className="w-[308px] h-[411px] p-2 gap-6 rounded-2xl shadow-lg mx-auto relative transform hover:scale-104 transition-transform duration-300 mt-3"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="absolute w-[30px] h-[30px] rounded-full"></div>
                <div className="p-[12px] flex items-center space-x-3 ">
                  <img src={fclogo} alt="Logo" className="w-[53px] h-[53px] rounded-full" />
                  <div className="mt-2">
                  <h3 className="text-[18px] font-apex font-[300] text-[#2b2b2b]">STELLA NOVA</h3>
                  <p className="text-[11px] text-[#6B6B6B] tracking-wide leading-0.5 font-roboto font-[300]" >@Stella Nova</p>
                  </div>
                </div>

                <div className="relative max-w-[292px] h-[314px]">
                  <img src={card.img} alt="NFT" className="w-full h-[100%] object-cover absolute rounded-2xl" />
                  <div className="p-3 w-full flex justify-between items-center absolute bottom-2 z-40">
                    <button className="bg-red-500 text-white px-[17px]  text-[12px] rounded-[8px]  cursor-pointer font-roboto w-[56px] h-[36px]">
                      Buy
                    </button>
                    <span className="text-sm font-bold w-[123px] h-[36px] bg-white px-3 py-[11px] text-[12px] rounded-lg flex justify-center items-center gap-1">
                      Price:
                      <img src={card.logo
                      } alt="" className="w-[10px] h-[10px] bg-black rounded-full"  />
                      <span className="text-[#808080]">  142.02</span> 
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
