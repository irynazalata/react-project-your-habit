import React, { Component } from 'react';
import './App.css';
import Authentification from './components/Authentification/Authentification';
import Loginization from './components//Loginization/Loginization';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';
import HabitsList from './components/HabitsList/HabitsList';
import HabitProfile from './components/HabitsList/HabitProfile/HabitProfile';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    showModal: false,
    users: [],
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Route path="/" exact component={Authentification} />
        <Route path="/login" component={Loginization} />
        <Route path="/registr" component={Registration} />
        {/* <HabitsList showModal={showModal} modalToggle={this.modalToggle} /> */}
        <Route
          path="/profile/habit-list"
          exact
          render={props => (
            <HabitsList
              {...props}
              showModal={showModal}
              modalToggle={this.modalToggle}
            />
          )}
        />
        <Route path="/profile" exact component={Profile} />
        <Route
          path="/profile/habit-list/:habitId"
          exact
          component={HabitProfile}
        />
      </>
    );
  }
}

export default App;
