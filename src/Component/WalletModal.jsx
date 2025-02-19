import React from "react";
import { IoClose } from "react-icons/io5";
import fryLogo from "../assets/EC1.png"; 
import peraLogo from "../assets/EC2.png";
import deflyLogo from "../assets/EC3.png";
import daffiLogo from "../assets/EC4.png";
import walletConnectLogo from "../assets/EC5/png";

const wallets = [
  { name: "Pera", logo: peraLogo },
  { name: "Defly", logo: deflyLogo },
  { name: "Daffi", logo: daffiLogo },
  { name: "WalletConnect", logo: walletConnectLogo },
];

const WalletModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md relative p-6">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={onClose}>
          <IoClose size={24} />
        </button>

        {/* Modal Header */}
        <h2 className="text-center text-xl font-bold mb-4">CONNECT YOUR WALLET</h2>

        {/* Fry Networks Logo */}
        <div className="flex justify-center mb-4">
          <img src={fryLogo} alt="Fry Networks" className="h-12" />
        </div>

        {/* Wallet Options */}
        <div className="space-y-4">
          {wallets.map((wallet, index) => (
            <button
              key={index}
              className="flex items-center space-x-4 border-2 border-red-500 w-full py-3 px-4 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              <img src={wallet.logo} alt={wallet.name} className="h-6 w-6" />
              <span className="text-lg">{wallet.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
