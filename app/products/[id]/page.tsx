"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import Hero from "@/app/components/Hero";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Star from "@/app/components/icons/Star";
import EmptyStar from "@/app/components/icons/EmptyStar";

interface ProductDetailsProps {
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
  rating: number;
}
const ProductDetailPage = () => {
  const productUrl = usePathname();
  const [product, setProduct] = useState<ProductDetailsProps>({
    title: "",
    thumbnail: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    images: [],
    rating: 0,
  });
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://dummyjson.com${productUrl}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [productUrl]);
  const rating = Math.floor(product.rating);
  const emptyRating = 5 - rating;
  console.log(product);
  return (
    <div className={styles.root}>
      <Navbar />
      <Hero title="Product-Details" isContentNotVisible={true} />
      <div className={styles.product__detail__container}>
        <h1 className={styles.hero__para__text}>{product.title}</h1>
        <div className={styles.product__image__container}>
          <Image
            src={product.thumbnail}
            alt="product"
            width={375}
            height={375}
            className={styles.img}
          />
          <div className={styles.product__details}>
            <h2>{product.title}</h2>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              {" "}
              {new Array(rating).fill(<Star />).map((item) => {
                return item;
              })}
              {new Array(emptyRating).fill(<EmptyStar />).map((item) => {
                return item;
              })}
              <p style={{ paddingLeft: "10px" }}>
                (<span>{Math.floor(Math.random() * 100 + 5)}</span>)
              </p>
            </div>
            <p>{product.description}</p>
            <p>Price: Rs {product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
          </div>
        </div>
        <div className={styles.multi__image__container}>
          {product.images.map((image, i) => {
            return (
              <Image
                key={i}
                src={image}
                alt="small-image"
                width={100}
                height={100}
                className={styles.multi__images}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
