import type { NextPage } from 'next'
import { Sidebar } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  )
}

export default Home
