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

  const options = months.map((month) => {
    return <option value={month}>{month}</option>;
  });

  return (
    <form className="form-mib">
      <label htmlFor="month" className="label-mib">
        Month
      </label>
      <select name="month" id="month" className="form-control__select">
        <option value="">select</option>
        {options}
      </select>
    </form>
  );
};

export default Form;
