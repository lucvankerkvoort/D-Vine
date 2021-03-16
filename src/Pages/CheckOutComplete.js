import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
import "../Styles/CheckOutComplete.scss";
import emailjs from "emailjs-com";
import easyinvoice from 'easyinvoice';

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
  const [invoice, setInvoice] = useState('');
  console.log(basket);
  const [data, setData] = useState({
    "documentTitle": "RECEIPT", //Defaults to INVOICE
    "currency": "EURO",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png", //or base64
    //"logoExtension": "png", //only when logo is base64
    "sender": {
      "company": "D-Vine Wine",
      "address": "De Kwakel",
      "zip": "1234 AB",
      "city": "Sampletown",
      "country": "Netherland"
      //"custom1": "custom value 1",
      //"custom2": "custom value 2",
      //"custom3": "custom value 3"
    },
    "client": {
      "company": "Client Corp",
      "address": address1,
      "zip": zipcode,
      "city": city,
      "country": "Clientcountry"
      //"custom1": "custom value 1",
      //"custom2": "custom value 2",
      //"custom3": "custom value 3"
    },
    "invoiceNumber": "2020.0001",
    "invoiceDate": "05-01-2020",
    "products": [{
      "quantity": "2",
      "description": "Test1",
      "tax": 6,
      "price": 33.87
    },
    {
      "quantity": "4",
      "description": "Test2",
      "tax": 21,
      "price": 10.45
    }
    ],
  });
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
            amount,
            content: invoice
          }


          const generateInvoice = async () => {
            const result = await easyinvoice.createInvoice(data);
            //easyinvoice.download('myInvoice.pdf', result.pdf);
            setInvoice(result.pdf);
          }
          generateInvoice().then(() => {
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
          })


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
