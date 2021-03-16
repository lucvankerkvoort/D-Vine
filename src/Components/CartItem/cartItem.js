import React from "react";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
import { useStateValue } from "../../Context/StateProvider";

const CartItem = ({ title, price, pics, star, description, id, quantity }) => {

  const [dispatchfunc] = useStateValue();
  const removeFromBasket = () => {
    dispatchfunc({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
    <div className="cart-item">
      <div className="container">
        <div className="picture">
          <div
            style={{
              backgroundImage: `url(${pics}) `,
            }}
          />
        </div>
        <div className="cart-item-text">
          <div className="item-title">
            <h1>{title}</h1>
          </div>

          <div>
            <ReactMarkdown plugins={[gfm]}>{description}</ReactMarkdown>
          </div>
          <div >
            <p>{quantity} X {price},00 = {quantity * price}</p>
          </div>
        </div>
      </div>

      <button onClick={removeFromBasket}>Remove From Basket</button>

    </div>
  );
};

export default CartItem;
