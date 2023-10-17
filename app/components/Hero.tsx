"use client";
import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import Arrow from "./icons/Arrow";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeroProps {
  title: string;
  isContentNotVisible: Boolean;
}
const Hero = ({ title, isContentNotVisible }: HeroProps) => {
  const [visible, setVisible] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [visible]);
  return (
    <div
      className={`${
        path.includes("/products/")
          ? styles.hero__image__productdetail
          : styles.hero__image
      } `}
    >
      <h1 className={styles.header}>
        {title.split("").map((word, index) => (
          <span
            key={index}
            className={`${styles.hero__word} ${
              visible ? `${styles.visible}` : ""
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {word}
          </span>
        ))}
      </h1>
      <div
        className={`${styles.hero__para} ${
          isContentNotVisible ? styles.not__visible : ""
        }`}
      >
        <p className={styles.bg__line}></p>
        <p className={styles.hero__para__text}>The techies you love</p>
        <p className={styles.bg__line}></p>
      </div>
      <div
        className={`${styles.flex__container} ${
          isContentNotVisible ? styles.not__visible : ""
        }`}
      >
        <p className={styles.view__all__btn}>view all products</p>
        <Link href={"/products"}>
          <Arrow />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
