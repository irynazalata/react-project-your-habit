import React, { Component } from 'react';
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
    // alert(JSON.stringify(this.state));
  };
  render() {
    const { tel } = this.state;
    return (
      <>
        <div className={styles.header}>
          <button type="button" className={styles.headerButton}>
            Назад
          </button>
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
