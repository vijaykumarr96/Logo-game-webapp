import React from "react";
import styles from "../page.module.css";
import Bookmark from "./icons/Bookmark";
import Image from "next/image";
import Arrow from "./icons/Arrow";
import ArrowDark from "./icons/ArrowDark";
import Button from "../ui_components/Button";
interface Product{
  brand: string;
  thumbnail: string;
}
const ProductCard = ({brand,thumbnail}:Product) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__header}>
        <p className={styles.card__header__text}>{brand}</p>
        <Bookmark />
      </div>
      <div className={styles.card__image}>
        <Image
          src={thumbnail}
          alt="card-item"
          width={311}
          height={189}
        />
      </div>
      <p className={styles.card__item__name}>Headphone-128K</p>
      <Button className={styles.card__button}>
        <div >
        <p className={styles.card__button__para}>view</p>
        <ArrowDark className={styles.card__button__img} />
        </div>
      </Button>
    </div>
  );
};

export default ProductCard;
