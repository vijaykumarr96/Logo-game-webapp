import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import styles from "../page.module.css";
const Index = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Hero title="Products" isContentNotVisible={true} />
    </div>
  );
};

export default Index;
