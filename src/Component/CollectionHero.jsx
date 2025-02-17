import React from 'react'
import ch from '../assets/CH.png'
function CollectionHero() {
  return (
    <div>
      <div className="container max-w-[1320px] w-full justify-center items-center flex flex-col md:flex-row gap-6 mx-auto h-[60vh]">
        <div className="container-data h-[100vh w-1/2">
            <h1 className='text-[#fe0101] lg:text-[220px] md:text-[150px] text-[100px]  font-apex lg:leading-[264px] md:leading-[120px] leading-[70px]'>NFT</h1>
            <p className='md:text-[64px] text-[45px]  font-apex'>Collection</p>
        </div>
        <div className="images w-1/2">
            <img src={ch} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CollectionHero
