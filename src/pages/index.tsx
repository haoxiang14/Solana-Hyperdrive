import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>AlphaSwap</title>
      </Head>
      <div className="space-y-10">
            <div className="relative flex justify-center px-14 lg:py-16">
                <div className="max-w-7xl space-y-10">
                    <h1 className="font-[Ultra] text-4xl md:text-7xl">
                        Fomo? Fud? BTFD? We Got You Covered!
                    </h1>
                    <p className="font-mono text-lg md:text-2xl max-w-3xl">
                        AlphaSwap is a decentralized exchange that allows you to trade crypto assets on the Solana blockchain. 
                        We provide you with the tools to make informed decisions about your investments.
                    </p>
                    <p className="font-mono text-lg md:text-2xl max-w-3xl">
                      On/Off Ramp
                    </p>
                    <p className="font-mono text-lg md:text-2xl max-w-3xl">
                      Swap
                    </p>
                    <p className="font-mono text-lg md:text-2xl max-w-3xl">
                      Portfolio
                    </p>

                </div>
                {/* image tag here  width="400"
                    height="400"
                    className="hidden lg:block absolute right-28 -bottom-16" */}
              </div>
       </div>
    </div>

  );
};

export default Home;
