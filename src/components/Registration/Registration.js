import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';
import { connect } from 'react-redux';
import addUser from '../../redux/actions/user-actions';
import store from '../../redux/store';

class Registration extends Component {
  state = {
    id: '',
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
    console.log(store.getState());
    event.preventDefault();
    const { id, name, surname, tel } = this.state;
    // this.props.addUser(name, surname, tel);
    addUser.addUser();
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

const mapStateToProps = (state, props) => ({
  state,
});
const mapDispatchToProps = {
  addUser: addUser.addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
