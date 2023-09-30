import type { NextPage } from "next";
import Head from "next/head";
import TokenMenu from "components/TokenMenu";

const Wallet: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>AlphaSwap</title>
      </Head>
      <div>
        <TokenMenu />
      </div>
    </div>
   
  );
};

export default Wallet;

// className="flex flex-col items-center justify-start bg-gray-800"
// className="w-full max-w-md p-5"
