import type { NextPage } from "next";
import Head from "next/head";
//import alpha.png from "public/alpha.png";
import Image from 'next/image'

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>AlphaSwap</title>
      </Head>
      <div className="space-y-10 min-w-[1550px]">
            <div className="relative flex justify-center px-14 lg:py-16">
                <div className="max-w-7xl space-y-10">
                    <h1 className="font-[Ultra] text-4xl md:text-7xl">
                        Fomo? Fud? BTFD? We Got You Covered!
                    </h1>
                    <div className="flex space-x-4 items-center justify-left">
                      <p className="font-mono text-lg md:text-2xl max-w-3xl">
                          AlphaSwap is a decentralized exchange that allows you to trade crypto assets on the Solana blockchain. 
                          We provide you with the tools to make informed decisions about your investments.
                      </p>
                      <Image src="/doge.png" width="400" height="400" alt={""}/>
                    </div>
                    <div className="divider"></div> 
                    <div className="flex">
                      <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                          <h2 className="card-title">On/Off Ramp</h2>
                          <p> Easily buy & sell Solana with your preffered currencies (MYR)</p>
                        </div>
                        <figure><img src="/onramp.png" width="200" height="200" alt="Solana" /></figure>
                      </div>
        
                      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-10">
                        <figure><img src="/portfolio.png" width="300" height="300" alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title"> Portfolio </h2>
                          <p className="mt-4 text-base"> Track your Solana Portfolio easily </p>
                        </div>
                      </div>

                      <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                          <h2 className="card-title">Swap</h2>
                          <p> Swap to any other cryptocurrencies using Solana </p>
                        </div>
                        <figure><img src="/sol.png" width="200" height="200" alt="Solana" /></figure>
                      </div>
                    </div>

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
