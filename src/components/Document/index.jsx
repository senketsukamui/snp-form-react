import React from "react";
import styles from "./index.module.css";

const Document = () => {
  return (
    <div className={styles.document}>
      <h1 className={styles.title}>Стажировка в Salt & Pepper</h1>
    </div>
  );
};

export default React.memo(Document);
