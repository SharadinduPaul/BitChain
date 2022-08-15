import type { NextPage } from 'next'
import { Sidebar } from '../components'
import { Layout } from '../features'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout title={'BitChain by Sharadindu Paul'} className={styles.HomePage}>
      <Sidebar />
    </Layout>
  )
}
export default Home
