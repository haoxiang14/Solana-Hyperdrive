import { request } from "http";
import type { NextPage } from "next";
import Head from "next/head";
import GainersBlock from "components/GainersBlock";
import LosersBlock from "components/LosersBlock";

const Swap: NextPage = (props) => {
    
    return (
        <div>
            <div className="justify-center items-center">
                <Head>
                    <title>AlphaSwap</title>
                </Head>
                <div className="flex">
                    <GainersBlock/>
                    <LosersBlock/>
                </div>
            </div>
        </div>
    );
};


export default Swap;
