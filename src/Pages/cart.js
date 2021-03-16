import React from "react";
import CartItem from "../Components/CartItem/cartItem";

import {useHistory} from "react-router-dom";
import {useStateValue} from "../Context/StateProvider";
import {getBasketTotal} from "../reducer";

const Cart = ( {fakeData }) => {
  //const { setPayment } = useContext(StripeContext);
  const history=useHistory();
  // eslint-disable-next-line
  const [{basket},dispatchfunc]=useStateValue();
  console.log(basket)
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
        <p>Total: {getBasketTotal(basket).toFixed(2).replace(".", ",")} </p>
        <button onClick={()=>{
          if(getBasketTotal(basket)>0)
          history.push("/customerdata")
          else
          alert("Cart is empty")
          }}>Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
