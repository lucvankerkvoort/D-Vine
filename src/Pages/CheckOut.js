import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../Components/StripeIdealPayment/CheckOutForm';
import { useHistory } from "react-router-dom";
import "../Styles/CheckOut.scss";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);


const CheckOut = ({ fakeData }) => {
    const history = useHistory();

    const totalPrice = () => {
        let total = 0;

        for (let item of fakeData) {
            console.log("price", item.price);
            total += item.price;
        }
        console.log("total", total);
        return total;
    };

    return (
        <div className="checkout-container">
            <div className="container">
                <p>Amount to be Paid: {totalPrice()},00 </p>
                <Elements stripe={stripePromise}>
                    <CheckOutForm fakeData={fakeData} />
                </Elements>
                <button onClick={() => history.push("/cart")}>Back</button>
            </div>
        </div>
    )
}

export default CheckOut
