import React, { useContext, useEffect, useRef } from "react";
import { MainContext } from "../../common/Context/MainContext";
import type { Data } from "../../data/Home.data";
import { HoverImage } from "../../components";
import styles from "./ContentSection.module.css";

interface ContentSectionProps {
  item: Data;
  index: number;
}
export const ContentSection = ({ item, index }: ContentSectionProps) => {
  const { selected, setSelected } = useContext(MainContext);
  const handleIntersection = () => {
    setSelected(index + 1);
  };
  const options = {
    rootMargin: "0px",
    threshold: 0.6,
  };
  const contentRef = useRef(null!);
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(contentRef.current);
  }, []);
  return (
    <div ref={contentRef} className={styles.ContentSection} id={`${item.id}`}>
      <h3>{item?.title}</h3>
      {item?.paragraphs?.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
};
