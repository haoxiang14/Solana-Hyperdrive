import type { NextPage } from "next";
import Head from "next/head";
import TokenMenu from "components/TokenMenu";
interface Token {


}

const Wallet: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>AlphaSwap</title>
      </Head>
      <div className="items-center">
        <TokenMenu/>
      </div>
    </div>

  );
};

export default Wallet;