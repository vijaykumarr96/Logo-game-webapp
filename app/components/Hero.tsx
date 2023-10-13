import React from "react";
import styles from "../page.module.css";
const Hero = () => {
  return (
    <div className={styles.hero__image}>
      <h1 className={styles.header}>Logo Electronics</h1>
      <div className={styles.hero__para}>
        <p className={styles.bg__line}></p>
        <p className={styles.hero__para__text}>The techies you love</p>
        <p className={styles.bg__line}></p>
      </div>
    </div>
  );
};

export default Hero;
