import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/countReducer/counterReducer';

import cartReducer from './reducers/cartReducer/cartReducer';
import todoReducer from './reducers/todoReducer/todoReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todoReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;