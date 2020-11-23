import React, { Component } from 'react';
import './App.css';
import Authentification from './components/Authentification/Authentification';
import Loginization from './components/Loginization/Loginization';
import Registration from './components/Registration/Registration';

class App extends Component {
  render() {
    return (
      <>
        <Authentification />;
        <Loginization />
        <Registration />
      </>
    );
  }
}

export default App;
