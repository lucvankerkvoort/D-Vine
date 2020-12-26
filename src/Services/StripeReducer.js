const StripeReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAYMENT": {
      let item = {
        price_data: {
          currency: "eur",
          product_data: {
            name: action.payload.name,
          },
          unit_amount: action.payload.amount,
        },
        quantity: action.payload.quantity,
      };
      return {
        ...state,
        line_items: [...state.line_items, item],
      };
    }
    default:
      return state;
  }
};

export default StripeReducer;
