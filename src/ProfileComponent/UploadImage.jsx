import React from 'react';
import { X } from 'lucide-react';
import pic from '../assets/pic.png';

function UploadImage({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className=" max-w-[511px] w-full p-6 relative  h-[413px] bg-white rounded-[25px] border border-gray-200">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-6 h-6 text-black cursor-pointer" />
        </button>

        {/* Title */}
        <h2 className="text-center text-[#2b2b2b] text-2xl font-normal font-apex my-5">
          UPLOAD IMAGE
        </h2>
        <hr className="mb-6 border-t border-red-400" />

        {/* Upload Box */}
        <div className="border-dashed border-2 border-gray-400 rounded-lg p-10 text-center">
          <img src={pic} alt="Upload" className="mx-auto w-11 h-11 mb-4" />
          <p className="text-center text-[#808080] text-lg font-normal font-roboto mb-4">Drag and Drop here, or</p>
          <button className="bg-white border border-gray-400 rounded-md px-[10px] py-[5px]  shadow-sm text-center text-[#2b2b2b] text-sm font-normal font-['Roboto'] capitalize">
            Upload Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;