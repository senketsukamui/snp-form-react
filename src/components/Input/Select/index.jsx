import React from "react";
import styles from "./index.module.css";
import { SELECT_OPTIONS } from "utils/mock";


const Select = (props) => {
  const renderedOptions = SELECT_OPTIONS.map((e, index) => (
    <option key={index}>{e}</option>
  ));

  return (
    <>
      <select {...props} className={styles.select} required>
        {renderedOptions}
      </select>
    </>
  );
};

export default React.memo(Select);
