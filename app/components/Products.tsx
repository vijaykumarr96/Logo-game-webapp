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
import Link from "next/link";
import Arrow from "./icons/Arrow";
import Button from "../ui_components/Button";
import useFetchProducts from "../utils/hooks/useFetch";

export interface ProductProps {
  id: number;
  brand: string;
  thumbnail: string;
  title: string;
  className?: string; //optional property
  titleClassName?: string;
  isVisible?: Boolean;
}

const url = "https://dummyjson.com/products/category/smartphones";
const Products = () => {
  const { products, error, loading } = useFetchProducts(url);

  if (loading) {
    return <div>Loading Products.....</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          className="mySwiper"
        >
          {" "}
          <div>
            {products &&
              products.map((product) => {
                return (
                  <SwiperSlide
                    key={product.id}
                    className={`${styles.swiper__btn}`}
                  >
                    <ProductCard
                      id={product.id}
                      brand={product.brand}
                      thumbnail={product.thumbnail}
                      title={product.title}
                      className={`${styles.swiper__cards} `}
                      isVisible={false}
                      titleClassName={styles.small__text}
                    />
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
      </div>
      <h1
        className={styles.header}
        style={{
          paddingBottom: "20px",
          WebkitTextStroke: "1px #e2e53c",
          paddingTop: "200px",
        }}
      >
        Products
      </h1>
      <div className={styles.products__container}>
        {products &&
          products.map((product) => {
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
        <div className={` ${styles.product__button} `}>
          <Button className={`${styles.flex__container}`}>
            <div>
              <Link href={"/products"}>
                <p className={styles.view__all__btn}>view all products</p>
                <div className={styles.flex__container__img}>
                  <Arrow />
                </div>
              </Link>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
