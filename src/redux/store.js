import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import habits from './reducers/habit-reducers';
import user from './reducers/user-reducers';

const store = configureStore({
  reducer: { user },
});

export default store;
