import React, { Component, createContext } from 'react';

const Context = createContext();

const fetchedUser = {
  id: 1,
  email: 'mango@gmail.com',
  name: 'Mango',
  phone: '123456789',
  avatar:
    'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png',
  habits: [
    {
      title: 'Зарядка',
      comment: 'Не хочу бути жирним',
      repeat: 'Щодня',
      color: '#390093',
      remind: true,
      progress: '10',
    },
  ],
};

class UserContext extends Component {
  static Consumer = Context.Consumer;
  handleLogIn = () => {
    this.setState({ user: fetchedUser, isLogin: true });
  };
  handleLogOut = () => {
    this.setState({ user: null, isLogin: false });
  };
  state = {
    user: fetchedUser,
    isLogin: false,
    handleLogIn: this.handleLogIn,
    handleLogOut: this.handleLogOut,
  };
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export default UserContext;
