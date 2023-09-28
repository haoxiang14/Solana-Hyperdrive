import { request } from "http";
import type { NextPage } from "next";
import Head from "next/head";
import GainersBlock from "components/GainersBlock";
import LosersBlock from "components/LosersBlock";
import VolumeBlock from "components/VolumeBlock";
import LiquidityBlock from "components/LiquidityBlock";

const Swap: NextPage = (props) => {
    
    return (
        <div>
            <div className="justify-center items-center">
                <Head>
                    <title>AlphaSwap</title>
                </Head>
                <div className="flex mx-12">
                    <GainersBlock/>
                    <LosersBlock/>
                    <VolumeBlock/>
                    <LiquidityBlock/>
                </div>
            </div>
        </div>
    );
};


export default Swap;
