"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import ProductCard from "../components/ProductCard";
import Dropdown from "../ui_components/Dropdown";

export interface ProductProps {
  id?: number; //optional property
  brand: string;
  thumbnail: string;
  title: string;
}

const Products = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        const productsArray: ProductProps[] = data.products;
        setProducts(productsArray);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className={styles.products__main__container}>
      <div className={styles.dropdown__container}>
        <p className={styles.view__all__btn}> &gt;&gt; All Product </p>
        <Dropdown />
      </div>
      <div className={styles.products__container}>
        {products.length === 0
          ? "Loadiingg....."
          : products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  brand={product.brand}
                  thumbnail={product.thumbnail}
                  title={product.title}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Products;
