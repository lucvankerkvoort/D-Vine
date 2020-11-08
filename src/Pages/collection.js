import React, { useContext } from "react";
import Items from "../Components/Items/item";
import Title from "../Components/Jumbotron/title";
import images from "../Images/images";
import { store } from "../Services/Store";

const Collection = (props) => {
  const userData = useContext(store);
  if (!userData.state.collection) {
    userData.state.collection = JSON.parse(localStorage.getItem("collection"));
  }
  const { collection } = userData.state;
  return (
    <div className="collection-page">
      <div
        className="collection-picture"
        style={{
          background: `url(${collection[0].images[0]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "200px",
        }}
      />
      <Title title="Collectie" />
      <div className="shop">
        <img
          src={images.leftArrow}
          alt="left arrow"
          width="30px"
          height="30px"
          id="back-to-home"
          onClick={() => props.history.push("/")}
        />
        {(collection || []).map((item, i) => {
          return (
            <Items
              key={i}
              title={item.title}
              description={item.description}
              pics={item.images}
              price={item.price}
              sold={item.sold}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
