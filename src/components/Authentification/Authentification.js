import React, { Component } from 'react';
import Loginization from '../Loginization/Loginization';
import Registration from '../Registration/Registration';
import logo from '../../images/logo.png';
import styles from './Authentification.module.css';
import background from '../../images/mobile/back-wave-bottom.png';

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
      return <Loginization />;
    } else if (event.target.textContent === 'Створити аккаунт') {
      console.log('reg');
      return <Registration />;
    }
  };

  render() {
    return (
      <>
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img src={logo} className={styles.logo}></img>
          <section className={styles.btnSection}>
            <button
              type="button"
              onClick={this.onBtnClick}
              className={styles.enterBtn}
            >
              Вхід
            </button>
            <button
              type="button"
              onClick={this.onBtnClick}
              className={styles.btn}
            >
              Створити аккаунт
            </button>
          </section>
        </div>

        <Loginization />
        <Registration />
      </>
    );
  }
}
