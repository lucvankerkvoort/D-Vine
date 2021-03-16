import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../Components/Items/item";
import Title from "../Components/Jumbotron/title";
import images from "../Images/images";
// import { store } from "../Services/Store";

const Shop = (props) => {
  const [wines, setWines] = useState([]);
  // const userData = useContext(store);

  // const { info } = userData.state;

  const { type } = useParams();

  const capitalize = (s) => {
    if (typeof s !== "string") { return "" } else {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  };

  useEffect(() => {
    let wineFilter = props.product.filter((wine) => wine.data.type === type);
    console.log("wineFilter", wineFilter);
    setWines(wineFilter);
  }, [props.fakeData, props.location, type, props.product]);
  // const { fakeData } = props;

  console.log("type", type);
  console.log(props);
  return (
    <>
      <img
        src={images.leftArrow}
        alt="left arrow"
        width="30px"
        height="30px"
        style={{ cursor: "pointer", position: "absolute", top: "250px" }}
        id="back-to-home"
        onClick={() => props.history.push("/")}
      />
      <Title title={capitalize(type)} />
      <div className="shop">
        {(wines || []).map(({ data, id }) => {
          console.log(data)
          return (
            <Items
              key={id}
              title={data.title}
              description={data.description}
              pics={data.images}
              price={data.price}
              star={data.rating}
              classification={data.classification}
              brand={data.brand}
              vintage={data.vintage}
              country={data.country}
              region={data.region}
              volume={data.volume}
              condition={data.condition}
              label={data.label}
              stock={data.stock}
              type={data.type}
              quantity={data.quantity}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
