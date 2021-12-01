import React, { useState } from "react";

import GeneralInfo from "./GeneralInfo";
import MonthlyUpdate from "./MonthlyUpdate";

import styles from "./CollectionUpdate.module.css";

const CollectionUpdate = (props) => {
  const updatePtaxHandler = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <GeneralInfo data={props.data} updatePtax={updatePtaxHandler} />
      <MonthlyUpdate data={props.data.monthlyCollection} />
    </div>
  );
};

export default CollectionUpdate;
