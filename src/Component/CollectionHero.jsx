import React from 'react'
import ch from '../assets/CH.png'
function CollectionHero() {
  return (
    <div>
      <div className="container max-w-[1320px] w-full p-8 justify-center items-center flex flex-col md:flex-row gap-6 mx-auto  ">
        <div className="container-data  w-1/2">
            <h1 className='text-[#fe0101] lg:text-[220px] md:text-[150px] text-[130px]  font-apex lg:leading-[264px] md:leading-[120px] leading-[70px]'>NFT</h1>
            <p className='md:text-[64px] text-[45px]  font-apex'>Collections</p>
        </div>
        <div className="images w-1/2 flex items-center justify-center p-8 ">
            <img src={ch} alt="" className='max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default CollectionHero
