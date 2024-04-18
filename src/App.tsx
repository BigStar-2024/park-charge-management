import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import First from './pages/FirstPage';
import ParkingChargeNoticeResult from './pages/ChargeNoticeResult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/result" element={<ParkingChargeNoticeResult />} />
            {/* <Route path="/completion" element={<Completion stripePromise={stripePromise} />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
