import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';

class Registration extends Component {
  state = {
    name: '',
    surname: '',
    tel: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: '/profile',
    });
    // alert(JSON.stringify(this.state, null, 2));
  };

  render() {
    const { name, surname, tel } = this.state;
    return (
      <>
        <div className={styles.header}>
          <Link to="/" className={styles.headerButton}>
            {' '}
            Назад
          </Link>
        </div>

        <form
          action="submit"
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Ім'я</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="surname">Прізвище</label>
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={this.handleChange}
          />
          <label htmlFor="tel">Номер телефона</label>
          <input
            type="tel"
            name="tel"
            placeholder="+380"
            value={tel}
            onChange={this.handleChange}
          />
          <input type="submit" value="Далі" />
        </form>
      </>
    );
  }
}

export default Registration;
