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
import pix1 from '../assets/pix1.jfif'
import { useNavigate } from "react-router-dom";

const collections = [
  { image: ex1, title: "Wonderful ARTWORK", creator: "Jacob Jones", logo: ex1 },
  { image: ex2, title: "Amazing Digital Art", creator: "Sophia Lee", logo: ex2 },
  { image: ex3, title: "Fantasy World", creator: "Liam Carter", logo: ex3 },
  { image: ex4, title: "Dreamy Scenery", creator: "Emily White", logo: ex4 },
  { image: ex5, title: "Abstract Magic", creator: "Oliver Stone", logo: ex5 },
  { image: ex6, title: "Cyberpunk Vision", creator: "Mia Davis", logo: ex6 },
  { image: ex7, title: "Surreal Wonders", creator: "Noah Green", logo: ex7 },
  { image: ex8, title: "Vibrant Cityscape", creator: "Ella Brown", logo: ex8 },
  { image: ex9, title: "Colorful Portrait", creator: "James Scott", logo: ex9 },
  { image: ex10, title: "Futuristic Glow", creator: "Grace Miller", logo: ex10 },
  { image: ex11, title: "Galactic Art", creator: "Lucas Hill", logo: ex11 },
];
const navLinks = [
  { name:"Home"},
  { name: "About",  },
  { name: "Services",  },
  { name: "Portfolio", },
  { name: "Blog", },
  { name: "Contact"},
  { name: "FAQ",},
];
function ExpCollection() {
  
  const navigate = useNavigate(); // 🔹 Define navigate function

  const handlePixacioClick = () => {
    navigate("/pixacio"); // 🔹 Navigate to /pixacio when clicked
  };
  return (
    <div>
      <div className="max-w-[1320px] w-full mx-auto md:mt-10">
        <div className="md:text-[64px] font-apex sm:text-[45px] text-[30px] text-center md:text-left">EXPLORE COLLECTIONS</div>
        <nav className=" p-4">
      <ul className="flex  space-x-6">
        {navLinks.map((link) => (
          <li >
            <div
              
              className={({ isActive }) =>
                `text-white px-4 py-2 rounded-lg transition-all  ${
                  isActive ? "bg-red-500 border-2 border-red-500" : "hover:bg-gray-700"
                }`
              }
            >
              {link.name}
            </div>
          </li>
        ))}
      </ul>
    </nav>
        <div className="grid lg:grid-cols-3 gap-6 mt-6 md:grid-cols-2 items-center justify-center">
          {collections.map((item, index) => (
            <div key={index} className="max-w-[417px] w-full h-[276px] cursor-pointers bg-white shadow-lg rounded-xl overflow-hidden p-[10px]"
            onClick={handlePixacioClick}
            >
              <div className=" flex items-center gap-4 mb-2">
                <img src={item.logo} alt="Logo" className="w-[65px] h-[65px] rounded-3xl object-cover" />
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-500 text-sm">Created by {item.creator}</p>
                </div>
              </div>
              <div className="relative h-[178px]">
              <img src={item.image} alt={item.title} className="w-full h-[178px] object-cover rounded-xl" />
              <button className="absolute left-1/2  transform -translate-x-1/2 bottom-0  bg-white p-1 rounded-2xl">Items 1.5k</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpCollection;
