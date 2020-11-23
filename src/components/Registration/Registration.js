import React from 'react';
import styles from './Registration.module.css';

const Registration = function () {
  return (
    <>
      <div className={styles.header}>
        <button type="button" className={styles.headerButton}>
          {' '}
          Назад
        </button>
      </div>

      <form action="submit" className={styles.form}>
        <label htmlFor="userName">Ім'я</label>
        <input type="text" name="userName" />
        <label htmlFor="userSurname">Прізвище</label>
        <input type="text" name="userSurname" />
        <label htmlFor="userPhone">Номер телефона</label>
        <input type="text" name="userPhone" placeholder="+380" />
        <input type="submit" value="Далі" />
      </form>
    </>
  );
};

export default Registration;
