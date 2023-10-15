import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import styles from "../page.module.css";
import Products from "./Products";
const Index = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Hero title="Products" isContentNotVisible={true} />
      <Products />
    </div>
  );
};

export default Index;
