import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../Components/Items/item";
import Title from "../Components/Jumbotron/title";
import images from "../Images/images";
import { store } from "../Services/Store";

const Shop = (props) => {
  const [wines, setWines] = useState([]);
  // const userData = useContext(store);

  // const { info } = userData.state;

  const { type } = useParams();

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    let wineFilter = props.fakeData.filter((wine) => wine.type === type);
    console.log("wineFilter", wineFilter);
    setWines(wineFilter);
  }, [props.location]);
  const { fakeData } = props;

  console.log(type);
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
        {(wines || []).map((item, i) => {
          return (
            <Items
              key={i}
              title={item.title}
              description={item.description}
              pics={item.images}
              price={item.price}
              star={item.star}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
