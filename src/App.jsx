
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auction from './Pages/Auction'
import LnadingPage from './Pages/LnadingPage'
import Collection from './Pages/Collection'
import Pixacio from './Pages/Pixacio';
import PixNFT from './Pages/PixNFT';


function App() {

  return (
    <div className='bg-[#fff9f9] max-w-[100%] overflow-x-hidden overflow-y-hidden relative'>
      <Router>
      <Routes>
        <Route path="/" element={<LnadingPage />} />  {/* Default Route */}
        <Route path="/auction" element={<Auction />} />
       <Route path='/collection' element={<Collection />} />
       <Route path='/pixacio' element={<Pixacio />} />
       <Route path='/pixNFT' element={<PixNFT />} />
      </Routes>
    </Router>
    </div>
    
  )
}

export default App




