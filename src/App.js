/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/home";
import images from "./Images/images";
import Cart from "./Pages/cart";
import NewsPage from "./Pages/news";
import Collection from "./Pages/collection";
import Contact from "./Pages/contact";
import Shop from "./Pages/shop";
import Footer from "./Components/Footer/footer";
import Specification from "./Pages/specification";
import "./Styles/import.scss";
import { store } from "./Services/Store";
import { db } from "./Firebase/Firebase";
import { StripeProvider } from "./Services/Stripe";

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
      title: "Title",
      price: 15,
      description: "Beautiful Red Wine",
      star: 4.0,
    },
    {
      title: "Title",
      type: "red",
      images: images.wine_placeholder,
      price: 15,
      description: "Beautiful Red Wine",
      star: 3.7,
    },
    {
      title: "Title",
      type: "white",
      images: images.wine_placeholder,
      price: 45,
      description: "nice white wine",
      star: 2.5,
    },
    {
      title: "Title",
      type: "white",
      images: images.wine_placeholder,
      price: 45,
      description: "nice white wine",
      star: 2.5,
    },
    {
      title: "Title",
      type: "white",
      images: images.wine_placeholder,
      price: 45,
      description: "nice white wine",
      star: 2.5,
    },
    {
      title: "Title",
      type: "white",
      images: images.wine_placeholder,
      price: 45,
      description: "nice white wine",
      star: 2.5,
    },
    {
      title: "Title",
      type: "other",
      images: images.wine_placeholder,
      price: 0,
      description: "other",
      star: 4,
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
        <Route
          path="/cart"
          render={(props) => (
            <StripeProvider>
              <Cart fakeData={fakeData} {...props} />
            </StripeProvider>
          )}
        />
        <Route path="/contact" component={Contact} />
        <Route
          path="/shop/:type"
          render={(props) => <Shop fakeData={fakeData} {...props} />}
        />
        <Route path="/news" render={(props) => <NewsPage {...props} />} />
        <Route path="/spec" render={(props) => <Specification {...props} />} />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
