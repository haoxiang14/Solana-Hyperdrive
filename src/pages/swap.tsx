import { request } from "http";
import type { NextPage } from "next";
import Head from "next/head";

const Swap: NextPage = (props) => {
  const geckoAPI = "https://api.geckoterminal.com/api/v2/networks/solana/pools" 
  
  fetch(geckoAPI)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data[0].attributes.price_change_percentage.h24);
      // const priceChangeH24 = parseFloat(data.attributes.price_change_percentage.h24)
      // const sortedData = {gainers: [], losers: []}
      // if (!isNaN(priceChangeH24)) {
      //   if (priceChangeH24 > 0) {
      //     sortedData.gainers.push(data);
      //   } else if (priceChangeH24 < 0) {
      //     sortedData.losers.push(data);
      //   }
      // }
      
      // console.log(JSON.stringify(sortedData, null, 2));
    });
  return (
    <div>
      <Head>
        <title>AlphaSwap</title>
      </Head>
    </div>
  );
};

export default Swap;