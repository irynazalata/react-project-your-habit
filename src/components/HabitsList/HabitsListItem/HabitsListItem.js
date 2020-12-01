import React from 'react';
// import HabitsList from '../HabitsList';
import { Link } from 'react-router-dom';
// import styles from './HabitsListItem.module.css';

const HabitsListItem = ({ title, progress }) => {
  console.log(progress);
  return (
    <Link
      to={{
        pathname: `/profile/habit-list/${title}`,
        state: { progress: progress },
      }}
    >
      <li>
        <h3>{title}</h3>
        <div>{progress}</div>
      </li>
    </Link>
  );
};

export default HabitsListItem;
