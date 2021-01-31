import React, { useContext, useEffect } from "react";
import CartItem from "../Components/CartItem/cartItem";
import { StripeContext } from "../Services/Stripe";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../Context/StateProvider";
import {getBasketTotal} from "../reducer";

const Cart = ( {fakeData }) => {
  //const { setPayment } = useContext(StripeContext);
  const history=useHistory();
  const [{basket},dispatchfunc]=useStateValue();
  // useEffect(() => {
  //   fakeData.map((item) => {
  //     return setPayment({
  //       name: item.title,
  //       amount: item.price * 100,
  //       quantity: 1,
  //     });
  //   });// eslint-disable-next-line
  // }, [fakeData]);

  // const cart = useContext(StripeContext);
  // console.log("cart", cart);
  // console.log("setPayment", setPayment);
  // const totalPrice = () => {
  //   let total = 0;

  //   for (let item of fakeData) {
  //     console.log("price", item.price);
  //     total += item.price;
  //   }
  //   console.log("total", total);
  //   return total;
  // };
  
  return (
    <div className="cart">
      {(basket || []).map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            pics={item.image}
            price={item.price}
            star={item.star}
            quantity={item.quantity}
          />
        );
      })}

      <div className="checkout">
        <p>Total: {getBasketTotal(basket)},00 </p>
        <button onClick={()=>history.push("/checkout")}>Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
