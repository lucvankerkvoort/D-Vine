import React from "react";
// import { store } from "../../Services/Store";
// import { Link } from "react-router-dom";
// import images from "../../Images/images";
// import Cart from "../../Pages/cart";
import {useStateValue} from "../../Context/StateProvider";

const CartItem = ({ title, price, pics, star, description,id,quantity }) => {
  // const [starArray, setStarArray] = useState([]);
  // const userData = useContext(store);
  // const { dispatch } = userData;
  // const props = {
  //   title,
  //   price,
  //   pics,
  //   description,
  //   star,
  // };
  
  const [{basket},dispatchfunc]=useStateValue();
  const removeFromBasket=()=>{
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
            <p>{description}</p>
          </div>
        </div>
        <div className="price">
          <p>{quantity} X {price},00 = {quantity*price}</p>
        </div>
      </div>

          <button onClick={removeFromBasket}>Remove From Basket</button>

    </div>
  );
};

export default CartItem;
