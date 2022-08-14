import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { MainContext } from '../common/Context/MainContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <MainContext.Provider value={{}}> <Component {...pageProps} /></MainContext.Provider>
}

export default MyApp
