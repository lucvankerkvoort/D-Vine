import React from "react";
import CartItem from "../Components/CartItem/cartItem";

const Cart = (props) => {
  const { fakeData } = props;
  console.log(fakeData);
  return (
    <div>
      {(fakeData || []).map((item, i) => (
        <CartItem
          key={i}
          title={item.title}
          description={item.description}
          pics={item.images}
          price={item.price}
          star={item.star}
        />
      ))}
    </div>
  );
};
export default Cart;
