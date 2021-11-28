import React from "react";

import "./Form.css";

const Form = () => {
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

  const year = ["2018", "2019", "2020", "2021", "2022"];

  const monthOptions = months.map((month) => {
    return <option value={month}>{month}</option>;
  });

  const yearOptions = year.map((year) => {
    return <option value={year}>{year}</option>;
  });

  return (
    <form className="form-mib">
      <label htmlFor="month" className="label-mib">
        Month
      </label>
      <select name="month" id="month" className="form-control__select">
        <option value="">select</option>
        {monthOptions}
      </select>
      <label htmlFor="year" className="label-mib">
        Year
      </label>
      <select name="year" id="year" className="form-control__select">
        <option value="">select</option>
        {yearOptions}
      </select>
    </form>
  );
};

export default Form;
