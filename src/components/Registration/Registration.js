import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions/user-actions';
import store from '../../redux/store';
import { addUserOperation } from '../../redux/operations/userOperations';

class Registration extends Component {
  state = {
    name: '',
    surname: '',
    phone: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const { id, name, surname, tel } = this.state;
    this.props.addUserOperation(this.state);
    this.props.history.push({
      pathname: '/profile',
    });
    // alert(JSON.stringify(this.state, null, 2));
  };

  render() {
    const { name, surname, phone } = this.state;
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
          <label htmlFor="phone">Номер телефона</label>
          <input
            type="phone"
            name="phone"
            placeholder="+380"
            value={phone}
            onChange={this.handleChange}
          />
          <input type="submit" value="Далі" />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  surname: state.user.surname,
  phone: state.user.phone,
});
const mapDispatchToProps = {
  addUserOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
