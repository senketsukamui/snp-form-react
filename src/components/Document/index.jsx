import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

const Document = () => {
  const formField = useSelector((state) => state.form);

  const {
    name,
    birthDate,
    education,
    workPlace,
    experience,
    aboutYou,
    email,
  } = formField;

  return (
    <div className={styles.document}>
      <div className={styles.title_block}>
        <h1 className={styles.title}>Стажировка в Salt & Pepper</h1>
      </div>
      <div className={styles.profile_image}></div>
      <div className={styles.form_field}>ФИО: {name}</div>
      <div className={styles.form_field}>Дата рождения: {birthDate} </div>
      <div className={styles.form_field}>Образование: {education} </div>
      <div className={styles.form_field}>Моё место работы: {workPlace} </div>
      <div className={styles.form_field}>Опыт в разработке: {experience}</div>
      <div className={styles.form_field}>Моя почта: {email}</div>
      <div className={styles.form_field}>Обо мне:{aboutYou}</div>
    </div>
  );
};

export default React.memo(Document);
