import React from "react";
import { IoClose } from "react-icons/io5";
import style1 from "../assets/style1.jfif";
import style2 from "../assets/style2.jfif";
import style3 from "../assets/style3.jfif";
import style4 from "../assets/style4.jfif";
import style5 from "../assets/style5.jfif";
import { useNavigate } from "react-router-dom";

const styles = [
  { id: 1, name: "", img: null },
  { id: 2, name: "Cartoon", img: style1 },
  { id: 3, name: "3D Model", img: style2 },
  { id: 4, name: "Anime Style", img: style3 },
  { id: 5, name: "Fantasy Art", img: style4 },
  { id: 6, name: "Realistic", img: style5 },
];

const Style = ({ isOpen = true, onClose, onSelect }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-[504px] w-full p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={handleClose}
        >
          <IoClose size={24} />
        </button>

        {/* Title */}
        <h2 className="text-center justify-start text-[#2b2b2b] text-2xl font-normal font-apex pb-3">
          SELECT A STYLE
        </h2>
        <hr className="text-red-500" />

        {/* Style Options Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {styles.map((style) => (
            <button
              key={style.id}
              onClick={() => onSelect(style.name)}
              className="flex flex-col items-center p-[5px] border border-gray-200 hover:border-red-500 transition w-[211px] h-[238px] bg-[#e7e7e7] rounded-[15px]"
            >
              {(!style.img && !style.name) ? (
                // If no image and no name, take full width of the card.
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-[15px]">
                  <span className="text-gray-500 text-xl">🚫</span>
                </div>
              ) : (
                <>
                  <div className="w-[201px] h-[179px] flex items-center justify-center bg-gray-100 rounded-[15px] overflow-hidden">
                    {style.img ? (
                      <img
                        src={style.img}
                        alt={style.name}
                        className="w-[201px] h-[179px] rounded-[15px]"
                      />
                    ) : (
                      <span className="text-gray-500 text-xl">🚫</span>
                    )}
                  </div>
                  {style.img && style.name && (
                    <button className="mt-2 w-[201px] h-11 bg-white rounded-lg shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] border-[0.78px] border-gray-200 text-center text-[#2b2b2b] text-base font-medium font-roboto">
                      {style.name}
                    </button>
                  )}
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Style;
