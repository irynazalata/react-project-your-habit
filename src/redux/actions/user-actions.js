import types from '../action-types';
import { v4 as uuidv4 } from 'uuid';

const addUser = (name = 'name', phone = '876543') => ({
  type: types.ADD_USER,
  payload: {
    id: uuidv4(),
    name: name,
    phone: phone,
  },
});
const updateUser = obj => ({
  type: types.UPDATE_USER,
  payload: {},
});

export default { addUser, updateUser };
