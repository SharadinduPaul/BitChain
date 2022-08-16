import type { NextPage } from 'next'
import { Sidebar, Hero, ContentSection } from "../components";
import styles from "../styles/Home.module.css";
import { Layout } from "../features";
import { data } from "../data/Home.data";
import { MainContext } from "../common/Context/MainContext";
import { useContext, useRef } from "react";

const Home: NextPage = () => {
  return (
    <Layout title={"BitChain by Sharadindu Paul"} className={styles.HomePage}>
      <Hero />
      <div className={styles.HomepageContainer}>
        <Sidebar />
        <main className={styles.HomeContent}>
          {data?.map((item, index) => {
            return <ContentSection item={item} index={index} key={index} />;
          })}
        </main>
      </div>
    </Layout>
  );
}
export default Home
