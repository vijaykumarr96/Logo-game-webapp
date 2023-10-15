import Navbar from "@/app/components/Navbar";
import React from "react";
import styles from "@/app/page.module.css";
import Hero from "@/app/components/Hero";

const ProductDetailPage = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Hero title="Product Details" isContentNotVisible={true} />
    </div>
  );
};

export default ProductDetailPage;
