// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const Stripe = require("stripe");
const stripe = Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: "eur",
  payment_method_types: ["ideal"],
});
