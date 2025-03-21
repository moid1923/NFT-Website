import React from 'react';
import { useNavigate } from 'react-router-dom';

function PrForm() {
   const navigate =  useNavigate();
   const handleConnect = () => {
    navigate("/aipric");
  };
  const handleProfile = () => {
    navigate("/aiart");
  };

  return (
    <div className="max-w-[1320px] mx-auto bg-transparent py-[100px] px-4">
      <form className="space-y-6 mx-auto max-w-[900px] w-full">
        {/* Display Name */}
        <div className='mx-auto max-w-[817px] w-full'>
          <label className="text-[#2b2b2b] text-xl font-medium font-roboto capitalize tracking-wide block mb-[15px]">Display Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full h-[58px] p-3 border-[2.8px] border-solid border-[#E7E7E7] rounded-lg text-[#808080] focus:outline-none"
          />
        </div>

        {/* Bio */}
        <div className='mx-auto max-w-[817px] w-full'>
          <label className="block text-[#2b2b2b] text-xl font-medium font-roboto capitalize tracking-wide mb-[15px]">Bio</label>
          <textarea
            placeholder="Enter Bio"
            className="w-full h-[170px] p-3  rounded-lg text-[#808080] focus:outline-none border-[2.8px] border-solid border-[#E7E7E7]"
            rows="4"
          ></textarea>
        </div>

        {/* E-Mail */}
        <div className='mx-auto max-w-[817px] w-full'>
          <label className="block text-[#2b2b2b] text-xl font-medium font-roboto capitalize tracking-wide mb-[15px]">E-Mail</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full h-[58px] p-3 border-[2.8px] border-solid border-[#E7E7E7] rounded-lg text-[#808080] focus:outline-none"
          />
        </div>

        {/* Social Links */}
        <h3 className="text-[#2b2b2b] mx-auto max-w-[817px]  text-[40px] font-normal font-apex capitalize tracking-wider my-[55px] w-full text-center md:text-left">SOCIAL LINKS</h3>

        <div className='mx-auto max-w-[817px] w-full'>
          <label className="block text-[#2b2b2b] text-xl font-medium font-roboto capitalize tracking-wide mb-[15px]">Website</label>
          <input
            type="url"
            placeholder="http://"
            className="w-full h-[58px] p-3 border-[2.8px] border-solid border-[#E7E7E7] rounded-lg text-[#808080] font-roboto text-[18px] font-normal leading-normal tracking-[0.54px] focus:outline-none"
          />
        </div>

        {['X(Twitter)', 'Discord', 'Instagram'].map((platform) => (
          <div key={platform} className="mb-6 mx-auto max-w-[817px] w-full">
            <label className="block text-[#2b2b2b] text-xl font-medium font-roboto capitalize tracking-wide mb-[15px]">{platform}</label>
            <div className='relative w-full h-[58px]'>
              <input
                type="text"
                placeholder="@username"
                className="w-full h-full p-[10px] border-[2.8px] border-solid border-[#E7E7E7] rounded-lg text-[#808080] font-roboto text-[18px] font-normal leading-normal tracking-[0.54px] focus:outline-none"
              />
              <button className="bg-gradient-custom w-[101px] h-[34px] text-white px-6 py-2 rounded-lg absolute right-2 top-[50%] transform translate-x-0 -translate-y-[50%] flex items-center justify-center"
              onClick={handleConnect}
              >
                Connect
              </button>
            </div>
          </div>
        ))}

        {/* Save Button */}
        <div className='max-w-[817px] w-full mx-auto text-center md:text-left'>
          <button className="bg-gradient-custom px-8 py-4 rounded-lg w-[179px] h-[53px] flex items-center justify-center text-white text-center font-roboto text-[18px] font-medium leading-normal capitalize"
          onClick={handleProfile}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default PrForm;