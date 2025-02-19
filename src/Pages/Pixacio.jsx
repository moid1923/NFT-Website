import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import PixacioHero from '../Component/PixacioHero'
import TopList from '../Component/TopList'

function Pixacio() {
  return (
    <div>
        <Navbar/>
        <PixacioHero/>
        <TopList title='' start={12} maxImages={14}/>
        <Footer/>
    </div>
  )
}

export default Pixacio
