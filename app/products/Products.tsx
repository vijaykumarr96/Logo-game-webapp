"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import ProductCard from "../components/ProductCard";
import Dropdown from "../ui_components/Dropdown";
import { DropdownProps } from "../ui_components/Dropdown";
import useFetchProducts from "../utils/hooks/useFetch";

export interface ProductProps {
  id: number; //optional property
  brand: string;
  thumbnail: string;
  title: string;
}
const url = "https://dummyjson.com/products";
const Products = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [filteredProducts, setFilteredProcts] = useState<ProductProps[]>([]);
  const { products, error, loading } = useFetchProducts(url);

  useEffect(() => {
    async function fetchProductsCategory() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${selectedItem}`
        );
        const data = await response.json();
        const productsArray: ProductProps[] = data.products;
        setFilteredProcts(productsArray);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsCategory();
  }, [selectedItem]);
  if (loading) {
    return <div>Loading Products.....</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className={styles.products__main__container}>
      <div className={styles.dropdown__container}>
        <p className={styles.all__product__text}>
          {" "}
          &gt;&gt; {selectedItem || "All Products"}{" "}
        </p>
        <Dropdown
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <div className={styles.products__container}>
        {products && (!selectedItem || selectedItem === "All products")
          ? products.map((product) => {
              return (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  brand={product.brand}
                  thumbnail={product.thumbnail}
                  title={product.title}
                />
              );
            })
          : filteredProducts.map((product) => {
              return (
                <ProductCard
                  id={product.id}
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
