import React from "react";
import ex1 from "../assets/EC1.png";
import ex2 from "../assets/EC2.png";
import ex3 from "../assets/EC3.png";
import ex4 from "../assets/EC4.png";
import ex5 from "../assets/EC5.png";
import ex6 from "../assets/EC6.png";
import ex7 from "../assets/EC7.png";
import ex8 from "../assets/EC8.png";
import ex9 from "../assets/EC9.png";
import ex10 from "../assets/EC10.png";
import ex11 from "../assets/C11.png";
import tick from "../assets/tick.png";
import "./expcoll.css";
import { useNavigate } from "react-router-dom";

const collections = [
  { image: ex1, title: "WONDERFUL ARTWORK", creator: "Jacob Jones", logo: ex1 },
  { image: ex2, title: "WONDERFUL ARTWORK", creator: "Sophia Lee", logo: ex2 },
  { image: ex3, title: "WONDERFUL ARTWORK", creator: "Liam Carter", logo: ex3 },
  { image: ex4, title: "WONDERFUL ARTWORK", creator: "Emily White", logo: ex4 },
  { image: ex5, title: "WONDERFUL ARTWORK", creator: "Oliver Stone", logo: ex5 },
  { image: ex6, title: "WONDERFUL ARTWORK", creator: "Mia Davis", logo: ex6 },
  { image: ex7, title: "WONDERFUL ARTWORK", creator: "Noah Green", logo: ex7 },
  { image: ex8, title: "WONDERFUL ARTWORK", creator: "Ella Brown", logo: ex8 },
  { image: ex9, title: "WONDERFUL ARTWORK", creator: "James Scott", logo: ex9 },
  { image: ex10, title: "WONDERFUL ARTWORK", creator: "Grace Miller", logo: ex10 },
  { image: ex11, title: "WONDERFUL ARTWORK", creator: "Lucas Hill", logo: ex11 },
];

function ExpCollection({ cards = collections, navLinks = [], buttonText = "Items", navigateTo = "/pixacio" , value = "1.5k", showbutton = true }) {
  const navigate = useNavigate();

  const handlePixacioClick = () => {
    navigate(navigateTo);
  };

  return (
    <div>
      <div className="max-w-[1320px] w-full mx-auto md:mt-10">
        <div className="md:text-[64px] font-apex sm:text-[45px] text-[30px] text-center md:text-left">
          EXPLORE COLLECTIONS
        </div>
        {navLinks.length > 0 && (
          <nav className="p-4">
            <ul className="flex space-x-6 flex-wrap">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <div className={`text-center text-black text-lg font-normal py-[14px] px-[25px] capitalize font-roboto ${link === "Popular" ? "border-2 border-red-500" : "hover:bg-red-700 hover:text-white"}`}>
                    {link}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="grid lg:grid-cols-3 gap-6 mt-6 md:grid-cols-2 items-center justify-center">
          {cards.map((item, index) => (
            <div
              key={index}
              className="card max-w-[417px] w-full h-[276px] cursor-pointer bg-[#fff8f8] shadow-lg rounded-xl overflow-hidden p-[10px]"
              onClick={handlePixacioClick}
              style={{ border: "2.8px solid #E7E7E7" }}
            >
              <div className="flex items-center gap-4 mb-2">
                <img src={item.logo} alt="Logo" className="w-[65px] h-[65px] rounded-[15px] object-cover" />
                <div className="flex flex-col justify-center">
                  <p className="text-[#2B2B2B] font-roboto text-[18px] font-bold uppercase">{item.title}</p>
                  <div className="flex items-center">
                    <p className="text-[#8B8B8B] text-[14px]">
                      Created by <span className="font-bold">{item.creator}</span>
                    </p>
                    <span className="w-[16px] h-[16px] bg-[#7872ff] flex items-center justify-center rounded-full ms-2">
                      <img src={tick} alt="" className="w-[13px] h-[13px]" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-[178px]">
                <img src={item.image} alt={item.title} className="w-full h-[178px] object-cover rounded-xl" />
                {showbutton &&(
                  <button className="absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-[#E7E7E7] p-1 rounded-[8px] w-[93px] h-[30px] text-[#6B6B6B] font-roboto text-[12px] font-normal leading-none tracking-[0.06px]">
                  {buttonText} <span className="text-[#2B2B2B] font-roboto text-[12px] font-bold leading-none tracking-[0.06px]">{value}</span>
                </button>
                )}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpCollection;
