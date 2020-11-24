import React from 'react';
import HabitsList from '../HabitsList';
import styles from './HabitslistItems.css';

const HabitsListItem = ({ title, progress }) => {
  return (
    <li>
      <h3>{title}</h3>
      <div>{progress}</div>
    </li>
  );
};

export default HabitsListItem;
