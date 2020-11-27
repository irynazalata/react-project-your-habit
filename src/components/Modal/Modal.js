import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    if (event.code === 'Escape') {
      this.props.modalToggle();
    }
  };
  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>
    );
  }
}
