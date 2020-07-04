import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

const Document = () => {
  const formFields = useSelector((state) => state.form);

  const documentNames = React.useMemo(() => {
    return Object.keys(formFields).reduce((acc, value) => {
      acc[value] = formFields[value].value;
      return acc;
    }, {});
  }, [formFields]);

  const {
    name,
    birthDate,
    education,
    workPlace,
    experience,
    email,
    aboutYou,
  } = documentNames;

  return (
    <div className={styles.document}>
      <div className={styles.title_block}>
        <h1 className={styles.title}>Анкета стажёра в Salt & Pepper</h1>
      </div>
      <div className={styles.profile_image}></div>
      <div className={styles.form_field}>ФИО: {name}</div>
      <div className={styles.form_field}>Дата рождения: {birthDate} </div>
      <div className={styles.form_field}>Образование: {education} </div>
      <div className={styles.form_field}>Моё место работы: {workPlace} </div>
      <div className={styles.form_field}>Опыт в разработке: {experience}</div>
      <div className={styles.form_field}>Моя почта: {email}</div>
      <div className={styles.about_field}>Обо мне: {aboutYou}</div>
      <div className={styles.document_footer}>
        <p className={styles.sign}>Подпись: </p>
        <div className={styles.snp_logo} />
      </div>
    </div>
  );
};

export default React.memo(Document);
