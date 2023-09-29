import { request } from "http";
import React, { useEffect} from "react";
import type { NextPage } from "next";
import Head from "next/head";
import GainersBlock from "components/GainersBlock";
import LosersBlock from "components/LosersBlock";
import VolumeBlock from "components/VolumeBlock";
import LiquidityBlock from "components/LiquidityBlock";
import SwapForm from "components/SwapInterface";
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { notify } from 'utils/notifications';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';



const Swap: NextPage = (props) => {
    const {wallet} = useWallet();
    const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com"
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
                <div id="integrated-terminal">
                    
                </div>
            </div>
        </div>
    );
};


export default Swap;
