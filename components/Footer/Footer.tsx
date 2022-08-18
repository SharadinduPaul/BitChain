import React from "react";
import styles from "./Footer.module.css";
import whiteBG from "../../assets/whiteBG.jpg";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <span />
      <div>
        <h2>Other features</h2>
        <Link href={"/currency-exchange-calculator"}>
          <h4>Currency exchange calculator</h4>
        </Link>
        <h4>A note from the developer</h4>
      </div>
      <section>Made by Sharadindu Paul</section>
    </div>
  );
};
