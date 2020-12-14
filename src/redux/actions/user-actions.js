import types from '../action-types';
import { createAction } from '@reduxjs/toolkit';

// const addUser = (name = 'name', phone = '876543') => ({
//   type: types.ADD_USER,
//   payload: {
//     name: name,
//     phone: phone,
//   },
// });
// const updateUser = obj => ({
//   type: types.UPDATE_USER,
//   payload: {},
// });

const addUserRequest = createAction('ADD_USER_REQUEST');
const addUserSuccess = createAction('ADD_USER_SUCCESS');
const addUserError = createAction('ADD_USER_ERROR');

const updateUserRequest = createAction('UPDATE_USER_REQUEST');
const updateUserSuccess = createAction('UPDATE_USER_SUCCESS');
const updateUserError = createAction('UPDATE_USER_ERROR');

const setUserToDefault = createAction('SET_USER_TO_DEFAULT');

export {
  addUserRequest,
  addUserSuccess,
  addUserError,
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
  setUserToDefault,
};
