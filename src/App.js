/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/home";
import images from "./Images/images";
import Collection from "./Pages/collection";
import Contact from "./Pages/contact";
import Shop from "./Pages/shop";
import Footer from "./Components/Footer/footer";
import Specification from "./Pages/specification";
import "./Styles/import.scss";
import { store } from "./Services/Store";
import { db } from "./Firebase/Firebase";

const App = () => {
  const [collections, setCollections] = useState("");
  const userData = useContext(store);
  const { dispatch } = userData;

  useEffect((arr = []) => {
    db.collection("items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
        });
        dispatch({ type: "info", payload: arr });
        setCollections(arr);
      });
  }, []);

  const fakeData = [
    {
      images: images.wine_placeholder,
      type: "red",
      title: "Red",
      price: "15",
      description: "Beautiful Red Wine",
      star: 4.0,
    },
    {
      title: "Red",
      type: "red",
      images: images.wine_placeholder,
      price: "15",
      description: "Beautiful Red Wine",
      star: 3.7,
    },
    {
      title: "White",
      type: "white",
      images: images.wine_placeholder,
      price: "45",
      description: "nice white wine",
      star: 2.5,
    },
    {
      title: "White",
      type: "white",
      images: images.wine_placeholder,
      price: "45",
      description: "nice white wine",
      star: 2.5,
    },
    {
      title: "White",
      type: "white",
      images: images.wine_placeholder,
      price: "45",
      description: "nice white wine",
      star: 2.5,
    },
    {
      title: "White",
      type: "white",
      images: images.wine_placeholder,
      price: "45",
      description: "nice white wine",
      star: 2.5,
    },
  ];
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <Route
          exact
          path="/"
          render={() => <Home collections={collections} />}
        />
        <Route
          path="/collection"
          render={(props) => <Collection {...props} />}
        />
        <Route path="/contact" component={Contact} />
        <Route
          path="/shop/:type"
          render={(props) => <Shop fakeData={fakeData} {...props} />}
        />
        <Route path="/spec" render={(props) => <Specification {...props} />} />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
