import React from 'react'
import Navbar from '../Component/Navbar'
import WilliamHero from '../AinftComponent/WilliamHero'
import PrForm from '../ProfileComponent/PrForm'

function ProfileSetting() {
  return (
    <div>
      <Navbar/>
      <WilliamHero showwillaim = {false}/>
      <PrForm/>
    </div>
  )
}

export default ProfileSetting
