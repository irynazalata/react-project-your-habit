import types from '../action-types';

const INITIAL_STATE = [
  {
    email: 'mango@gmail.com',
    id: 1,
    name: 'Mango',
    phone: 309039994,
    avatar:
      'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png',
    habits: [
      {
        id: 1,
        title: 'pol',
        comment: 'no',
        repeat: 'every day',
        color: '#FF7E00',
        remind: false,
        progress: '10%',
      },
    ],
  },
];
const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ADD_USER:
      return [...state, payload];

    case types.UPDATE_USER:
      return state.filter(user => user.id !== payload.id);

    default:
      return state;
  }
};

export default userReducer;
