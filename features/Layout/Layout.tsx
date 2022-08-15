import Head from 'next/head'
import React from 'react'
import { PreLoader } from "../../components";
import styles from "./Layout.module.css";

interface Layout {
  title?: string;
  className?: string;
  children: any;
}

export const Layout = ({ title, className, children }: Layout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          key={"font-main"}
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        ></link>
        <link
          key={"font-first"}
          href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap"
          rel="stylesheet"
        ></link>
        <link
          key={"fonto-second"}
          href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <PreLoader />
      <div className={className}>{children}</div>
    </>
  );
};
