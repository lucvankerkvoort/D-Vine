import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../Images/images";
const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img src={image.logoGif} alt="logo" height="150px" />
          </Link>
        </div>
        <div>
          <div className="cart">
            <img src={image.cart} alt=".." />
            <p>Cart</p>
          </div>
          <div className="search">
            <img src={image.search} alt=".." width="20px" />
            <input
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="navbar-items">
        <Link
          to="/shop:reds"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p> Red Wines </p>
        </Link>
        <Link
          to="/shop:whites"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p> White Wines </p>
        </Link>
        <Link
          to="/shop:rose"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p> Rose wines </p>
        </Link>
        <Link
          to="/shop:sparkling"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p> Sparkling wines </p>
        </Link>
        <Link to="/other" style={{ textDecoration: "none", color: "black" }}>
          <p> Other </p>
        </Link>
        <Link to="/news" style={{ textDecoration: "none", color: "black" }}>
          <p> News </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
