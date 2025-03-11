import React, { useState } from 'react';
import WalletModal from '../Component/WalletModal';

function MainBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Connect Wallet Button */}
      <button
        className="bg-gradient-custom font-roboto font-[500] cursor-pointer text-[22px] text-white px-8 py-4 rounded-lg shadow-md hover:opacity-70 transition duration-200 leading-[25px]"
        onClick={togglePopup}
      >
        Connect Wallet
      </button>

      {/* Wallet Modal */}
      <WalletModal isOpen={isOpen} onClose={togglePopup} className="z-[1001]" />
    </div>
  );
}

export default MainBtn;
