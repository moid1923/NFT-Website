import React from 'react'
import Navbar from '../Component/Navbar'
import Form from '../AinftComponent/Form'

function CreateNewCollection() {
  return (
    <div>
      <Navbar/>
      <Form showAfterChoose = {false} btn='Continue' showButn = {true} topbtn='Colllection' formtitle='Create A Collection' showselected = {false} firstname='Collection Name' firstinput='Name your Collection'/>
    </div>
  )
}

export default CreateNewCollection
