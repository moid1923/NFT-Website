import React, { useState } from "react";
import { FaClock, FaBars, FaTag } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ChevronDown, ChevronUp } from "lucide-react";
import pixacio from "../assets/pixNFT.jfif";
import item from "../assets/item.png";
import detailicon from "../assets/detainicon.png";
import listingicon from "../assets/listingicon.png";
import traiticon from "../assets/traiticon.png";
import offericon from "../assets/offericon.png";
import desicon from "../assets/desicon.png";
import time from "../assets/time.png";
export default function PixacioNFT() {
  const listingsData = [
    {
      price: "0.008 FRY",
      usdPrice: "$4.25",
      quantity: 2,
      floorDiff: "44% below",
      from: "16DD55",
    },
    {
      price: "0.005 FRY",
      usdPrice: "$4.25",
      quantity: 2,
      floorDiff: "44% below",
      from: "16DD55",
    },
    {
      price: "0.005 FRY",
      usdPrice: "$4.25",
      quantity: 2,
      floorDiff: "44% below",
      from: "16DD55",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [isOffersOpen, setIsOffersOpen] = useState(true);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const data = [
    {
      event: "List",
      price: "0.008 FRY",
      from: "264963",
      to: "",
      date: "1 day ago",
    },
    {
      event: "List",
      price: "",
      from: "119163",
      to: "124973",
      date: "3 mo ago",
    },
    {
      event: "Sale",
      price: "0.008 FRY",
      from: "264963",
      to: "234873",
      date: "2 mo ago",
    },
  ];
  const firstListing = listingsData[0];

  return (
    <div className="max-w-[1320px] w-full mx-auto  ">
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-10 items-center justify-center  ">
        <div className="flex justify-center max-w-[546px] max-h-[610px] py-5 px-[16px] bg-white w-full items-center rounded-xl  relative">
          <img
            src={pixacio}
            alt="Pixacio NFT"
            className="rounded-xl shadow-lg w-[514px] max-h-[572px] object-cover"
          />
          <button className=" w-[47px] h-8 bg-white/10 rounded-[9.41px] border-2 border-[#eaeaea]/50 backdrop-blur-[31.70px] absolute bottom-6 right-5 text-white text-xs font-medium font-roboto capitalize tracking-wide">
            75
          </button>
        </div>
        <div className="space-y-4 max-w-[754px]  w-full py-5">
          <h1 className="text-center lg:text-start text-[#2b2b2b] text-[64px] font-normal font-apex capitalize leading-[102px] tracking-[2.56px]">
            PIXACIO
          </h1>
          <div className="h-[213px">
            <p className="text-[#808080] text-xl font-normal font-roboto">
              Owned by{" "}
              <span className="text-[#2b2b2b] text-xl font-normal font-roboto">
                Stella Nova
              </span>
            </p>
            <div className="bg-white rounded-lg  font-roboto max-w-[754px] w-full shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)]">
              <div className="flex items-center space-x-2 text-gray-500 p-6">
                <img src={time} alt="" />
                <p className="text-[#808080] text-base font-normal font-roboto">
                  Sale ends 18 November 2023 at 8:47 am
                </p>
              </div>
              <hr className="text-[#e7e7e7] h-[2px]" />
              <div className="p-6">
                <p className="text-[#808080] text-xs font-normal font-roboto">
                  Current Price
                </p>
                <p className="text-black text-2xl font-medium font-roboto">
                  5.001 FRY
                </p>
                <div className="flex gap-4 mt-4">
                  <button className="w-[343px] h-11 bg-white rounded-lg border-[2.80px] border-[#e7e7e7]">
                    Buy now
                  </button>
                  <button className="w-[343px] h-11 bg-gradient-to-tl from-[#fd0000] to-[#ff9191] rounded-lg">
                    Make offer
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-lg shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] ">
            {/* Header Section */}
            <div
              className="flex justify-between p-4 items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h3 className="flex gap-4">
                <img src={listingicon} alt="" className="w-[28px] h-[28px]" />{" "}
                <span className="text-[#808080] text-base font-normal font-roboto">
                  Listings
                </span>
              </h3>
              {isOpen ? (
                <IoIosArrowUp className="text-gray-600 text-xl" />
              ) : (
                <IoIosArrowDown className="text-gray-600 text-xl" />
              )}
            </div>

            {/* Listings Table */}
            {isOpen && (
              <>
                <hr className="text-[#e7e7e7] h-[2px]" />
                <div className="py-4 px-5">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-[#e7e7e7]">
                      <tr className=" text-gray-600">
                        <th className="py-2 px-3 text-black text-sm font-normal font-roboto">
                          Price
                        </th>
                        <th className="py-2 px-3 text-black text-sm font-normal font-roboto">
                          USD Price
                        </th>
                        <th className="py-2 px-3 text-black text-sm font-normal font-roboto">
                          Quantity
                        </th>
                        <th className="py-2 px-3 text-black text-sm font-normal font-roboto">
                          From
                        </th>
                        <th className="py-2 px-3 text-black text-sm font-normal font-roboto"></th>
                      </tr>
                    </thead>

                    <tbody className="mt-3">
                      <tr className="border-b border-[#e7e7e7] last:border-none hover:bg-gray-50">
                        <td className="py-2 px-3 text-black text-sm font-medium font-roboto">
                          {firstListing.price}
                        </td>
                        <td className="py-2 px-3 text-[#808080] text-sm font-normal font-roboto">
                          {firstListing.usdPrice}
                        </td>
                        <td className="py-2 px-3 text-[#808080] text-sm font-normal font-roboto">
                          {firstListing.quantity}
                        </td>
                        <td className="py-2 px-3 text-[#808080] text-sm font-normal font-roboto">
                          {firstListing.from}
                        </td>
                        <td className="py-2 px-3 text-[#808080]">
                          <button className=" text-white rounded-md hover:bg-red-600 text-center  text-sm font-medium font-roboto capitalize px-[15px] py-2 bg-gradient-custom  outline-[1.80px] outline-offset-[-1.80px] outline-[#fd0000] inline-flex justify-end items-center ">
                            Buy
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-[546px_754px] gap-5 max-w-[1320px] w-full mx-auto ">
          {/* Left Column */}
          <div className="flex flex-col gap-5  ">
            {/* Description Box */}
            <div className="bg-white rounded-lg shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] h-[171px]">
              <div className="flex justify-between items-center p-4 border-b border-[#e7e7e7] h-[63px]">
                <div className="flex items-center gap-2">
                  <img src={desicon} alt="" className="w-[28px] h-[28px]" />
                  <span className="text-[#808080] text-base font-normal font-roboto ms-3">
                    Description
                  </span>
                </div>
                <IoIosArrowUp className="text-gray-600 text-xl" />
              </div>

              <div className="p-4">
                <p className="text-[#808080] text-base font-normal font-roboto">
                  By{" "}
                  <span className="text-[#2b2b2b] text-base font-medium font-roboto">
                    Stella Nova
                  </span>
                </p>
                <p className="text-[#808080] text-xs font-normal font-roboto mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Dolore
                  dolor atque voluptates debitis illum totam dignissimos
                  doloribus quis, mollitia recusandae?
                </p>
              </div>
            </div>

            {/* Traits Box */}
            <div className="bg-white rounded-lg shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] lg:h-[332px]">
              <div className="flex justify-between items-center p-4 border-b border-[#e7e7e7] h-[63px]">
                <div className="flex items-center gap-2">
                  <img src={traiticon} alt="" className="w-[28px] h-[28px]" />
                  <span className="text-[#808080] text-base font-normal font-roboto ms-3">
                    Traits
                  </span>
                </div>
                <IoIosArrowDown className="text-gray-600 text-xl" />
              </div>

              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {Array(9)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-full p-2 rounded-md 0 text-center text-sm h-[74px] bg-[#f4f4f4] flex flex-col items-center justify-center gap-1"
                    >
                      <p className="text-[#808080] text-[10.31px] font-medium font-roboto">
                        EDITION
                      </p>
                      <p className="text-[#2b2b2b] text-[10.31px] font-medium font-roboto">
                        Founders edition{" "}
                        <span className="text-[#808080] text-[10.31px] font-normal font-roboto">
                          52%
                        </span>{" "}
                      </p>
                      <p className="text-[#808080] text-[10.31px] font-normal font-['Roboto']">
                        Floor: 12.75 ALGO
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5  w-full max-w-[754px]">
            {/* Offers Box */}
            <div className=" bg-white rounded-lg shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] ">
              <div
                className="flex justify-between items-center p-4 cursor-pointer border-b border-[#e7e7e7] h-[63px]"
                onClick={() => setIsOffersOpen(!isOffersOpen)}
              >
                <div className="flex items-center gap-2">
                  <img src={offericon} alt="" className="w-[28px] h-[28px]" />
                  <span className="text-[#808080] text-base font-normal font-roboto ms-3 ">
                    Offers
                  </span>
                </div>
                {isOffersOpen ? (
                  <IoIosArrowUp className="text-[#808080] text-xl" />
                ) : (
                  <IoIosArrowDown className="text-[#808080] text-xl" />
                )}
              </div>

              {isOffersOpen && (
                <>
                  <div className="w-full overflow-x-auto p-4">
                    <table className="w-full text-sm text-gray-600">
                      <thead>
                        <tr className="border-b border-[#e7e7e7]">
                          <th className="p-2 text-left text-black text-sm font-normal font-roboto">
                            Price
                          </th>
                          <th className="p-2 text-left text-black text-sm font-normal font-roboto">
                            USD Price
                          </th>
                          <th className="p-2 text-left text-black text-sm font-normal font-roboto">
                            Quantity
                          </th>
                          <th className="p-2 text-left text-black text-sm font-normal font-roboto">
                            Floor Difference
                          </th>
                          <th className="p-2 text-left text-black text-sm font-normal font-roboto">
                            From
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {listingsData.map((listing, index) => (
                          <tr key={index} className="border-b border-[#e7e7e7]">
                            <td className="p-2 text-black text-sm font-medium font-roboto">
                              {listing.price}
                            </td>
                            <td className="p-2 text-[#808080] text-sm font-normal font-roboto">
                              {listing.usdPrice}
                            </td>
                            <td className="p-2 text-[#808080] text-sm font-normal font-roboto">
                              {listing.quantity}
                            </td>
                            <td className="p-2 text-[#808080] text-sm font-normal font-roboto">
                              {listing.floorDiff}
                            </td>
                            <td className="p-2 text-[#808080] text-sm font-normal font-roboto">
                              {listing.from}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
            {/* Details Box */}
            <div className="max-w-[546px] h-[247px] w-full bg-white rounded-lg shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] ">
              <div
                className="flex justify-between items-center p-4 cursor-pointer border-b border-[#e7e7e7] h-[63px]"
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              >
                <div className="flex items-center gap-2">
                  <img src={detailicon} alt="" className="w-[28px] h-[28px]" />
                  <span className="text-[#808080] text-base font-normal font-roboto ms-3">
                    Details
                  </span>
                </div>
                {isDetailsOpen ? (
                  <IoIosArrowUp className="text-[#808080] text-xl" />
                ) : (
                  <IoIosArrowDown className="text-[#808080] text-xl" />
                )}
              </div>

              {isDetailsOpen && (
                <>
                  <div className="px-4 py-6 text-sm text-gray-700  ">
                    <p className="flex justify-between py-1">
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        Contract Address
                      </span>
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        0x5848...1713
                      </span>
                    </p>
                    <p className="flex justify-between py-1">
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        Token ID
                      </span>
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        7926
                      </span>
                    </p>
                    <p className="flex justify-between py-1">
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        Token Standard
                      </span>
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        ERC-721
                      </span>
                    </p>
                    <p className="flex justify-between py-1">
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        Chain
                      </span>
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        Algorand
                      </span>
                    </p>
                    <p className="flex justify-between py-1">
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        Creator Earnings
                      </span>
                      <span className="text-[#808080] text-sm font-normal font-roboto">
                        6.5%
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Activity box */}
      <div className="max-w-[1320px] h-[346px] w-full bg-white rounded-lg shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] mt-6">
        {/* Header Section with Expand/Collapse */}
        <div
          className="flex justify-between items-center cursor-pointer border-b border-[#e7e7e7] h-[63px] p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-lg font-semibold flex gap-4 items-center p-4">
            <img src={item} alt="Item Icon" className="w-5 h-5" />{" "}
            <span className="text-[#2b2b2b] text-base font-normal font-roboto ms-3">
              Item Activity
            </span>{" "}
          </h2>
          {isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
        </div>

        {/* Content Section */}
        {isOpen && (
          <div className=" p-4">
            {/* Filter Input */}
            <div className="relative w-full px-[30px] py-[10px]">
              <input
                type="text"
                placeholder="Filter"
                className="w-full max-w-[1251px] h-[49px] p-4 pr-10 rounded-lg border-2 border-[#e7e7e7] text-sm outline-none focus:ring-2 focus:ring-gray-400 font-roboto"
              />
              <div className="absolute inset-y-0 right-10 flex items-center pr-3 pointer-events-none">
                <ChevronDown size={20} className="text-gray-500" />
              </div>
            </div>

            {/* Table Section */}
            <table className="w-full text-left text-sm mt-2 p-4">
              <thead>
                <tr className="border-b border-[#e7e7e7]">
                  <th className="py-2 px-3 font-roboto">Event</th>
                  <th className="py-2 px-3 font-roboto">Price</th>
                  <th className="py-2 px-3 font-roboto">From</th>
                  <th className="py-2 px-3 font-roboto">To</th>
                  <th className="py-2 px-3 font-roboto">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#e7e7e7] last:border-none hover:bg-gray-50"
                  >
                    <td className="py-2 px-3 text-[#808080]  font-roboto">{item.event}</td>
                    <td className="py-2 px-3 font-bold font-roboto">{item.price}</td>
                    <td className="py-2 px- text-[#808080] font-roboto">{item.from}</td>
                    <td className="py-2 px-3 text-[#808080] font-roboto">
                      {item.to || "-"}
                    </td>
                    <td className="py-2 px-3 text-[#808080]">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
