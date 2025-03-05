import React from "react";
import william from "../assets/william.png";
import willaimh from "../assets/williamh.jfif";
import flogo from "../assets/felogo.png";
import { useNavigate, useLocation } from "react-router-dom";

function WilliamHero({showwillaim = true}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePrSetting = () => {
    navigate("/aiprsetting");
  };

  const handleProfile = () => {
    navigate("/aiwilliam");
  };

  return (
    <div>
      <section className="william-hero max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="top-btn max-w-[236px] w-full flex gap-4 items-center p-2 rounded-[10px] border-2 border-[#e7e7e7] my-[55px]">
          <button
            className={`w-[70px] h-[34px] text-center text-sm font-medium font-roboto capitalize px-[10px] py-[5px] rounded-[8px] ${
              location.pathname === "/aiwilliam" || location.pathname === "/aiart"
                ? "bg-gradient-custom text-white"
                : ""
            }`}
            onClick={handleProfile}
          >
            Profile
          </button>
          <button
            className={`w-[125px] h-[34px] text-center text-[#2b2b2b] text-sm font-normal font-roboto capitalize px-[10px] py-[5px] ${
              location.pathname === "/aiprsetting"
                ? "bg-gradient-custom text-white rounded-[8px]"
                : ""
            }`}
            onClick={handlePrSetting}
          >
            Profile Settings
          </button>
        </div>

        {/* Hero Image Section */}
        <div
          className={`hero-image relative max-w-[1320px] w-full h-[305px] shrink z-20 rounded-lg overflow-hidden ${
            location.pathname === "/aiprsetting" ? "bg-[#d9d9d9]" : "bg-cover"
          }`}
          style={{
            backgroundImage:
              location.pathname === "/aiwilliam" || location.pathname === "/aiart"  ? `url(${william})` : "",
          }}
        >
          {location.pathname === "/aiwilliam" && (
            <button className="absolute top-3 right-3 w-[103px] h-[53px] bg-gradient-custom text-center text-white text-lg font-semibold font-roboto capitalize px-[10px] py-[5px] rounded-[8px]">
              Follow
            </button>
          )}
          {location.pathname === "/aiprsetting" && (
            <button className="bg-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[138px] h-[34px] px-[10px] py-[5px] text-center text-[#2b2b2b] text-sm font-normal font-roboto capitalize rounded-lg border border-white">
              Add Banner
            </button>
          )}

          <div className="absolute top-[96%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100px] h-[100px] rounded-full z-50 shadow-lg">
            {location.pathname === "/aiwilliam" || location.pathname === "/aiart"  ? (
              <img
                src={willaimh}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            ) : (
              <div className="w-full h-full bg-[#e7e7e7] flex items-center justify-center text-3xl font-bold text-[#2b2b2b] rounded-full border-4 border-white">
                +
              </div>
            )}
          </div>
        </div>
{showwillaim && (
  <div className="text-center mt-12">
  <h1 className="text-[#2b2b2b] text-[40px] font-normal font-apex capitalize tracking-wider">
    WILLIAM AKARANA
  </h1>
  <div className="flex justify-center gap-4 mt-4 text-[#2b2b2b] text-sm">
    <span className="text-[#808080] text-base font-normal font-roboto capitalize">
      <strong className="text-[#2b2b2b] text-xl font-bold font-roboto capitalize">
        99
      </strong>{" "}
      Followers
    </span>
    <span className="text-[#808080] text-base font-normal font-roboto capitalize">
      <strong className="text-[#2b2b2b] text-xl font-bold font-roboto capitalize">
        26
      </strong>{" "}
      Following
    </span>
    <span className="text-[#808080] text-base font-normal font-roboto capitalize">
      <strong className="text-[#2b2b2b] text-xl font-bold font-roboto capitalize">
        12
      </strong>{" "}
      Items
    </span>
  </div>
  <button className="h-[53px] px-[25px] py-4 bg-white rounded-[15px] border-2 border-[#e7e7e7] justify-end items-center gap-2.5 inline-flex text-center text-[#2b2b2b] text-lg font-normal font-roboto capitalize mt-[30px]">
    <img src={flogo} alt="" className="w-[20px] h-[21px]" />
    10.89 FRY
  </button>
</div>
)}
        
      </section>
    </div>
  );
}

export default WilliamHero;
