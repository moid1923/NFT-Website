import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import PixacioHero from '../Component/PixacioHero'
import TopList from '../Component/TopList'
import PixacioNFT from '../Component/PixacioNFT'
function Pixacio() {
  return (
    <div>
        <Navbar/>
        <PixacioHero/>
        <TopList title=''/>
        <Footer/>
        <PixacioNFT/>
    </div>
  )
}

export default Pixacio
