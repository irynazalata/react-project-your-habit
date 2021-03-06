import axios from 'axios';
import {
  addUserRequest,
  addUserSuccess,
  addUserError,
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
} from '../actions/user-actions';

const addUserOperation = ({ name, surname, phone }) => dispatch => {
  dispatch(addUserRequest());
  axios
    .post(' http://localhost:2000/users', { name, surname, phone })
    .then(response => dispatch(addUserSuccess(response.data)))
    .catch(error => dispatch(addUserError(error)));
};

const updateUserOperation = (
  id,
  avatar,
  height,
  weight,
  birthdate,
) => dispatch => {
  dispatch(updateUserRequest());
  axios
    .patch(`http://localhost:2000/users/${id}`, {
      avatar,
      height,
      weight,
      birthdate,
    })
    .then(response => dispatch(updateUserSuccess(response.data)))
    .catch(error => dispatch(updateUserError(error)));
};

export { addUserOperation, updateUserOperation };
