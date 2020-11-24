import React, { Component } from 'react';
import './App.css';
import Authentification from './components/Authentification/Authentification';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <>
        <Authentification />;
        <Profile />;
      </>
    );
  }
}

export default App;
