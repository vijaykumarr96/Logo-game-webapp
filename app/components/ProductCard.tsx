"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Bookmark from "./icons/Bookmark";
import Image from "next/image";
import Arrow from "./icons/Arrow";
import ArrowDark from "./icons/ArrowDark";
import Button from "../ui_components/Button";
import FilledBookmark from "./icons/FilledBookmark";
import { ProductProps } from "./Products";

const ProductCard = ({ brand, thumbnail, title }: ProductProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className={styles.card__container}>
      <div className={styles.card__header}>
        <p className={styles.card__header__text}>{brand}</p>
        <div style={{ cursor: "pointer" }} onClick={() => setLiked(!liked)}>
          {liked ? <FilledBookmark /> : <Bookmark />}
        </div>
      </div>
      <div className={styles.card__image}>
        <Image src={thumbnail} alt="card-item" width={311} height={189} />
        {/* <div className={!liked ? styles.heart__animation : ""} id="heart">❤️</div> */}
      </div>
      <p className={styles.card__item__name}>{title}</p>
      <Button className={styles.card__button}>
        <div>
          <p className={styles.card__button__para}>view</p>
          <ArrowDark className={styles.card__button__img} />
        </div>
      </Button>
    </div>
  );
};

export default ProductCard;
