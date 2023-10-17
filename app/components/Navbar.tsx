"use client";
import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navbar}>
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={139} height={64} />
      </Link>
      <div className={styles.listItems}>
        <Link href={`/`}>
          <p className={`${pathname === "/" ? styles.navbtn__active : ""}`}>
            Home
          </p>
        </Link>
        <Link href={`/products`}>
          <p
            className={`${
              pathname === "/products" ? styles.navbtn__active : ""
            }`}
          >
            Products
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
