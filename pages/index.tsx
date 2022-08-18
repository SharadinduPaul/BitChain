import type { NextPage } from 'next'
import { Sidebar, Hero, ContentSection, MobileNav } from "../components";
import styles from "../styles/Home.module.css";
import { Layout } from "../features";
import { data } from "../data/Home.data";

const Home: NextPage = () => {
  return (
    <Layout title={"BitChain by Sharadindu Paul"} className={styles.HomePage}>
      <Hero />
      <div className={styles.HomepageContainer}>
        <Sidebar />
        <main className={styles.HomeContent}>
          <MobileNav />
          {data?.map((item, index) => {
            return <ContentSection item={item} index={index} key={index} />;
          })}
        </main>
      </div>
    </Layout>
  );
};
export default Home
