import React, { Component } from 'react';
import App from './App';

class AppContainer extends Component {
  state = {
    showModal: false,
    users: [
      // {
      //   email: '',
      //   name: '',
      //   phone: '',
      //   habits: [],
      // },
    ],
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    return <App modalToggle={this.modalToggle}></App>;
  }
}

export default AppContainer;
