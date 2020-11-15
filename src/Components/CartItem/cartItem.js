import React, { useContext, useEffect, useState } from "react";
import { store } from "../../Services/Store";
import { Link } from "react-router-dom";
import images from "../../Images/images";
import Cart from "../../Pages/cart";

const CartItem = ({ title, price, pics, star, description }) => {
  const [starArray, setStarArray] = useState([]);
  const userData = useContext(store);
  const { dispatch } = userData;
  const props = {
    title,
    price,
    pics,
    description,
    starArray,
    star,
  };
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
            <p>{description}</p>
          </div>
        </div>
        <div className="price">
          <p>{price},00</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
