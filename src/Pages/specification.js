import React, { useContext, useState } from "react";
import { store } from "../Services/Store";
import images from "../Images/images";
import {useStateValue} from "../Context/StateProvider";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
// import emailjs from "emailjs-com";

const Specification = (props) => {
  // const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line
  const [{},dispatchfunc]=useStateValue();
  const goBack = props.history.goBack;
  const userData = useContext(store);

  if (!userData.state.current) {
    userData.state.current = JSON.parse(localStorage.getItem("current"));
  }
  const { pics, title, description, starArray, star,id,price,classification
    ,brand
    ,vintage
    ,country
    ,region
    ,volume
    ,condition
    ,label
    ,stock
     ,type } = userData.state.current;

  const addToCart=(e)=>{
    dispatchfunc({
      type: 'ADD_TO_BASKET',
      item: {
          title: title,
          image: pics,
          price: price,
          starArray:starArray,
          star:star,
          description: description,
          id: id,
          quantity: quantity
      },
  })
  }

  console.log("current Data", userData.state.current);
  return (
    <div className="specification">
      <div className="title-spec">
        <img
          src={images.leftArrow}
          alt="left arrow"
          width="30px"
          height="30px"
          className="back-to-shopping"
          onClick={() => goBack()}
        />
      </div>
      <div className="product-spec">
        <div className="picture-spec">
          <img src={pics} alt="..." />
        </div>
        <div className="detail-spec">
          <h1>{title}</h1>
         <div>
         <ReactMarkdown plugins={[gfm]}>{description}</ReactMarkdown>
         </div>
          <div>
            {star} stars
            {starArray.map((star) => (
              <img src={star} alt="stars" height="40px" />
            ))}
          </div>
          <div>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <button onClick={addToCart}>Add To Basket</button>
          </div>
          <table>
            <tr>
              <td>Classification:</td>
              <td>{classification}</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>{type}</td>
            </tr>
            <tr>
              <td>Brand:</td>
              <td>{brand}</td>
            </tr>
            <tr>
              <td>Vintage:</td>
              <td>{vintage}</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>Region:</td>
              <td>{region}</td>
            </tr>
            <tr>
              <td>Volume:</td>
              <td>{volume}</td>
            </tr>
            <tr>
              <td>Condition:</td>
              <td>{condition}</td>
            </tr>
            <tr>
              <td>Label:</td>
              <td>{label}</td>
            </tr>
            <tr>
              <td>Stock:</td>
              <td>{stock}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Specification;
