const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_INCREMENT":
      return state + action.payload;
    case "COUNT_DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
