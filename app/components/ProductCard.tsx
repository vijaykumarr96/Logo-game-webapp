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
import Link from "next/link";

const ProductCard = ({
  id,
  brand,
  thumbnail,
  title,
  className,
}: ProductProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className={`${styles.card__container} ${className}`}>
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
      <p className={`${styles.card__item__name} ${styles.truncate__text}`}>
        {title}
      </p>
      <Button className={styles.card__button}>
        <div>
          <Link href={`/products/${id}`}>
            <p className={styles.card__button__para}>view</p>
          </Link>

          <ArrowDark className={styles.card__button__img} />
        </div>
      </Button>
    </div>
  );
};

export default ProductCard;
