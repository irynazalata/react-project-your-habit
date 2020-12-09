import { createStore, combineReducers } from 'redux';
import habitsReducer from './reducers/habit-reducers';
import userReducer from './reducers/user-reducers';

const reducer = combineReducers({ habits: habitsReducer, user: userReducer });
const store = createStore(reducer);

export default store;
