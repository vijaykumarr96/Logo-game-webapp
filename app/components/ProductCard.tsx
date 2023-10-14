import React from "react";
import styles from "../page.module.css";
import Bookmark from "./icons/Bookmark";
import Image from "next/image";
import Arrow from "./icons/Arrow";
import ArrowDark from "./icons/ArrowDark";

const ProductCard = () => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__header}>
        <p className={styles.card__header__text}>RUBI - 128K</p>
        <Bookmark />
      </div>
      <div className={styles.card__image}>
        <Image
          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          alt="card-item"
          width={311}
          height={189}
        />
      </div>
      <p className={styles.card__item__name}>Headphone-128K</p>
      <button className={styles.card__button}>
        <p className={styles.card__button__para}>view</p>
        <ArrowDark className={styles.card__button__img} />
      </button>
    </div>
  );
};

export default ProductCard;
