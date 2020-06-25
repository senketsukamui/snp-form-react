import React from "react";
import styles from "./index.module.css";

const Document = () => {
  return (
    <div className={styles.document}>
      <h1 className={styles.title}>Стажировка в Salt & Pepper</h1>
      <div className={styles.form_field}>ФИО стажёра:</div>
      <div className={styles.form_field}>Дата рождения:</div>
      <div className={styles.form_field}>Образование:</div>
      <div className={styles.form_field}>Место работы:</div>
      <div className={styles.form_field}>Опыт в разработке:</div>
      <div className={styles.form_field}>Технологии/умения:</div>
      <div className={styles.form_field}>О себе:</div>
      <div className={styles.form_field}>Уровень владения английским:</div>
      <div className={styles.form_field}>Опыт в разработке:</div>
      <div className={styles.form_field}>Что хочешь изучать:</div>
      <div className={styles.form_field}>Контакты:</div>
    </div>
  );
};

export default React.memo(Document);
