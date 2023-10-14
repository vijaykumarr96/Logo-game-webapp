import React from "react";
import styles from "../page.module.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className={styles.products__main__container}>
      <h1
        className={styles.header}
        style={{ paddingBottom: "20px", WebkitTextStroke: "1px #e2e53c" }}
      >
        Products
      </h1>
      <div className={styles.products__container}>
        {Array(10)
          .fill("")
          .map((items) => {
            return <ProductCard />;
          })}
      </div>
    </div>
  );
};

export default Products;
