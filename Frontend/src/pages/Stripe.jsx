import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./index.css";
import { BASE_URL } from "../config";
import { useAppSelector } from "../redux/hooks";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51P2lpQC9Zd6I2Ms1GoO6Yk32LekVgzJldgAwfLNHZd8sx6B3BF3pmZgLC5FbXB6Q98iihfn0V7v36W3daHy3NZ2q00ibIvyS1N");

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState("");
  const totalPayAmount = useAppSelector((state) => state.pay.payAmount_redux)
  console.log('dafe', totalPayAmount)
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${BASE_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", payAmount: totalPayAmount }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#2687e8',
      colorBackground: '#FFF5F3',
      colorText: '#091C62',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}