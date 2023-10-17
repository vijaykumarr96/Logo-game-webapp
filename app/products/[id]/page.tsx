"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import Hero from "@/app/components/Hero";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface ProductDetailsProps {
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  discountPercentage: number;
}
const ProductDetailPage = () => {
  const productUrl = usePathname();
  const [product, setProduct] = useState<ProductDetailsProps>({
    title: "",
    thumbnail: "",
    description: "",
    price: 0,
    discountPercentage: 0,
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
  return (
    <div className={styles.root}>
      <Navbar />
      <Hero title="Product-Details" isContentNotVisible={true} />
      <div className={styles.product__detail__container}>
        <h1>{product.title}</h1>
        <div className={styles.product__image__container}>
          <Image
            src={product.thumbnail}
            alt="product"
            width={375}
            height={375}
          />
          <div className={styles.product__details}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: Rs {product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
