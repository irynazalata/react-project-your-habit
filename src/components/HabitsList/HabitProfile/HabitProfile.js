import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HabitProfile extends Component {
  render() {
    const { match, location } = this.props;
    return (
      <>
        <Link to="/profile/habit-list">Назад</Link>
        <h2>{match.params.habitId}</h2>
        <Link to="">Править</Link>
        <h3>Прогрес</h3>
        <p>%</p>
        <h3>Графік розвитку звички</h3>
        <Link to="/profile/habit-list">Видалити прогрес</Link>
        <Link to="/profile/habit-list">Видалити звичку</Link>
      </>
    );
  }
}

export default HabitProfile;
