import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { MainContext } from '../common/Context/MainContext'
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [selected, setSelected] = useState(1);
  const [active, setActive] = useState(false);
  return (
    <MainContext.Provider value={{ selected, setSelected, active, setActive }}>
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}

export default MyApp
