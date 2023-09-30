import { request } from "http";
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import GainersBlock from "components/GainersBlock";
import LosersBlock from "components/LosersBlock";
import VolumeBlock from "components/VolumeBlock";
import LiquidityBlock from "components/LiquidityBlock";
import SwapInterface from "components/SwapInterface";
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { notify } from 'utils/notifications';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';



const Swap: NextPage = (props) => {
    const [selectedTokens, setSelectedTokens] = useState([])
    const {wallet} = useWallet();
    const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com"
    return (
        <div>
            <div className="justify-center items-center">
                <Head>
                    <title>AlphaSwap</title>
                </Head>
                <div className="flex mx-12">
                    <GainersBlock setSelectedTokens={setSelectedTokens}/>
                    <LosersBlock setSelectedTokens={setSelectedTokens}/>
                    <VolumeBlock setSelectedTokens={setSelectedTokens}/>
                    <LiquidityBlock setSelectedTokens={setSelectedTokens}/>
                </div>
                <div className="w-full mb-10">
                    <SwapInterface selectedTokens={selectedTokens} setSelectedTokens={setSelectedTokens}/>
                </div>
            </div>
        </div>
    );
};


export default Swap;
