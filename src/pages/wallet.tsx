import type { NextPage } from "next";
import Head from "next/head";
import TokenMenu from "components/TokenMenu";

const Wallet: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>AlphaSwap</title>
      </Head>
      <div className="max-w-full mx-[500px] my-8">
        <TokenMenu />
      </div>
    </div>
   
  );
};

export default Wallet;
