/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./Pages/CheckOut";
import CheckOutComplete from "./Pages/CheckOutComplete";


// const promise = loadStripe('pk_test_51IDiTLEym2Zi7sBu5TgeEbrR32H3wKrgUIeGS39ABFdjvx3sJ5ZIW8OrnHRIPMXmFGmkNfF4c7TrzDCRFqOQIWkq00e9tdsNEe');
const promise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);

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
      <Router>
        <Navbar />
        <Switch>
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
          <Route path="/checkout">
            <CheckOut fakeData={fakeData} />
          </Route>
          <Route path="/complete">
            <Elements stripe={promise}>
              <CheckOutComplete />
            </Elements>
          </Route>
          <Route
            path="/shop/:type"
            render={(props) => <Shop fakeData={fakeData} {...props} />}
          />
          <Route path="/news" render={(props) => <NewsPage {...props} />} />
          <Route path="/spec" render={(props) => <Specification {...props} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
