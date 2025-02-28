import React from "react";
import formpic from "../assets/formpic.jfif";
import add from "../assets/add.svg";
function Form() {
  return (
    <div className="max-w-[1320px] w-full mx-auto p-10 rounded-[15px] ">
      <div className="flex gap-6 ">
        <div
          className="max-w-[296px] w-full h-[309px] p-5 rounded-[20px]"
          style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
        >
          <img
            src={formpic}
            alt=""
            className="object-cover rounded-[20px] max-w-[256px] max-h-[269px] w-full h-full"
          />
        </div>

        <form
          className="space-y-[29px] max-w-[994px] w-full px-[88px] py-[35px] bg-white"
          style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
        >
          <h2 className="text-center text-3xl font-bold mb-8">MINT YOUR NFT</h2>
          <div>
            <label className="block mb-[15px] text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Item Name*
            </label>
            <input
              type="text"
              placeholder="Name your NFT"
              className="w-full p-3 border rounded-[15px] text-[#808080] font-roboto text-[18px] font-normal tracking-[0.54px]"
              style={{border:"2.8px solid #E7E7E7" }}
            />
          </div>
          <div>
            <label className="block mb-[15px] text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Token Symbol*
            </label>
            <input
              type="text"
              placeholder="$ CGPT, for example"
              className="w-full p-3 border rounded-[15px] text-[#808080] font-roboto text-[18px] font-normal tracking-[0.54px]"
              style={{border:"2.8px solid #E7E7E7" }}
            />
          </div>
          <div>
            <label className="block mb-[15px] text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Description
            </label>
            <p className="text-[#2B2B2B] mb-[10px] font-roboto text-[18px] font-normal tracking-[0.54px]">
              The description will be included on the item's detail page
              underneath its image.
            </p>
            <textarea
              placeholder="Provide a detailed description of your item"
              className="w-full p-3 border rounded-[15px] text-[#808080] font-roboto text-[18px] font-normal tracking-[0.54px]"
              rows="4"
              style={{border:"2.8px solid #E7E7E7" }}
            ></textarea>
          </div>
          <div>
            <div className="flex items-center justify-between mb-[5px]">
              <label className="block max-w-[50%] w-full text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize ">
                Choose Collection
              </label>
              <label
                htmlFor=""
                className="opacity-80 text-[#808080] text-right font-roboto text-[18px] font-normal tracking-[0.72px] underline capitalize`"
              >
                Choose From Existed
              </label>
            </div>
            <p className="opacity-80 mb-[15px] text-[#808080] font-roboto text-[16px] font-normal tracking-[0.64px] capitalize`">
              (this is the collection where your item will appear)
            </p>
            <div className="flex w-full gap-4 items-center mt-2">
              <div className="p-[15px] border rounded-[15px] text-center flex gap-3 items-center justify-start hover:bg-gray-100 max-w-[50%] w-full"
              style={{border:"2.8px solid #E7E7E7" }}>
                <button className="w-[61px] h-[61px] rounded-[12px] bg-[#c1c1c1] flex items-center justify-center ">
                  <img src={add} alt="" className="w-[28px] h-[28px]" />
                </button>
                <div className="">
                  <p className="`text-[#2B2B2B] text-left font-roboto text-[18px] font-medium tracking-[0.54px]`">
                    Create new collection
                  </p>
                  <p className="text-[#808080] text-left  font-roboto text-[14px] font-normal tracking-[0.42px] opacity-80">
                    type to create
                  </p>
                </div>
              </div>
              <div className="p-[15px] border rounded-[15px] shadow-md flex items-center gap-3 max-w-[50%] w-full" style={{border:"2.8px solid #E7E7E7" }}>
                <img
                  src={formpic}
                  alt="Artwork"
                  className="w-[61px] h-[61px] rounded-[15px]"
                />
                <div>
                  <p className="text-[#2B2B2B] text-left font-roboto text-[18px] font-medium tracking-[0.54px]">
                    Wonderful Artwork
                  </p>
                  <p className="text-[#808080] font-roboto text-[14px] font-normal tracking-[0.42px] opacity-80">
                    Items{" "}
                    <span className="text-[#2B2B2B] font-roboto text-[14px] font-medium tracking-[0.42px] opacity-100">
                      1.5k
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-[15px] text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Add Traits
            </label>
            <p className="` mb-[10px] text-[#2B2B2B] font-roboto text-[18px] font-normal tracking-[0.54px]`">
              Traits describe attributes of your item. They appear as filters
              inside your collection page and are also listed out inside your
              item page.
            </p>
            <div className="px-[30px] py-[17px] border rounded-[15px] mb-3 flex justify-between items-center" style={{border:"2.8px solid #E7E7E7" }}>
              <span className="`text-[#2B2B2B] font-roboto text-[18px] font-medium tracking-[0.54px]`">
                blue : fox
              </span>
              <button className="ml-2 text-red-500">✖</button>
            </div>
            <hr className="my-[25px] text-[#E7E7E7] bg-[#E7E7E7]" />
            <div className="bg-[#E7E7E7] px-[30px] py-[18px] w-[195px] h-[58px] rounded-[15px] flex gap-3">
              <button className="text-[#808080] font-roboto text-[18px] font-normal tracking-[0.54px] ">
                Add Traits
              </button>
              <img src={add} alt="" className="w-[28px] h-[28px]" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="block text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Royalties
            </label>
            <label className="relative inline-block w-[60px] h-[34px]">
              <input type="checkbox" className="hidden peer" />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] rounded-[34px] transition-all duration-400 peer-checked:bg-[#2196F3] peer-focus:ring peer-focus:ring-blue-300"></span>
              <span className="absolute h-[26px] w-[26px] bg-white rounded-full left-[4px] bottom-[4px] transition-transform duration-400 peer-checked:translate-x-[26px]"></span>
            </label>
          </div>
          <div className="flex justify-end">
            <button className="px-8 py-4 rounded-[8px] flex items-center bg-gradient-custom text-white text-center font-roboto text-[18px] font-medium capitalize hover:opacity-90">
              Mint NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
