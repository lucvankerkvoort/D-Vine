import React, { useContext, useState } from "react";
import { store } from "../Services/Store";
import images from "../Images/images";
// import emailjs from "emailjs-com";

const Specification = (props) => {
  // const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [message, setMessage] = useState("");
  // const [success, setSuccess] = useState("");

  // const handleEmail = (e) => {
  //   e.preventDefault();

  //   const templateParams = {
  //     from_name: ` ${title} (${email})`,
  //     to_name: "Corinda",
  //     message_html: message,
  //   };
  //   emailjs
  //     .send(
  //       "kastjesfabriek",
  //       "template_w911gCXB",
  //       templateParams,
  //       "user_rpcRGHi1Y0p1xl1IdxtTc"
  //     )
  //     .then(
  //       function (response) {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       function (err) {
  //         console.log("Your message was not able to be sent", err);
  //       }
  //     );
  //   setEmail("");
  //   setMessage("");
  //   // setSuccess("Verstuurt");
  // };
  const goBack = props.history.goBack;
  const userData = useContext(store);

  if (!userData.state.current) {
    userData.state.current = JSON.parse(localStorage.getItem("current"));
  }
  const { pics, title, description, starArray, star } = userData.state.current;

  console.log("current Data", userData.state.current);
  return (
    <div className="specification">
      <div className="title-spec">
        <img
          src={images.leftArrow}
          alt="left arrow"
          width="30px"
          height="30px"
          className="back-to-shopping"
          onClick={() => goBack()}
        />
      </div>
      <div className="product-spec">
        <div className="picture-spec">
          <img src={pics} alt="..." />
        </div>
        <div className="detail-spec">
          <h1>{title}</h1>
          <p> {description}</p>
          <div>
            {star} stars
            {starArray.map((star) => (
              <img src={star} alt="stars" height="40px" />
            ))}
          </div>
          <form>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <button type="submit">Add To Basket</button>
          </form>
          <table>
            <tr>
              <td>Classification:</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Brand:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Vintage:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Region:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Volume:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Condition:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Label:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Stock:</td>
              <td>test</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Specification;
