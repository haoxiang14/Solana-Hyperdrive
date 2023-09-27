import { request } from "http";
import type { NextPage } from "next";
import Head from "next/head";
import AlphaBlock from "components/AlphaBlock";
const Swap: NextPage = (props) => {
    
    return (
        <div>
            <div className="justify-center items-center">
                <Head>
                    <title>AlphaSwap</title>
                </Head>
                <div className="flex">
                    <AlphaBlock title="Gainers"/>
                    <AlphaBlock title="Losers"/>
                    <AlphaBlock title="Volume"/>
                    <AlphaBlock title="Liquidity"/>
                </div>
            </div>
        </div>
    );
};


export default Swap;


{/* <div className="bg-gray-200 p-4 rounded-lg mr-4">
                        <h2 className="font-bold text-gray-600">Gainers</h2>
                        <p className="text-gray-600">This is a paragraph with grey background color.</p>
                        <p className="text-gray-600">This is another paragraph with grey background color.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg mx-4">
                        <h2 className="font-bold text-gray-600">Losers</h2>
                        <p className="text-gray-600">This is a paragraph with grey background color.</p>
                        <p className="text-gray-600">This is another paragraph with grey background color.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg mx-4">
                        <h2 className="font-bold text-gray-600">Volume</h2>
                        <p className="text-gray-600">This is a paragraph with grey background color.</p>
                        <p className="text-gray-600">This is another paragraph with grey background color.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg ml-4">
                        <h2 className="font-bold text-gray-600">Liquidity</h2>
                        <p className="text-gray-600">This is a paragraph with grey background color.</p>
                        <p className="text-gray-600">This is another paragraph with grey background color.</p>
                    </div> */}