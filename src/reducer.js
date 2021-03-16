export const initialState = {
  basket: [],
  user: null
};
let index;let newBasket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id   );
      newBasket = [...state.basket];
      if (index >= 0) {
        let temp=newBasket[index];
        newBasket.splice(index, 1);
        newBasket.push({
          title: temp.title,
          image: temp.image,
          price: temp.price,
          starArray:temp.starArray,
          star:temp.star,
          description: temp.description,
          id: temp.id,
          quantity: temp.quantity+action.item.quantity
        })
      } else {
        newBasket.push({
          title:  action.item.title,
          image:  action.item.image,
          price:  action.item.price,
          starArray: action.item.starArray,
          star: action.item.star,
          description:  action.item.description,
          id:  action.item.id,
          quantity: action.item.quantity
        })
      }
      return {
        ...state,
        basket: newBasket,
      };
    case 'REMOVE_FROM_BASKET':
      index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove (id: ${action.id}) as it was not in basket!`)
      }
      return { ...state, basket: newBasket }
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    default:
      return state
  }

};

export default reducer;