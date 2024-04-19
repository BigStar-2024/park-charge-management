import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { loadStripe, Stripe } from '@stripe/stripe-js'; // Import the Stripe type from '@stripe/stripe-js'
import './App.css';
import First from './pages/FirstPage';
import ParkingChargeNoticeResult from './pages/ChargeNoticeResult';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import SetViolationPay from './pages/SetViolationPay';
import Completion from './pages/Completion';

function App() {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null); // Explicitly define the type of stripePromise

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      loadStripe(publishableKey).then((stripeInstance) => {
        setStripePromise(stripeInstance);
      });
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/result" element={<ParkingChargeNoticeResult />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/result/violationpay" element={<SetViolationPay />} />
          <Route path="/completion" element={<Completion stripePromise={stripePromise} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
