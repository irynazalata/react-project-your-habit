import React, { Component } from 'react';
import HabitsListItem from './HabitsListItem/HabitsListItem';

import styles from './HabitsList.css';

export default class HabitsList extends Component {
  state = {
    habits: [
      {
        id: '1',
        title: 'Зарядка',
        startDate: '',
        progress: '',
      },
    ],
  };

  setProgress = startDate => {
    const dateNow = Date.now();
    return Math.round(
      ((dateNow - startDate) * 100) / (21 * 24 * 60 * 60 * 1000),
    );
  };
  calculateProgress = id => {
    this.setState(prevstate => {
      const habit = prevstate.habits.find(habit => habit.id === id);
      habit.progress = this.setProgress(habit.startDate);
      return habit;
    });
  };

  render() {
    const { habits } = this.state;
    return (
      <>
        <header>
          <div>Мій профіль</div>
          <button type="button"></button>
        </header>
        <div>Тут буде календар</div>
        <h1>Мої звички</h1>
        {this.state.hebits.length ? (
          <ul>
            {habits.map(habit => {
              return (
                <>
                  <HabitsListItem
                    key={habit.id}
                    progress={() => this.calculateProgress(habit.id)}
                    title={habit.title}
                  />
                </>
              );
            })}
          </ul>
        ) : (
          <p>У вас поки що немає звичок. Натисніть +, щоб додати першу</p>
        )}
        <button type="button">+</button>
      </>
    );
  }
}
