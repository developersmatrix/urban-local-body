import React from "react";

import styles from "./GeneralInfo.module.css";

const GeneralInfo = () => {
  return (
    <div className={styles.container__general}>
      <div className={styles.heading__primary}>
        <h1>Property Tax Collection</h1>
      </div>
      <form>
        <div className={styles["form__general--info"]}>
          <div className={styles.input__container}>
            <label for="totalnoofproperties">Total No of properties</label>
            <input type="text" id="totalnoofproperties" />
          </div>
          <div className={styles.input__container}>
            <label for="openingbalance">Opening Balance</label>
            <input type="text" id="openingbalance" />
          </div>
          <div className={styles.input__container}>
            <label for="currentyeardemand">Current year Demand</label>
            <input type="text" id="currentyeardemand" />
          </div>
          <div className={styles.input__container}>
            <label for="totaldemand">Total Demand</label>
            <input type="text" id="totaldemand" disabled />
          </div>
        </div>
        <div className={styles.submit__button}>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
