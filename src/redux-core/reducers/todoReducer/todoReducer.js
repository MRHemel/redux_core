const todos = []

const todoReducer = (state = todos, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'REMOVE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default todoReducer;