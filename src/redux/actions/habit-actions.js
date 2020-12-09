import types from '../action-types';
import { v4 as uuid4v } from 'uuid';

const addHabit = ({ title, comment, repeat, color, remind }) => ({
  type: types.ADD_HABIT,
  payload: {
    id: uuid4v(),
    title: title,
    comment: comment,
    repeat: repeat,
    color: color,
    remind: remind,
    progress: 0,
  },
});

const updateHabit = (title, comment, repeat, color, remind) => ({
  type: types.UPDATE_HABIT,
  payload: {
    title: title,
    comment: comment,
    repeat: repeat,
    color: color,
    remind: remind,
    progress: 0,
  },
});

const removeHabit = id => ({
  type: types.REMOVE_HABIT,
  payload: {
    id,
  },
});

export default { addHabit, updateHabit, removeHabit };
