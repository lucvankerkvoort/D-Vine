import React, { useContext, useEffect, useState } from "react";
import { store } from "../../Services/Store";
import { Link } from "react-router-dom";
import images from "../../Images/images";

const Items = ({ title, price, pics, star, description }) => {
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

  useEffect(() => {
    let flatStarRate = Math.round(star);
    console.log(flatStarRate);
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      if (flatStarRate > i) {
        starArray.push(images.starFilled);
      } else {
        starArray.push(images.starEmpty);
      }
    }

    setStarArray(starArray);
  }, []);
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
              background: `url(${pics})`,
            }}
          />
        </div>
      </Link>
      <div className="item-title">
        <h1>{title}</h1>
      </div>

      <div className="price">
        <p>{price},00</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>
          {star}
          {(starArray || []).map((item) => (
            <img src={item} alt="..." height="40px" />
          ))}
        </p>
      </div>
    </div>
  );
};
export default Items;
