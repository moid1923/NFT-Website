import React from 'react';
import tseller from '../assets/tseller.png';

function TSellerHero() {
  return (
    <div className="w-full px-4 py-10">
      <div className="flex max-w-[1320px] w-full mx-auto flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-center md:text-left mt-6 md:mt-0">
          <p className="text-[48px] sm:text-[64px] leading-[54px] sm:leading-[74px] tracking-wide font-bold font-apex text-[#2B2B2B]">
            Top
          </p>
          <h1 className="text-[80px] sm:text-[128px] font-bold leading-[90px] sm:leading-[135px] tracking-wide font-apex text-[#fe0101]">
            Seller
          </h1>
        </div>
        <div className="flex justify-center w-full md:w-auto">
          <img
            src={tseller}
            alt="Top Seller"
            className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[495px] object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default TSellerHero;
