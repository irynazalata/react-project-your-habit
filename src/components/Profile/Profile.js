import React, { Component } from 'react';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserOperation } from '../../redux/operations/userOperations';
import userSelectors from '../../redux/selectors/userSelectors';

class Profile extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    avatar:
      'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png',
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
    const { avatar, height, weight, birthdate } = this.state;
    const id = this.props.match.params.id;
    this.props.updateUser(id, avatar, height, weight, birthdate);
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
        <Link to="/">Назад</Link>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            Змінити фото
            <input type="file" onChange={this.handleChange} name="avatar" />
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
        <Link to="/profile/habit-list" className={styles.btnHabits}>
          До списку звичок
        </Link>
      </>
    );
  }
}

const mapStateToProps = state => ({
  avatar: userSelectors.getUserAvatar(state),
  height: userSelectors.getUserHeight(state),
  weight: userSelectors.getUserWeight(state),
  birthdate: userSelectors.getUserBirthdate(state),
  id: userSelectors.getUserId(state),
});

const mapDispatchToProps = {
  updateUser: updateUserOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
