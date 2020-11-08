import React from "react";
import Jumbotron from "../Components/Jumbotron/jumbotron";
import Images from "../Images/images";
import Title from "../Components/Jumbotron/title";
import Collection from "../Components/Collections/collections";

const Home = ({ collections }) => {
  const collectionsArray = () => {
    const obj = {};
    for (let i = 0; i < collections.length; i++) {
      obj[collections[i].type] = obj[collections[i].type] + 1 || 1;
    }
    return Object.keys(obj);
  };
  return (
    <div className="home">
      <Jumbotron title="Good D-Vine" text="test." />
      <Title title="Collecties" />
      <Collection title={collectionsArray()} collections={collections} />
    </div>
  );
};

export default Home;
