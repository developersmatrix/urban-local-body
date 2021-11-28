import React from "react";

import styles from "./MonthlyUpdate.module.css";

const MonthlyUpdate = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.input__container}>
        <select className={styles.select__year} name="Year">
          <option value="">Year</option>
          {years.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>
        <select className={styles.select__month}>
          <option value="">Month</option>
          {months.map((month) => (
            <option value={month}>{month}</option>
          ))}
        </select>
        <div>
          <label htmlFor="ob">OB Collection</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="cyd">Current Year Demand Collection</label>
          <input type="text" />
        </div>
        <div>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyUpdate;
