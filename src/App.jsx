
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auction from './Pages/Auction'
import LnadingPage from './Pages/LnadingPage'
function App() {

  return (
    <div className='bg-gradient-to-b from-[#fff0f0] to-white max-w-[100%] overflow-x-hidden overflow-y-hidden relative'>
      <Router>
      <Routes>
        <Route path="/home" element={<LnadingPage />} />  {/* Default Route */}
        <Route path="/auction" element={<Auction />} />
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
