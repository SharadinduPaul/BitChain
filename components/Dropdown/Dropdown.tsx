import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
interface DropdownProps {
  data: string[];
  value: string;
  setter: (input: string) => void;
}

export const Dropdown = ({ data, value, setter }: DropdownProps) => {
  const [active, setActive] = useState(false);

  const HandleClick = (text: string) => {
    setter(text);
    setActive(false);
  };

  const Option = ({ text }: { text: string }) => {
    return (
      <span className={styles.Option} onClick={() => HandleClick(text)}>
        {text}
      </span>
    );
  };
  return (
    <div className={styles.Dropdown}>
      <text onClick={() => setActive((prev) => !prev)}>
        {value}
        <IoMdArrowDropdown fontSize={"1.5rem"} />
      </text>
      {active && (
        <section className={styles.OptionContainer}>
          {data.map((item, index) => (
            <Option text={item} key={index} />
          ))}
        </section>
      )}
    </div>
  );
};
