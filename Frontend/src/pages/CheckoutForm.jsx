import React, { useEffect, useState } from "react";
import axios from "axios";
import { PDFDocument } from "pdf-lib";
import { BASE_URL } from "../config";
import { useAppSelector } from "../redux/hooks";

import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { licensePlateNumber } from "../redux/slice/payReducer";

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const paying_id = "53274633"

  const [email, setEmail] = useState('');

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [pdfDoc, setPDFDoc] = useState(null);
  const payAmount = useAppSelector((state) => state.pay.payAmount_redux)
  const firstName = useAppSelector((state) => state.pay.firstName_redux)
  const lastName = useAppSelector((state) => state.pay.lastName_redux)
  const licensePlateNumber = useAppSelector((state) => state.pay.licensePlateNumber)
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/getpdffile`,
        {
          responseType: "blob", // Set the response type to blob
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      // const url = "https://pdf-lib.js.org/assets/with_update_sections.pdf";
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );
      const pdfdoc = await PDFDocument.load(existingPdfBytes);
      setPDFDoc(pdfdoc);
    } catch (error) { }
  };

  useEffect(() => {
    fetchData()
      .then(() => {
        console.log("PDFData", pdfDoc);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  // -------------------------------------------------------------
  const currentDateTime = new Date(Date.now());

  const formattedDateTime = currentDateTime.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    ampm: true
  });

  const data = {
    date: formattedDateTime,
    payment_type: "N/A",
    status: "Unpaid",
    item: "1",
    paying_id: "53274633",
    charge_type: "FLL - Failure to Pay",
    amount_due: `$${payAmount}`,
    amount_paid: "$0.00",
  };

  const savePDFDocument = async function () {
    if (pdfDoc !== null) {
      const form = pdfDoc.getForm();
      const fieldData = [
        { name: "Date", value: data.date },
        { name: "Payment Type", value: data.payment_type },
        { name: "Status", value: data.status },
        { name: "Parking Item", value: data.item },
        { name: "Parking Charge Number", value: data.paying_id },
        { name: "Parking Charge Type", value: data.charge_type },
        { name: "Amount Due", value: data.amount_due },
        { name: "Amount Paid", value: data.amount_paid },
        { name: "Total Amount Paid", value: data.amount_paid },
        { name: "Total Amount Due", value: data.amount_due },
      ];

      fieldData.forEach(({ name, value }) => {
        const field = form.getTextField(name);
        field.setText(value);
        field.enableReadOnly();
      });

      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

      const formData = new FormData();
      formData.append("id", paying_id);
      formData.append("pdfFile", pdfBlob, "uploaded.pdf");

      fetch(`${BASE_URL}/savepdffile`, {
        method: 'POST',
        body: formData
      })
    }
  }

  const savePaymentData = () => {
    const paymentData = new FormData();
    paymentData.append("paymentData", JSON.stringify(props));
    paymentData.append("paymentEmail", email);
    paymentData.append("licensePlateNumber", licensePlateNumber)
    fetch(`${BASE_URL}/save_paymentdata`, {
      method: 'POST',
      body: paymentData
    })
  }

  const nodemailer = async () => {

    const htmlcontent = `<h2>${firstName} ${lastName},</h2><h2>You successfully paid the following parking charge notice:${paying_id}</h2><h2>A receipt has been attached for your records.</h2><h2>Thank you</h2>`
    savePDFDocument();
    savePaymentData();
    try {
      let response = await fetch(`${BASE_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          messages: htmlcontent,
          email: email,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
        receipt_email: email,
      },
    });


    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <form className="payment-form" id="payment-form" onSubmit={handleSubmit}>
      <input
        id="email"
        type="text"
        // value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="submit" onClick={nodemailer}>
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}