import React from "react";
import styles from './LogoText.module.scss';

const LogoText = () => {
  return (
    <h1 className={styles.logo}>
      <span className={styles.letra}>C</span>
      <span className={styles.letra}>h</span>
      <span className={styles.letra}>e</span>
      <span className={styles.letra}>C</span>
      <span className={styles.letra}>h</span>
      <span className={styles.letra}>e</span>
      <span className={styles.letra}>f</span>
    </h1>
  );
};

export default LogoText;
