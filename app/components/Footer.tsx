"use client";
import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import BottomtoTop from "./icons/BottomToTop";

const Footer = () => {
  const handleScrollToTop = () => {
    const scrollStep = -window.scrollY / (2000 / 15); //
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
  return (
    <>
      <div className={styles.footer__container}>
        <div className={styles.bottom__to__top} onClick={handleScrollToTop}>
          <BottomtoTop />
        </div>
        <div className={styles.logo__container}>
          <Image src={"logo.svg"} alt="logo" width={139} height={64} />
          <p className={styles.logo__para}>
            lOGO is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when
          </p>
        </div>
        <div className={styles.footer__links}>
          <h2>useful links</h2>
          <ul className={styles.footer__ul}>
            <li>Home</li>
            <li>Product</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className={styles.social__container}>
          <h2 className={styles.social__text}>Follow us on</h2>
          <div>
            <FaFacebook size={48} className={styles.facebookIcon} />
            <FaInstagram size={48} className={styles.instagramIcon} />
            <FaTwitter size={48} className={styles.twitterIcon} />
            <FaYoutube size={48} className={styles.youtubeIcon} />
          </div>
        </div>
      </div>
      <div className={styles.footer__text}>
        COPYRIGHT 2023 lOGO ALL RIGHT RESERVED
      </div>
    </>
  );
};

export default Footer;
