import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HabitForm.module.css';

export default class HabitForm extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    title: '',
    comment: '',
    repeat: '',
    color: '#390093',
    remind: true,
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  render() {
    const { title, comment, repeat, color, remind } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div
            className={styles.header}
            style={{ backgroundColor: this.state.color }}
          >
            <button type="button">X</button>
            <h2>Нова звичка</h2>
            <label htmlFor="title">Назва</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={this.handleChange}
            ></input>
          </div>
          <label htmlFor="comment">Мотивуй себе</label>
          <input
            name="comment"
            type="textarea"
            value={comment}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="repeat">Повторювати</label>
          <select name="repeat" value={repeat} onChange={this.handleChange}>
            <option value="1">Кожну годину &#10148;</option>
            <option value="2">Кожні дві години &#10148;</option>
          </select>
          <label htmlFor="color">Оберіть колір</label>
          <input
            name="color"
            type="color"
            value={color}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="remind">Нагадати мені</label>
          <input
            name="remind"
            type="checkbox"
            checked={remind}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Зберегти</button>
        </form>
      </div>
    );
  }
}
