import React, { useState } from "react";

import styles from "./MonthlyUpdate.module.css";

const MonthlyUpdate = (props) => {
  const [OBCollection, setOBCollection] = useState(props.data[0].OBCollection);

  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(OBCollection);
  };

  return (
    <div className={styles["container__monthly--update"]}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.select__container}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year">
            <option value="">Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.select__container}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month">
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.select__container}>
          <label htmlFor="ob">Collection from Opening Balance</label>
          <input type="number" value={OBCollection} />
        </div>
        <div className={styles.select__container}>
          <label htmlFor="cyd">Collection from Current Year Demand</label>
          <input type="number" />
        </div>
        <div className={styles.select__container}>
          <label htmlFor="tc">Total Collection</label>
          <input type="number" disabled />
        </div>
        <div className={styles.button_container}>
          <button type="submit">edit</button>
        </div>
      </form>
      <div className={styles["add__button--container"]}>
        <button>Add</button>
      </div>
    </div>
  );
};

export default MonthlyUpdate;
