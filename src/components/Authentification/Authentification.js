import React, { Component } from 'react';
// import Loginization from '../Loginization/Loginization';
// import Registration from '../Registration/Registration';

export default class Authentification extends Component {
  state = {
    users: [
      {
        name: 'Iryna',
        surname: 'Zalata',
        tel: '+380668185655',
      },
    ],
  };

  onBtnClick = event => {
    if (event.target.textContent === 'Вхід') {
      console.log('log-in');
      // return <Loginization />;
    } else if (event.target.textContent === 'Створити аккаунт') {
      console.log('reg');
      // return <Registration />;
    }
  };

  render() {
    return (
      <>
        <section>
          <button type="button" onClick={this.onBtnClick}>
            Вхід
          </button>
          <button type="button" onClick={this.onBtnClick}>
            Створити аккаунт
          </button>
        </section>
        {/* <Loginization /> */}
        {/* <Registration /> */}
      </>
    );
  }
}
