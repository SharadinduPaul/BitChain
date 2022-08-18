import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { NextPage } from "next";
import styles from "./index.module.css";
import { Dropdown } from "../../components";
import { Layout } from "../../features";

const getCurrencies = async (arraySetter: any, objSetter: any) => {
  const data = await fetch("https://blockchain.info/ticker");
  const response = await data.json();
  console.log(response);
  objSetter(response);

  const resArr = [];
  for (const key in response) {
    resArr.push(key);
  }
  arraySetter(resArr);
  console.log(resArr);
};
const Currency: NextPage = () => {
  const [data, setData] = useState<any>({});
  const [dataArr, setDataArr] = useState([]);
  const [firstCurrency, setFirstCurrency] = useState("INR");
  const [lastCurrence, setLastCurrency] = useState("INR");

  const [firstAmount, setFirstAmount] = useState<number>(1);
  const [finalAmount, setFinalAmount] = useState<number>(1);
  useEffect(() => {
    getCurrencies(setDataArr, setData);
  }, []);

  const calculate = () => {
    const multiplier = data
      ? data[lastCurrence]?.last / data[firstCurrency]?.last
      : 1;
    let final: number = firstAmount * multiplier;
    setFinalAmount(final);
  };
  return (
    <Layout title="Currency exchange" className={styles.Exchange}>
      <h1>Currency converter</h1>
      <div>
        <section>
          <input
            type="number"
            value={firstAmount}
            onChange={(e) => setFirstAmount(Number(e.target.value))}
          />
          <Dropdown
            data={dataArr}
            value={firstCurrency}
            setter={setFirstCurrency}
          />
        </section>
        <button onClick={calculate}>Convert</button>
        <section>
          <input
            type="text"
            value={finalAmount.toFixed(2)}
            readOnly
            className={styles.readonly}
          />
          <Dropdown
            data={dataArr}
            value={lastCurrence}
            setter={setLastCurrency}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Currency;
