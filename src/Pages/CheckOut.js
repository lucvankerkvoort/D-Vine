import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../Components/StripeIdealPayment/CheckOutForm';
import { useHistory } from "react-router-dom";
import "../Styles/CheckOut.scss";
import { useStateValue } from "../Context/StateProvider";
import { getBasketTotal } from "../reducer";
import { db } from "../Firebase/Firebase"
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);


const CheckOut = ({ fakeData }) => {
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const history = useHistory();
    const [{ basket }] = useStateValue();

    const handleApply = () => {
        db.collection("promotioncodes").doc(code).get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setDiscount(doc.data().percentage)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    const basketTotal = getBasketTotal(basket);
    return (
        <div className="checkout-container">
            <div className="container">
                <p>Amount to be Paid: {basketTotal - ((discount / 100) * basketTotal)},00 </p>
                <Elements stripe={stripePromise}>
                    <CheckOutForm discount={discount} basket={basket} />
                </Elements>
                <div>
                    <label>Promotional Code:</label>
                    <input type="text" value={code} placeholder="MYCODE" onChange={e => setCode(e.target.value)} />
                    <button onClick={handleApply}>Apply</button>
                </div>
                <button onClick={() => history.push("/cart")}>Back</button>
            </div>
        </div>
    )
}

export default CheckOut
