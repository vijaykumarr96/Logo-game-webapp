'use client'
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import ProductCard from "./ProductCard";

interface Product{
  id: number;
  brand: string;
  thumbnail: string;
}

const Products = () => {
  const [products,setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
    try{
      const response = await fetch("https://dummyjson.com/products");
       const data = await response.json();
        const productsArray:Product[] = data.products;
       setProducts(productsArray)
      }catch(error){
        console.log(error)
      }
    }
    fetchProducts();
  },[])
  return (
    <div className={styles.products__main__container}>
      <h1
        className={styles.header}
        style={{ paddingBottom: "20px", WebkitTextStroke: "1px #e2e53c" }}
      >
        Products 
      </h1>
      <div className={styles.products__container}>
          {products.length === 0 ?  "Loadiingg....." : (products.map(product  => {
            return <ProductCard key={product.id}  brand={product.brand} thumbnail={product.thumbnail}/>
          }))}
      </div>
    </div>
  );
};

export default Products;
