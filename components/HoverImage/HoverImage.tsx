import React from "react";
import Image from "next/image";

interface HoverImageProps {
  src: string;
  title?: string;
  className?: string;
  alt: string;
}

export const HoverImage = ({ src, title, className, alt }: HoverImageProps) => {
  return (
    <div className={` ${className}`}>
      <h4>{title} something</h4>
      <Image layout="fill" src={src} alt={alt} />
    </div>
  );
};
