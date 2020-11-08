/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/home";
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
        <Route path="/shop" render={(props) => <Shop {...props} />} />
        <Route path="/spec" render={(props) => <Specification {...props} />} />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
