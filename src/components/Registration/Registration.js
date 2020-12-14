import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions/user-actions';
import store from '../../redux/store';
import { addUserOperation } from '../../redux/operations/userOperations';
import userSelectors from '../../redux/selectors/userSelectors';

class Registration extends Component {
  state = {
    name: '',
    surname: '',
    phone: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.props.history.push({
        pathname: `/profile/${this.props.id}`,
      });
    }
  }
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, addUserOperation } = this.props;
    addUserOperation(this.state);
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
  id: userSelectors.getUserId(state),
});
const mapDispatchToProps = {
  addUserOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
