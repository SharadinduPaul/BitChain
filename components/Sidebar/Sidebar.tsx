import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import { data } from "../../data/Home.data";
import { MainContext } from "../../common/Context/MainContext";
import type { Data } from "../../data/Home.data";

interface SidebarOptionProps {
  id: number;
  option: Data;
}
export const Sidebar = () => {
  const { selected, setSelected } = useContext(MainContext);

  function handleClick(id: number) {
    setSelected(id);
  }

  const SidebarOption = ({ option, id }: SidebarOptionProps) => {
    return (
      <div
        className={`${styles.Option} ${id === selected && styles.Selected}`}
        onClick={() => handleClick(id)}
      >
        {option.title}
      </div>
    );
  };

  return (
    <div className={styles.Sidebar}>
      <h2>Content</h2>
      {data.map((option, index) => {
        return <SidebarOption option={option} id={index + 1} key={index} />;
      })}
    </div>
  );
};
