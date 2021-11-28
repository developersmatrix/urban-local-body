import React from "react";

import GeneralInfo from "./GeneralInfo";
import MonthlyUpdate from "./MonthlyUpdate";

import styles from "./CollectionUpdate.module.css";

const CollectionUpdate = () => {
  return (
    <div className={styles.container}>
      <GeneralInfo />
      <MonthlyUpdate />
    </div>
  );
};

export default CollectionUpdate;
