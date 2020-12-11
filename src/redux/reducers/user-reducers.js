import { combineReducers } from 'redux';
import types from '../action-types';
import habits from './habit-reducers';
import { updateUser } from '../actions/user-actions';
// import { addHabit, updateHabit, removeHabit } from '../actions/habit-actions';
import { createReducer } from '@reduxjs/toolkit';
import {
  addUserRequest,
  addUserSuccess,
  addUserError,
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
} from '../actions/user-actions';

const INITIAL_STATE = {
  id: 1,
  name: 'Mango',
  surname: '',
  phone: 309039994,
  avatar:
    'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png',
  height: '',
  weight: '',
  birthdate: '',
  habits: [],
};
// const userReducer = (state = INITIAL_STATE, { type, payload }) => {
//   switch (type) {
//     case types.ADD_USER:
//       return { ...state, ...payload };

//     case types.UPDATE_USER:
//       return { ...state, ...payload };

//     case types.ADD_HABIT:
//       return [...state.habits, payload];

//     case types.UPDATE_HABIT:
//       return state.habits.filter(note => note.id !== payload.id);

//     case types.REMOVE_HABIT:
//       return state.habits.filter(habit => habit.id !== payload.id);

//     default:
//       return state;
//   }
// };

const userReducer = createReducer(INITIAL_STATE, {
  [addUserSuccess]: (state, action) => ({ ...state, ...action.payload }),
  [updateUser]: (state, action) => ({ ...state, ...action.payload }),
});
export default userReducer;
