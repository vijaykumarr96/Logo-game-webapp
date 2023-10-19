"use client";
import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import Arrow from "./icons/Arrow";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui_components/Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Hamburger from "./icons/Hamburger";
import HamburgerActive from "./icons/HamburgerActive";
import Navbar from "./Navbar";

export interface HeroProps {
  title: string;
  isContentNotVisible: Boolean;
}
const Hero = ({ title, isContentNotVisible }: HeroProps) => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

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

      <Button
        className={`${styles.flex__container} ${
          isContentNotVisible ? styles.not__visible : ""
        }`}
      >
        <div>
          <Link href={"/products"}>
            <p className={styles.view__all__btn}>view all products</p>
            <div className={styles.flex__container__img}>
              <Arrow />
            </div>
          </Link>
        </div>
      </Button>

      <div className={styles.hamburger__icon}>
        <Hamburger handleClick={() => setIsOpen(!isOpen)} />
      </div>
      <AnimatePresence>
        {!isOpen && (
          <motion.div className={styles.hamburger__menu}>
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                type: "spring",
                bounce: 0.3,
              }}
              exit={{ x: 300, opacity: 0 }}
            >
              <motion.div
                initial={{
                  x: -200,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  type: "spring",
                  bounce: 0.3,
                }}
                exit={{ x: 300, opacity: 0 }}
                className={styles.active__container}
              >
                <div className={styles.hamburger__close_icon}>
                  <HamburgerActive handleClick={() => setIsOpen(!isOpen)} />
                </div>

                {/* <Navbar /> */}
                <div className={styles.active__container}>
                  <Link href={"/"}>
                    <Image
                      src={"/logo.svg"}
                      alt="logo"
                      width={139}
                      height={64}
                    />
                  </Link>
                  <div
                    className={styles.listItems}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "20px",
                      padding: "10px",
                    }}
                  >
                    <Link href={`/`}>
                      <p className={styles.navbtn__active}>Home</p>
                    </Link>
                    <Link href={`/products`}>
                      <p className={styles.navbtn__active}>Products</p>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
