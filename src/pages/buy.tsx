import type { NextPage } from "next";
import Head from "next/head";
import { CSSProperties } from "react";

const Buy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AlphaSwap</title>
      </Head>
      <div className="max-w-full mx-[550px] my-8">
        <iframe
          style={{borderRadius: '4px', border: '1px solid #58585f', margin: 'auto', maxWidth: '420px' } as CSSProperties}
          src="https://buy.onramper.com/?defaultCrypto=SOL"
          height="550px"
          width="420px"
          title="Onramper widget"
          allow="accelerometer; autoplay; camera; gyroscope; payment">
        </iframe>
      </div>
    </div>
  );
};

export default Buy;