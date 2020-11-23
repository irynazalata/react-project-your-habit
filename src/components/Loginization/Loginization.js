import React from 'react';
import styles from './Loginization.module.css';

const Loginization = function () {
  return (
    <>
      <div className={styles.header}>
        <button type="button" className={styles.headerButton}>
          Назад
        </button>
      </div>
      <form action="submit" className={styles.form}>
        <label htmlFor="userPhone">Номер телефона</label>
        <input type="text" name="userPhone" placeholder="+380" />
        <input type="submit" value="Далі" />
      </form>
    </>
  );
};

export default Loginization;
