import React, { useContext } from "react";
import { store } from "../../Services/Store";
import { Link } from "react-router-dom";
import SoldBanner from "../SoldBanner/soldBanner";

const Items = ({ title, price, pics, sold, description }) => {
  const userData = useContext(store);
  const { dispatch } = userData;
  const props = {
    title,
    price,
    pics,
    description,
    sold
  };

  return (
    <div className="item">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => {
          dispatch({ type: "current", payload: props });
          localStorage.setItem("current", JSON.stringify(props));
        }}
        to="/spec"
      >
        <div className="picture">
          <div
            style={{
              background: `url(${pics[0]})`,
            }}
          />
        </div>
      </Link>
      <div className="item-title">
        <h1>{title}</h1>
      </div>
      {sold ? (
        <SoldBanner />
      ) : (
        <div className="price">
          <p>{price},00</p>
        </div>
      )}
    </div>
  );
};

export default Items;
