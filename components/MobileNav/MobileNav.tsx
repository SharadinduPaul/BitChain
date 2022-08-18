import React, { useContext } from "react";
import styles from "./MobileNav.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsArrowUpCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { MainContext } from "../../common/Context/MainContext";

export const MobileNav = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const { setActive } = useContext(MainContext);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className={styles.MobileNav}>
        <button onClick={() => setActive(true)}>
          <HiMenuAlt2 fontSize={"1.8rem"} />
        </button>
        <button onClick={ScrollToTop}>
          <BsArrowUpCircle fontSize={"1.8rem"} />
        </button>
      </div>
    </IconContext.Provider>
  );
};
