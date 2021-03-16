import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
import "../Styles/CheckOutComplete.scss";
import emailjs from "emailjs-com";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CheckOutComplete = () => {
  const query = useQuery();
  const stripe = useStripe();

  const payment_intent_client_secret = query.get("payment_intent_client_secret");
  const email = query.get("email");
  const address1 = query.get("address1");
  const address2 = query.get("address2");
  const city = query.get("city");
  const zipcode = query.get("zipcode");
  const name = query.get("name");
  const basket = query.get("basket");
  const amount = query.get("amount");
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (stripe) {
      stripe.retrievePaymentIntent(payment_intent_client_secret).then(function (response) {
        if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {

          const templateParams = {
            name,
            email,
            address1,
            address2,
            city,
            zipcode,
            basket,
            amount
          }

          emailjs.send("service_32silhm", "template_myhtag9", templateParams, "user_ToyPyp9LOSNrhaPkBcvhM")
            .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
              setSuccess(true);
              setProcessing(false);
            }, function (error) {
              console.log('FAILED...', error);
              setProcessing(false);
              setError(response.paymentIntent.status);
            });


        } else {
          setProcessing(false);
          setError(response.paymentIntent.status);
        }
      });

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
