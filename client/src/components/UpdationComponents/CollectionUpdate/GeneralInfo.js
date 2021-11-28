import React from "react";

import styles from "./GeneralInfo.module.css";

const GeneralInfo = () => {
  return (
    <div className={styles.container__general}>
      <form className={styles.form__container} onSubmit={null}>
        <div className={styles.input__container}>
          <label>Total No of Properties</label>
          <input type="text" />
        </div>
        <div className={styles.input__container}>
          <label>Opening Balance</label>
          <input type="text" />
        </div>
        <div className={styles.input__container}>
          <label>Current year demand</label>
          <input type="text" />
        </div>
        <div className={styles.input__container}>
          <label>Total demand</label>
          <input type="text" disabled />
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
