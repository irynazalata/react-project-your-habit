import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HabitForm.module.css';
import background from '../../../images/mobile/modal-habit-bottom.png';
import { v4 as uuid4v } from 'uuid';

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

  closeId = null;

  componentWillUnmount() {
    clearTimeout(this.closeId);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, color, comment, repeat, remind } = this.state;
    const habit = {
      id: uuid4v(),
      title: title,
      comment: comment,
      repeat: repeat,
      color: color,
      remind: remind,
      startDate: Date.now(),
      progress: this.setProgress(Date.now()),
    };
    this.props.addHabit(habit);
    alert(`Твоя звичка "${habit.title}" додана`);
    this.setState({
      title: '',
      comment: '',
      repeat: '',
      color: '#390093',
      remind: true,
    });
    this.closeId = setTimeout(this.props.modalToggle, 1000);
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  setProgress = startDate => {
    const dateNow = Date.now();
    return Math.round(
      ((dateNow - startDate) * 100) / (21 * 24 * 60 * 60 * 1000),
    );
  };
  render() {
    const { title, comment, repeat, color, remind } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className={styles.form}
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className={styles.header}
          style={{ backgroundColor: this.state.color }}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={this.props.modalToggle}
          ></button>
          <h2 className={styles.title}>Нова Звичка</h2>
          <label htmlFor="title" className={styles.labelTitle}>
            Назва
          </label>
          <input
            className={styles.inputTitle}
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
            placeholder="Зарядка"
          ></input>
        </div>
        <div className={styles.main}>
          <label htmlFor="comment" className={styles.label}>
            Мотивуй себе
          </label>
          <input
            name="comment"
            type="textarea"
            value={comment}
            onChange={this.handleChange}
            className={styles.inputComment}
            placeholder="..."
          ></input>
          <label className={styles.labelRepeat}>
            Повторювати{' '}
            <select
              name="repeat"
              value={repeat}
              onChange={this.handleChange}
              className={styles.inputRepeat}
            >
              <option value="1">Кожну годину </option>
              <option value="2">Кожні дві години </option>
            </select>
          </label>

          <label className={styles.labelColor}>
            Обери колір
            <input
              name="color"
              type="color"
              value={color}
              onChange={this.handleChange}
              className={styles.inputColor}
            ></input>
          </label>

          <label htmlFor="remind" className={styles.labelRemind}>
            Нагадати мені
            <input
              name="remind"
              type="checkbox"
              checked={remind}
              onChange={this.handleChange}
              className={styles.inputRemind}
            ></input>
          </label>

          <button type="submit" className={styles.inputBtn}>
            Зберегти
          </button>
        </div>
      </form>
    );
  }
}
