import React, { useContext, useEffect } from "react";
import CartItem from "../Components/CartItem/cartItem";
import { StripeContext } from "../Services/Stripe";
import {useHistory} from "react-router-dom";

const Cart = ( {fakeData }) => {
  const { setPayment } = useContext(StripeContext);
  const history=useHistory();

  useEffect(() => {
    fakeData.map((item) => {
      return setPayment({
        name: item.title,
        amount: item.price * 100,
        quantity: 1,
      });
    });// eslint-disable-next-line
  }, [fakeData]);

  // const cart = useContext(StripeContext);
  // console.log("cart", cart);
  // console.log("setPayment", setPayment);
  const totalPrice = () => {
    let total = 0;

    for (let item of fakeData) {
      console.log("price", item.price);
      total += item.price;
    }
    console.log("total", total);
    return total;
  };
  console.log(fakeData);
  return (
    <div className="cart">
      {(fakeData || []).map((item, i) => {
        return (
          <CartItem
            key={i}
            title={item.title}
            description={item.description}
            pics={item.images}
            price={item.price}
            star={item.star}
          />
        );
      })}

      <div className="checkout">
        <p>Total: {totalPrice()},00 </p>
        <button onClick={()=>history.push("/checkout")}>Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
