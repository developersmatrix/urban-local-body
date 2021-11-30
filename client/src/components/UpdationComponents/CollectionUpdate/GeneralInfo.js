import React, { useState } from "react";

import styles from "./GeneralInfo.module.css";

const GeneralInfo = (props) => {
  const [noProps, setNoProps] = useState(props.data.totalNumberOfProperty);
  const [openingBalance, setOpeningBalance] = useState(
    props.data.openingBalance
  );
  const [currentYearDemand, setCurrentYearDemand] = useState(
    props.data.currentYearDemand
  );
  const [totalDemand, setTotalDemand] = useState(
    +openingBalance + +currentYearDemand
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const noPropsHandler = (event) => {
    setNoProps(event.target.value);
  };

  const openingBalanceHandler = (event) => {
    setOpeningBalance(event.target.value);
    setTotalDemand(Number(event.target.value) + Number(currentYearDemand));
  };

  const currentYearDemandHandler = (event) => {
    setCurrentYearDemand(event.target.value);
    setTotalDemand(+openingBalance + +event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      noProps.trim().length === 0 ||
      openingBalance.trim().length === 0 ||
      currentYearDemand.trim().length === 0
    ) {
      return;
    }

    if (!isDisabled) {
      const ptax = {
        ...props.data,
        totalNumberOfProperty: noProps,
        openingBalance: openingBalance,
        currentYearDemand: currentYearDemand,
      };
      props.updatePtax(ptax);
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <div className={styles.container__general}>
      <div className={styles.heading__primary}>
        <h1>Property Tax Collection - {props.data.year}</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className={styles["form__general--info"]}>
          <div className={styles.input__container}>
            <label htmlFor="totalnoofproperties">Total No of properties</label>
            <input
              type="number"
              id="totalnoofproperties"
              value={noProps}
              onChange={noPropsHandler}
              disabled={isDisabled}
            />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="openingbalance">Opening Balance</label>
            <input
              type="number"
              id="openingbalance"
              value={openingBalance}
              onChange={openingBalanceHandler}
              disabled={isDisabled}
            />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="currentyeardemand">Current year Demand</label>
            <input
              type="number"
              id="currentyeardemand"
              value={currentYearDemand}
              onChange={currentYearDemandHandler}
              disabled={isDisabled}
            />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="totaldemand">Total Demand</label>
            <input
              type="number"
              id="totaldemand"
              disabled={true}
              value={totalDemand}
            />
          </div>
        </div>
        <div className={styles.submit__button}>
          <button type="submit">{isDisabled ? "Edit" : "Update"}</button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
