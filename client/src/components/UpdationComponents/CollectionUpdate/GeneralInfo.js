import React, { useState } from "react";

import styles from "./GeneralInfo.module.css";

const GeneralInfo = () => {
  const [noProps, setNoProps] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [currentYearDemand, setCurrentYearDemand] = useState("");
  const [totalDemand, setTotalDemand] = useState("");

  const noPropsHandler = (event) => {
    setNoProps(event.target.value);
  };

  const openingBalanceHandler = (event) => {
    setOpeningBalance(event.target.value);
    setTotalDemand(Number(event.target.value) + Number(currentYearDemand));
  };

  const currentYearDemandHandler = (event) => {
    setCurrentYearDemand(event.target.value);
    setTotalDemand(Number(openingBalance) + Number(event.target.value));
  };

  return (
    <div className={styles.container__general}>
      <div className={styles.heading__primary}>
        <h1>Property Tax Collection</h1>
      </div>
      <form>
        <div className={styles["form__general--info"]}>
          <div className={styles.input__container}>
            <label htmlFor="totalnoofproperties">Total No of properties</label>
            <input
              type="number"
              id="totalnoofproperties"
              value={noProps}
              onChange={noPropsHandler}
            />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="openingbalance">Opening Balance</label>
            <input
              type="number"
              id="openingbalance"
              value={openingBalance}
              onChange={openingBalanceHandler}
            />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="currentyeardemand">Current year Demand</label>
            <input
              type="number"
              id="currentyeardemand"
              value={currentYearDemand}
              onChange={currentYearDemandHandler}
            />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="totaldemand">Total Demand</label>
            <input
              type="number"
              id="totaldemand"
              disabled
              value={totalDemand}
            />
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
