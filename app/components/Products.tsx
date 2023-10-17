"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../page.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation } from "swiper/modules";
import "../globals.css";

export interface ProductProps {
  id: number;
  brand: string;
  thumbnail: string;
  title: string;
  className?: string; //optional property
}

const Products = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        // console.log(data);
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
      <div className={styles.swiper__container}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {" "}
          <div>
            {products.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    id={product.id}
                    brand={product.brand}
                    thumbnail={product.thumbnail}
                    title={product.title}
                    className={styles.swiper__cards}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <h1
        className={styles.header}
        style={{ paddingBottom: "20px", WebkitTextStroke: "1px #e2e53c" }}
      >
        Products
      </h1>
      <div className={styles.products__container}>
        {products.length === 0
          ? "Loadiingg....."
          : products.map((product) => {
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
