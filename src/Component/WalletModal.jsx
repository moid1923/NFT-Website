import React from "react";
import { IoClose } from "react-icons/io5";
import peraLogo from "../assets/pera.png"; 

import deflyLogo from "../assets/defly.png";
import daffiLogo from "../assets/daffi.png";
import walletConnectLogo from "../assets/wallet.png";
import logo from "../assets/Group.svg";
const wallets = [
  { name: "Pera", logo: peraLogo },
  { name: "Defly", logo: deflyLogo },
  { name: "Daffi", logo: daffiLogo },
  { name: "WalletConnect", logo: walletConnectLogo },
];

const WalletModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1001]">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md relative p-6">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={onClose}>
          <IoClose size={24} />
        </button>

        {/* Modal Header */}
        <h2 className="text-center justify-start text-[#2b2b2b] text-2xl font-normal font-apex ">CONNECT YOUR WALLET</h2>

        {/* Fry Networks Logo */}
        <div className="flex justify-center flex-col mb-4 mt-[15px] items-center">
          <img src={logo} alt="Fry Networks" className="h-20 w-[106px]" />
        </div>
       <hr  className="text-red-500 w-[353px] h-[54.94px]"/>
        {/* Wallet Options */}
        <div className="space-y-4">
          {wallets.map((wallet, index) => (
            <button
              key={index}
              className="flex items-center space-x-4 border-2 border-red-500 w-full py-3 px-4 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              <img src={wallet.logo} alt={wallet.name} className="h-[27px] w-[27px]" />
              <span className="text-lg">{wallet.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
