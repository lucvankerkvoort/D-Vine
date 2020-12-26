const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const { uuid } = require('uuidv4');
const app = express();

// setup request logging
app.use(morgan("dev"));
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Serve client from build folder
app.use(express.static(path.join(__dirname, "build")));

// A temporary store to keep payment data to be sent in additional payment details and redirects.
// This is more secure than a cookie. In a real application this should be in a database.

// enables environment variables by
// parsing the .env file and assigning it to process.env
dotenv.config({
  path: "./.env",
});

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency } = req.body;
  console.log(req.body);

  const customer = await stripe.customers.create();
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    setup_future_usage: "off_session",
    amount: amount,
    currency: currency,
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));
