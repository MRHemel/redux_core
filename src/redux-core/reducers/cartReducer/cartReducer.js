const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART_INCREMENT":
      return state + 1;
    case "CART_DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default cartReducer;
