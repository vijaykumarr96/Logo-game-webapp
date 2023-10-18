"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import ProductCard from "../components/ProductCard";
import Dropdown from "../ui_components/Dropdown";
import { DropdownProps } from "../ui_components/Dropdown";

export interface ProductProps {
  id: number; //optional property
  brand: string;
  thumbnail: string;
  title: string;
}

const Products = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [filteredProducts, setFilteredProcts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const productsArray: ProductProps[] = data.products;
        setProducts(productsArray);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
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
        {products.length === 0
          ? "Loadiingg....."
          : !selectedItem || selectedItem === "All products"
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
