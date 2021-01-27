import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
import "../Styles/CheckOutComplete.scss";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CheckOutComplete = () => {
  const query = useQuery();
  const stripe = useStripe();

  const payment_intent_client_secret = query.get("payment_intent_client_secret");
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (stripe) {
      stripe.retrievePaymentIntent(payment_intent_client_secret).then(function (response) {
        if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {
          setSuccess(true);
          setProcessing(false);
        } else {
          setProcessing(false);
          setError(response.paymentIntent.status);
        }
      });

    }

  }, [stripe, payment_intent_client_secret]);

  return (
    <div className="checkout-complete-container">
      {processing ? <h1>Processing</h1> :
        <>
          <h1>{success ? "Success" : "Failed"}</h1>
          <span>{error}</span>
        </>}
    </div>
  )
}

export default CheckOutComplete;
