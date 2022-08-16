import type { NextPage } from 'next'
import { Sidebar, Hero } from "../components";
import styles from '../styles/Home.module.css'
import { Layout } from "../features";
import { data } from "../data/Home.data";

const Home: NextPage = () => {
  return (
    <Layout title={"BitChain by Sharadindu Paul"} className={styles.HomePage}>
      <Hero />
      <div className={styles.HomepageContainer}>
        <Sidebar />
        <main>
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item?.title}</h3>
                {item?.paragraphs?.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            );
          })}
        </main>
      </div>
    </Layout>
  );
}
export default Home
