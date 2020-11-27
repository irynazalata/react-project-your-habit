import React, { Component } from 'react';
import './App.css';
import Authentification from './components/Authentification/Authentification';
import Profile from './components/Profile/Profile';
import HabitsList from './components/HabitsList/HabitsList';

class App extends Component {
  state = {
    showModal: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <HabitsList showModal={showModal} modalToggle={this.modalToggle} />
        <Authentification />
        <Profile />
      </>
    );
  }
}

export default App;
