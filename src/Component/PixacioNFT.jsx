import React, { useState } from "react";
import { FaClock, FaBars, FaTag } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ChevronDown, ChevronUp } from "lucide-react";
import pixacio from "../assets/pixNFT.jfif";
import item from "../assets/item.png";

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
      price: "0.008 ETH",
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
      price: "0.008 ETH",
      from: "264963",
      to: "234873",
      date: "2 mo ago",
    },
  ];
  const firstListing = listingsData[0];

  return (
    <div className="max-w-[1320px] w-full mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-10 items-center justify-center ">
        <div className="flex justify-center max-w-[546px] max-h-[610px] py-5 bg-white w-full items-center rounded-xl">
          <img
            src={pixacio}
            alt="Pixacio NFT"
            className="rounded-xl shadow-lg w-[514px] max-h-[572px]"
          />
        </div>
        <div className="space-y-4 max-w-[754px] w-full py-5">
          <h1 className="text-5xl font-bold tracking-wide font-apex">
            PIXACIO
          </h1>
          <p className="text-gray-500 text-lg">
            Owned by{" "}
            <span className="font-semibold text-black font-roboto">
              Stella Nova
            </span>
          </p>
          <div className="bg-white rounded-lg shadow font-roboto max-w-[754px] w-full">
            <div className="flex items-center space-x-2 text-gray-500 p-6">
              <FaClock />
              <p>Sale ends 18 November 2023 at 8:47 am</p>
            </div>
            <hr className="bg-gray-100" />
            <div className="p-6">
              <p className="text-gray-500 text-sm">Current Price</p>
              <p className="text-3xl font-bold">5.001 FRY</p>
              <div className="flex gap-4 mt-4">
                <button className="w-1/2 py-3 bg-white text-black rounded-lg font-semibold border border-gray-300">
                  Buy now
                </button>
                <button className="w-1/2 py-3 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg font-semibold">
                  Make offer
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md font-roboto">
            {/* Header Section */}
            <div
              className="flex justify-between p-4 items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FaTag className="text-gray-600" /> Listings
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
                <hr className="bg-gray-100" />
                <div className="p-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b  text-gray-600">
                        <th className="py-2 px-3">Price</th>
                        <th className="py-2 px-3">USD Price</th>
                        <th className="py-2 px-3">Quantity</th>
                        <th className="py-2 px-3">From</th>
                        <th className="py-2 px-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b last:border-none hover:bg-gray-50">
                        <td className="py-2 px-3 font-bold">
                          {firstListing.price}
                        </td>
                        <td className="py-2 px-3 text-[#808080]">{firstListing.usdPrice}</td>
                        <td className="py-2 px-3 text-[#808080]">{firstListing.quantity}</td>
                        <td className="py-2 px-3 text-[#808080]">{firstListing.from}</td>
                        <td className="py-2 px-3 text-[#808080]">
                          <button className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
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
        <div className="grid grid-cols-1 md:grid-cols-[546px_754px] gap-5 max-w-[1320px] w-full mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-5  ">
            {/* Description Box */}
            <div className="border border-gray-300 rounded-lg shadow-sm bg-white">
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                  <FaBars className="text-gray-600 text-lg" />
                  <span className="font-semibold text-gray-800 text-base">
                    Description
                  </span>
                </div>
                <IoIosArrowUp className="text-gray-600 text-xl" />
              </div>
              <hr />
              <div className="p-4">
                <p>
                  By{" "}
                  <span className="font-bold text-gray-900">Stella Nova</span>
                </p>
                <p className="text-[#808080] text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolor atque voluptates debitis illum totam dignissimos doloribus quis, mollitia recusandae?
                </p>
              </div>
            </div>

            {/* Traits Box */}
            <div className="border border-gray-300 rounded-lg shadow-sm bg-white">
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                  <FaBars className="text-gray-600 text-lg" />
                  <span className="font-semibold text-gray-800 text-base">
                    Traits
                  </span>
                </div>
                <IoIosArrowDown className="text-gray-600 text-xl" />
              </div>
              <hr />
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {Array(9)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-full p-2 rounded-md bg-gray-100 text-center text-sm"
                    >
                      <p className="text-xs text-gray-500">EDITION</p>
                      <p className="font-semibold">Founders edition 52%</p>
                      <p className="text-xs">Floor: 12.75 ALGO</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 ">
            {/* Offers Box */}
            <div className="bg-white rounded-lg shadow font-roboto">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => setIsOffersOpen(!isOffersOpen)}
          >
            <div className="flex items-center gap-2">
              <FaBars className="text-[#808080] text-lg" />
              <span className="font-semibold text-[#808080] text-base">
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
              <hr className="my-2" />
              <div className="w-full overflow-x-auto p-4">
                <table className="w-full text-sm text-gray-600">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-left">Price</th>
                      <th className="p-2 text-left">USD Price</th>
                      <th className="p-2 text-left">Quantity</th>
                      <th className="p-2 text-left">Floor Difference</th>
                      <th className="p-2 text-left">From</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listingsData.map((listing, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 font-bold">{listing.price}</td>
                        <td className="p-2">{listing.usdPrice}</td>
                        <td className="p-2">{listing.quantity}</td>
                        <td className="p-2">{listing.floorDiff}</td>
                        <td className="p-2">{listing.from}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
            {/* Details Box */}
            <div className="border border-gray-300 rounded-lg shadow-sm bg-white max-w-[546px] w-full">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          >
            <div className="flex items-center gap-2">
              <FaBars className="text-[#808080] text-lg" />
              <span className="font-semibold text-[#808080] text-base">
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
              <hr />
              <div className="p-4 text-sm text-gray-700">
                <p className="flex justify-between py-1">
                  <span>Contract Address</span>
                  <span className="text-[#808080]">0x5848...1713</span>
                </p>
                <p className="flex justify-between py-1">
                  <span>Token ID</span>
                  <span className="text-[#808080]">7926</span>
                </p>
                <p className="flex justify-between py-1">
                  <span>Token Standard</span>
                  <span className="text-[#808080]">ERC-721</span>
                </p>
                <p className="flex justify-between py-1">
                  <span>Chain</span>
                  <span className="text-[#808080]">Algorand</span>
                </p>
                <p className="flex justify-between py-1">
                  <span>Creator Earnings</span>
                  <span className="text-[#808080]">6.5%</span>
                </p>
              </div>
            </>
          )}
        </div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full bg-white shadow-md rounded-xl mt-6">
        {/* Header Section with Expand/Collapse */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-lg font-semibold flex gap-4 items-center">
            <img src={item} alt="Item Icon" className="w-5 h-5" /> Item Activity
          </h2>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {/* Content Section */}
        {isOpen && (
          <div className="mt-2 border-t">
            {/* Filter Input */}
            <div className="w-full p-3">
              <input
                type="text"
                placeholder="Filter"
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Table Section */}
            <table className="w-full text-left text-sm mt-2">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="py-2 px-3">Event</th>
                  <th className="py-2 px-3">Price</th>
                  <th className="py-2 px-3">From</th>
                  <th className="py-2 px-3 ">To</th>
                  <th className="py-2 px-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-none hover:bg-gray-50"
                  >
                    <td className="py-2 px-3 text-[#808080]">{item.event}</td>
                    <td className="py-2 px-3 font-bold">{item.price}</td>
                    <td className="py-2 px- text-[#808080]">{item.from}</td>
                    <td className="py-2 px-3 text-[#808080]">{item.to || "-"}</td>
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
