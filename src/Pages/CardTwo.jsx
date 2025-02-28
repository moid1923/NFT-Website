import React from 'react'
import Navbar from '../Component/Navbar'
import NFTGallery from '../AinftComponent/NFTGallery'

function CardTwo() {
  return (
    <div>
      <Navbar/>
      <NFTGallery imagesPerPage={10}/>
    </div>
  )
}

export default CardTwo
