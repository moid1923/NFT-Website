import React, { useState } from "react";
import { ChevronDown, Filter, Search } from "lucide-react";
import Oction from "./Oction";

const filterOptions = [
  { label: "Popular", count: 15 },
  {
    label: "Price",
    count: 0,
    hasDropdown: true,
    customComponent: (
      <div className="flex flex-col items-center gap-2 p-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Min"
            className="w-16 p-2 text-center border border-red-500 bg-black text-white rounded-md"
          />
          <span>to</span>
          <input
            type="text"
            placeholder="Max"
            className="w-16 p-2 text-center border border-red-500 bg-black text-white rounded-md"
          />
        </div>
        <button className="w-full py-2 text-white bg-[#fe0101] rounded-lg hover:bg-red-700">
          Apply
        </button>
      </div>
    ),
  },
  {
    label: "Background",
    count: 20,
    hasDropdown: true,
    customComponent: (
      <div className="p-2 space-y-2">
        <div className="relative">
          <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="space-y-2">
          {[
            { label: "White", count: 37 },
            { label: "Red", count: 5 },
            { label: "Light Blue", count: 10 },
          ].map((item, index) => (
            <label
              key={index}
              className="flex items-center justify-between px-2 py-3 border-none rounded-md cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </div>
              <span className="text-sm font-semibold">{item.count}</span>
            </label>
          ))}
        </div>
      </div>
    ),
  },
  { label: "Clothing", count: 110 },
  { label: "Eye", count: 2 },
  { label: "Body Color", count: 11 },
  { label: "Head", count: 33 },
];

function TopListed() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleFilter = (label, hasDropdown) => {
    if (hasDropdown) {
      setActiveDropdown((prev) => (prev === label ? null : label));
    }
  };

  return (
    <div className="flex gap-6 p-4">
      {/* Sidebar Filter (Using Flex) */}
      <div className="w-[250px] bg-white p-4 rounded-lg shadow-lg border">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter className="w-5 h-5 text-gray-700" />
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {isOpen && (
          <div className="mt-4 space-y-2">
            {filterOptions.map((option, index) => (
              <div key={index} className="bg-gray-100 rounded-lg">
                <div
                  className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-lg"
                  onClick={() => toggleFilter(option.label, option.hasDropdown)}
                >
                  <span className="text-sm">{option.label}</span>
                  {option.count !== 0 && (
                    <span className="text-sm font-semibold">{option.count}</span>
                  )}
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                {activeDropdown === option.label && option.hasDropdown && (
                  <div className="bg-gray-100 rounded-lg shadow-md p-3">
                    {option.customComponent}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content (Takes Remaining Space) */}
      <div className="flex-1">
        <Oction maxImages={12} title="Top Listed" showButtons={true} />
      </div>
    </div>
  );
}

export default TopListed;
