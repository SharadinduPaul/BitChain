import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { data as options } from "../../data/Sidebar.data";

interface SidebarOptionProps {
  id: number;
  option: {
    text: string;
    href: string;
  };
}
export const Sidebar = () => {
  const [selected, setSelected] = useState<number>(1);

  function handleClick(id: number) {
    setSelected(id);
  }

  const SidebarOption = ({ option, id }: SidebarOptionProps) => {
    return (
      <div
        className={`${styles.Option} ${id === selected && styles.Selected}`}
        onClick={() => handleClick(id)}
      >
        {option.text}
      </div>
    );
  };

  return (
    <div className={styles.Sidebar}>
      <h2>Content</h2>
      {options.map((option, index) => {
        return <SidebarOption option={option} id={index + 1} key={index} />;
      })}
    </div>
  );
};
