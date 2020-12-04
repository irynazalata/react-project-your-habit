import React, { Component } from 'react';
import HabitsListItem from './HabitsListItem/HabitsListItem';
import HabitForm from './HabitsForm/HabitForm';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

import styles from './HabitsList.module.css';

export default class HabitsList extends Component {
  state = {
    habits: [
      // {
      //   id: '1',
      //   title: 'Зарядка',
      //   startDate: '',
      //   progress: 0,
      // },
    ],
  };

  componentDidMount() {
    const savedHabits = JSON.parse(localStorage.getItem('state')) || [];
    this.setState({ habits: savedHabits });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state)
      localStorage.setItem('state', JSON.stringify(this.state.habits));
  }
  addHabit = habit => {
    this.setState(prevstate => ({
      habits: [...prevstate.habits, habit],
    }));
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
          {this.props.showModal && (
            <Modal modalToggle={this.props.modalToggle}>
              <HabitForm
                modalToggle={this.props.modalToggle}
                addHabit={this.addHabit}
              />
            </Modal>
          )}
          <div>Мій профіль</div>
          <Link to="/">Назад</Link>
        </header>
        <div>Тут буде календар</div>
        <h1>Мої звички</h1>
        {habits.length ? (
          <ul>
            {habits.map(habit => {
              return (
                <HabitsListItem
                  key={habit.id}
                  progress={habit.progress}
                  // progress={() => this.calculateProgress(habit.id)}
                  title={habit.title}
                  id={habit.id}
                />
              );
            })}
          </ul>
        ) : (
          <p>У вас поки що немає звичок. Натисніть +, щоб додати першу</p>
        )}
        <button type="button" onClick={this.props.modalToggle}>
          +
        </button>
      </>
    );
  }
}
