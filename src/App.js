import React, { Component, Suspense } from 'react';
import './App.css';
// import Authentification from './components/Authentification/Authentification';
// import Loginization from './components//Loginization/Loginization';
// import Registration from './components/Registration/Registration';
// import Profile from './components/Profile/Profile';
import HabitsList from './components/HabitsList/HabitsList';
import HabitProfile from './components/HabitsList/HabitProfile/HabitProfile';
import { Route } from 'react-router-dom';
import routes from './routes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import Context from './context/Context';
import UserContext from './context/Context';

class App extends Component {
  state = {
    showModal: false,
    users: [
      {
        email: '',
        name: '',
        phone: '',
        habits: [],
      },
    ],
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <UserContext>
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
              {routes.map((route, idx) => (
                <Route key={idx} {...route}></Route>
              ))}
              {/* <Route path="/" exact component={Authentification} />
        <Route path="/login" component={Loginization} />
        <Route path="/registr" component={Registration} />
        <Route path="/profile" exact component={Profile} />
        <Route
          path="/profile/habit-list/:habitId"
          exact
          component={HabitProfile}
        /> */}
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
              <Route
                path="/profile/habit-list/:habitId"
                exact
                render={props => (
                  <HabitProfile
                    {...props}
                    showModal={showModal}
                    modalToggle={this.modalToggle}
                  />
                )}
              />
            </Suspense>
          </ErrorBoundary>
        </UserContext>
      </>
    );
  }
}

export default App;
