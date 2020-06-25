import React from "react";
import styles from "./index.module.css";
import Document from "components/Document";
import Form from "components/Form";

const Main = () => {
  return (
    <div className={styles.main}>
      <Form />
      <Document />
    </div>
  );
};

export default React.memo(Main);
