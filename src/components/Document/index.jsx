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
    skills,
    aboutYou,
    englishLevel,
    wantToLearn,
    email,
    contacts,
  } = formField;

  return (
    <div className={styles.document}>
      <h1 className={styles.title}>Стажировка в Salt & Pepper</h1>
      <div className={styles.form_field}>ФИО стажёра: {name}</div>
      <div className={styles.form_field}>Дата рождения: {birthDate} </div>
      <div className={styles.form_field}>Образование: {education} </div>
      <div className={styles.form_field}>Место работы:{workPlace} </div>
      <div className={styles.form_field}>Опыт в разработке:{experience}</div>
      <div className={styles.form_field}>Технологии/умения:{skills}</div>
      <div className={styles.form_field}>О себе:{aboutYou}</div>
      <div className={styles.form_field}>
        Уровень владения английским:{englishLevel}
      </div>
      <div className={styles.form_field}>Что хочешь изучать:{wantToLearn}</div>
      <div className={styles.form_field}>Ваша почта:{email}</div>
      <div className={styles.form_field}>Контакты:{contacts}</div>
    </div>
  );
};

export default React.memo(Document);
