import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import bitCoin from "../../assets/bitCoin.png";

export const Hero = () => {
  const HeroRef = useRef<HTMLDivElement>();
  useEffect(() => {}, []);
  return (
    <div className={styles.Hero}>
      <span className={styles.HeroTriangle} />
      <section className={styles.bitCoinImage}>
        <Image src={bitCoin} height={200} width={200} />
      </section>
      <h2>BITCOIN</h2>
    </div>
  );
};
