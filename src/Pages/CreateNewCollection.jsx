import React from 'react'
import Navbar from '../Component/Navbar'
import Form from '../AinftComponent/Form'

function CreateNewCollection() {
  return (
    <div>
      <Navbar/>
      <Form showAfterChoose = {false} btn='Continue' showButn = {true}/>
    </div>
  )
}

export default CreateNewCollection
