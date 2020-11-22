import React, { useState } from "react";
import CartItem from "../Components/CartItem/cartItem";

const Cart = (props) => {
  const { fakeData } = props;
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
        <button>Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
