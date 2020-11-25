import React, { Component } from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

class Profile extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    avatar: '',
    height: '',
    weight: '',
    birthdate: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
    //   Логіка збереження профіля користувача
    // this.setState({
    //   avatar: '',
    //   height: '',
    //   weight: '',
    //   birthdate: '',
    // });
  };
  render() {
    const { avatar, height, weight, birthdate } = this.state;
    return (
      <>
        <button type="button">Назад</button>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            Змінити фото
            <input
              type="file"
              value={avatar}
              onChange={this.handleChange}
              name="avatar"
            />
          </label>
          <label>
            Зріст
            <input
              type="number"
              value={height}
              onChange={this.handleChange}
              name="height"
              min="0"
            />
            см
          </label>
          <label>
            Вага
            <input
              type="number"
              value={weight}
              onChange={this.handleChange}
              name="weight"
              min="0"
            />
            кг
          </label>
          <label>
            Дата народження
            <input
              type="date"
              value={birthdate}
              onChange={this.handleChange}
              name="birthdate"
            />
          </label>
          <button type="submit">Створити</button>
        </form>
      </>
    );
  }
}

export default Profile;
