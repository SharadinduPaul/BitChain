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
    const height = window.innerHeight;
    const width = window.innerWidth;
    const midWidth = width / 2;
    const midHeight = height / 2;
    let mouseMoveX = 0;
    let mouseMoveY = 0;

    HeroRef.current?.addEventListener("mousemove", (e) => {
      console.log(e);
      mouseMoveY = e.clientY - midHeight;
      mouseMoveX = e.clientX - midWidth;
      setMouseX(mouseMoveX);
      setMouseY(mouseMoveY);
    });
    return () =>
      HeroRef.current?.removeEventListener("mouseleave", () =>
        alert("I am retired")
      );
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
        <Image src={bitCoin} height={200} width={200} alt="Bitcoin" />
      </section>
      <h2>BlockChain & BitCoin</h2>
    </div>
  );
};
