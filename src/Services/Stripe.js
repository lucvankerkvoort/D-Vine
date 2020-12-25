import React, { createContext, useReducer } from "react";
import StripeReducer from "./StripeReducer";
const initialState = {
  line_items: [],
};

export const StripeContext = createContext(initialState);
export const StripeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StripeReducer, initialState);

  const setPayment = (state) => {
    dispatch({ type: "SET_PAYMENT", payload: state });
  };
  return (
    <StripeContext.Provider value={{ state, setPayment }}>
      {children}
    </StripeContext.Provider>
  );
};
