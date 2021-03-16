import React, { useContext, useEffect, useState } from "react";
import { store } from "../../Services/Store";
import { Link } from "react-router-dom";
import images from "../../Images/images";
import { useStateValue } from "../../Context/StateProvider";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
const Items = ({ title, price, pics, star, description, id, quantity, classification
  , brand
  , vintage
  , country
  , region
  , volume
  , condition
  , label
  , stock
  , type }) => {
  const [dispatchfunc] = useStateValue();
  const [starArray, setStarArray] = useState([]);
  const userData = useContext(store);
  const { dispatch } = userData;
  const props = {
    title,
    price,
    pics,
    description,
    starArray,
    id,
    star, quantity, classification
    , brand
    , vintage
    , country
    , region
    , volume
    , condition
    , label
    , stock
    , type
  };

  const addToBasket = () => {
    dispatchfunc({
      type: 'ADD_TO_BASKET',
      item: {
        title: title,
        image: pics,
        price: price,
        starArray: starArray,
        star: star,
        description: description,
        id: id,
        quantity: 1
      },
    })
  }
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
  }, [star]);
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
        <ReactMarkdown plugins={[gfm]}>{description}</ReactMarkdown>
      </div>
      <div>
        <p>
          {star}
          {(starArray || []).map((item) => (
            <img src={item} alt="..." height="40px" />
          ))}
        </p>
      </div>
      <div>
        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
};
export default Items;
