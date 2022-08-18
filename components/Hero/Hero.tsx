import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import bitCoin from "../../assets/bitcoin.png";
import bg from "../../assets/blockChainBG.jpg";

export const Hero = () => {
  const HeroRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const dampingFactor = 0.05;
  useEffect(() => {
    let mouseMoveX = 0;
    let mouseMoveY = 0;

    HeroRef.current?.addEventListener("mousemove", (e) => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      const midWidth = width / 2;
      const midHeight = height / 2;
      if (width > 1100) {
        mouseMoveY = e.clientY - midHeight;
        mouseMoveX = e.clientX - midWidth;
        setMouseX(mouseMoveX);
        setMouseY(mouseMoveY);
      }
    });
    HeroRef.current?.addEventListener("mouseout", () => {
      setMouseX(0);
      setMouseY(0);
    });
    return () => HeroRef.current?.removeEventListener("mouseleave", () => {});
  }, []);
  return (
    <div className={styles.Hero} ref={HeroRef}>
      <span className={styles.HeroTriangle} />
      <section
        className={styles.bitCoinImage}
        style={{
          transform: `rotateY(${mouseX * dampingFactor}deg) rotateX(${
            -mouseY * dampingFactor
          }deg)`,
        }}
      >
        <Image src={bitCoin} layout="fill" alt="Bitcoin" />
      </section>
      <h2>BlockChain & BitCoin</h2>
    </div>
  );
};
