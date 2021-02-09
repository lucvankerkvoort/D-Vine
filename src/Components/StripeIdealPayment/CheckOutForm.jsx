import React,{useState,useEffect,useContext} from 'react';
import {useStripe, useElements, IdealBankElement} from '@stripe/react-stripe-js';
import {CustomerDataContext} from '../../Context/CustomerDataProvider';
import IdealBankSection from './IdealBankSection';
import {useStateValue} from "../../Context/StateProvider";
import {getBasketTotal} from "../../reducer";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [processing,setProcessing]=useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const {customerData}=useContext(CustomerDataContext);
  const [{basket},dispatchfunc]=useStateValue();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/secret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: basket})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.client_secret);
      });


  }, [basket]);


  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const idealBank = elements.getElement(IdealBankElement);

    // For brevity, this example is using uncontrolled components for
    // the accountholder's name. In a real world app you will
    // probably want to use controlled components.
    // https://reactjs.org/docs/uncontrolled-components.html
    // https://reactjs.org/docs/forms.html#controlled-components

    const accountholderName = event.target['accountholder-name'];

    const {error} = await stripe.confirmIdealPayment(clientSecret, {
      payment_method: {
        ideal: idealBank,
        billing_details: {
          name: accountholderName.value,
        },
      },
      return_url: `http://localhost:3000/complete?email=${customerData.email}&address1=${customerData.address1}&address2=${customerData.address2}&city=${customerData.city}&zipcode=${customerData.zipcode}&name=${customerData.name}&amount=${getBasketTotal(basket)}`,
    });

    if (error) {
      // Show error to your customer.
      console.log(error.message);
    }
    setProcessing(false);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="accountholder-name" placeholder="Jenny Rosen" required />
        </label>
      </div>
      <div className="form-row">
        <IdealBankSection />
      </div>
      <button type="submit" disabled={!stripe||processing}>
        {processing?"Processing...":"Submit Payment"}
      </button>
    </form>
  );
}
