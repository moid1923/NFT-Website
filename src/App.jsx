
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auction from './Pages/Auction'
import LnadingPage from './Pages/LnadingPage'
import Collection from './Pages/Collection'
function App() {

  return (
    <div className='bg-gradient-to-b from-[#fff0f0] to-white max-w-[100%] overflow-x-hidden overflow-y-hidden relative'>
      <Router>
      <Routes>
        <Route path="/" element={<LnadingPage />} />  {/* Default Route */}
        <Route path="/auction" element={<Auction />} />
       <Route path='/collection' element={<Collection />} />
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
