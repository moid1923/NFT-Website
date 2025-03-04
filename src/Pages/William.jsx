import React from 'react'
import Navbar from '../Component/Navbar'
import WilliamHero from '../AinftComponent/WilliamHero'
import ExpCollection from '../Component/ExpCollection'
import wil1 from "../assets/wil1.jfif";
import wil2 from "../assets/wil2.jfif";
import wil3 from "../assets/wil3.jfif";
import wil4 from "../assets/wil4.jfif";
import wil5 from "../assets/wil5.jfif";
import wil6 from "../assets/wil6.jfif";
import wil7 from "../assets/wil7.jfif";
import wil8 from "../assets/wil8.jfif";
import JaCollection from '../Component/JaCollection';
const collections = [
  { image: wil1, title: "WONDERFUL ARTWORK", creator: "Jacob Jones", logo: wil1 },
  { image: wil2, title: "WONDERFUL ARTWORK", creator: "Sophia Lee", logo: wil2 },
  { image: wil3, title: "WONDERFUL ARTWORK", creator: "Liam Carter", logo: wil3 },
  { image: wil4, title: "WONDERFUL ARTWORK", creator: "Emily White", logo: wil4 },
  { image: wil5, title: "WONDERFUL ARTWORK", creator: "Oliver Stone", logo: wil5 },
  { image: wil6, title: "WONDERFUL ARTWORK", creator: "Mia Davis", logo: wil6 },
  { image: wil7, title: "WONDERFUL ARTWORK", creator: "Noah Green", logo: wil7 },
  { image: wil8, title: "WONDERFUL ARTWORK", creator: "Ella Brown", logo: wil8 },

];
function William() {
  return (
    <div>
      <Navbar/>
      <WilliamHero/>
      <JaCollection cards={collections} showtitle = {false} showlink = {true}/>

    </div>
  )
}

export default William
