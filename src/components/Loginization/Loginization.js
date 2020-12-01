import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Loginization.module.css';

class Loginization extends Component {
  state = {
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
      pathname: '/profile/habit-list',
    });
    // alert(JSON.stringify(this.state));
  };
  render() {
    const { tel } = this.state;
    return (
      <>
        <div className={styles.header}>
          <Link to="/" className={styles.headerButton}>
            Назад
          </Link>
        </div>
        <form
          action="submit"
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
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

export default Loginization;
