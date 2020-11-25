import React, { Component } from 'react';
import './App.css';
import Authentification from './components/Authentification/Authentification';
import Profile from './components/Profile/Profile';
import HabitForm from './components/HabitsList/HabitsForm/HabitForm';

class App extends Component {
  render() {
    return (
      <>
        <Authentification />
        <Profile />
        <HabitForm />
      </>
    );
  }
}

export default App;
