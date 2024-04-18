import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import First from './pages/FirstPage';
import ParkingChargeNoticeResult from './pages/ChargeNoticeResult';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/result" element={<ParkingChargeNoticeResult />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
