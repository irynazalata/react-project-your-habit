import React from 'react';
// import HabitsList from '../HabitsList';
import { Link } from 'react-router-dom';
// import styles from './HabitsListItem.module.css';

const HabitsListItem = ({ title, progress, id }) => {
  return (
    <Link
      key={id}
      to={{
        pathname: `/profile/habit-list/${id}`,
        state: { title: title, progress: progress },
      }}
    >
      <li>
        <h3>{title}</h3>
        <div>{progress}%</div>
      </li>
    </Link>
  );
};

export default HabitsListItem;
