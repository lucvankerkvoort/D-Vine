import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../Components/StripeIdealPayment/CheckOutForm';
import { useHistory } from "react-router-dom";
import "../Styles/CheckOut.scss";
import {useStateValue} from "../Context/StateProvider";
import {getBasketTotal} from "../reducer";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);


const CheckOut = ({ fakeData }) => {
    const history = useHistory();
    const [{basket},dispatchfunc]=useStateValue();
    return (
        <div className="checkout-container">
            <div className="container">
                <p>Amount to be Paid: {getBasketTotal(basket)},00 </p>
                <Elements stripe={stripePromise}>
                    <CheckOutForm basket={basket} />
                </Elements>
                <button onClick={() => history.push("/cart")}>Back</button>
            </div>
        </div>
    )
}

export default CheckOut
