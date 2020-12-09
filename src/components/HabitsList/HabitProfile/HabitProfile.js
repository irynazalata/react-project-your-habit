import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import HabitForm from '../HabitsForm/HabitForm';
// import actions from '../../../redux/actions/habit-actions';

class HabitProfile extends Component {
  render() {
    const { match, location } = this.props;
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
          <Link to="/profile/habit-list">Назад</Link>
          <h2>{location.state.title}</h2>
          <button type="button" onClick={this.props.modalToggle}>
            Править
          </button>
        </header>

        <h3>Прогрес</h3>
        <p>{location.state.progress}%</p>
        <h3>Графік розвитку звички</h3>
        <Link to="/profile/habit-list">Видалити прогрес</Link>
        <Link to="/profile/habit-list" onClick={() => console.log('Hello')}>
          Видалити звичку
        </Link>
      </>
    );
  }
}

export default HabitProfile;
