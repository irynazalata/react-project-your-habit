import types from '../action-types';

const habitsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_HABIT:
      return [...state, payload];

    case types.UPDATE_HABIT:
      return state.filter(note => note.id !== payload.id);

    case types.REMOVE_HABIT:
      return state.filter(habit => habit.id !== payload.id);

    default:
      return state;
  }
};

export default habitsReducer;
