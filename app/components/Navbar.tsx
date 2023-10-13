import React from "react";
import styles from "../page.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image src={"logo.svg"} alt="logo" width={139} height={64} />
      <div className={styles.listItems}>
        <p>Home</p>
        <p>Products</p>
      </div>
    </div>
  );
};

export default Navbar;
