import { set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import PieChartComponent from './Chart';


interface Tab {
  label: string;
  content: string;
}

interface Token {
    tokenAddress: string;
    tokenAmount: {
      amount: string;
      decimals: number;
      uiAmount: number;
      uiAmountString: string;
    };
    tokenAccount: string;
    tokenName: string;
    tokenIcon: string;
    rentEpoch: number;
    lamports: number;
    tokenSymbol: string;
    price?: number;
}


const TokenMenu = () => {

    const { publicKey } = useWallet();
    const PublicAddress = publicKey?.toBase58();
    const [solBalance, setSolBalance] = useState<number | null>(null); // Initialize to null
    const [tokenBalances, setTokenBalances] = useState<Token[]>([]);
    const [updatedTokenBalances, setUpdatedTokenBalances] = useState<Token[]>([]);
    const [solPrice, setSolPrice] = useState<number | null>(null);


    async function getBalance() {
        try {
        const connection = new Connection("https://rpc.helius.xyz/?api-key=afe7e33e-65fd-4fa4-806f-99f2b8909722");
        const publicKey = new PublicKey(PublicAddress!);
        const balance = await connection.getBalance(publicKey);
        const solBalance = balance / LAMPORTS_PER_SOL;
        setSolBalance(solBalance); // Update state with solBalance
        } catch (error) {
        console.error("Error getting balance:", error);
        }
    }
    
    async function getTokens(){
        try {
            if (PublicAddress) {
                const response = await fetch('https://public-api.solscan.io/account/tokens?account='+PublicAddress);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const data = await response.json();
                  if (data) {
                    setTokenBalances(data);
                  }
                }
              } catch (error) {
                console.error("Error getting token balances:", error);
              }
            }

    async function fetchSolPrice() {
        try {
            const solPriceResponse = await fetch('https://price.jup.ag/v4/price?ids=SOL');
            if (!solPriceResponse.ok) {
            throw new Error('Failed to fetch SOL price.');
            }
            const solPriceData = await solPriceResponse.json();
            const solPrice = solPriceData?.data?.SOL?.price;
            setSolPrice(solPrice);
        } catch (error) {
            console.error('Error fetching SOL price:', error);
            throw error;
        }
    }

    
    async function fetchTokenPrices(tokenSymbols) {
        try {
            const tokenPricesResponse = await fetch(`https://price.jup.ag/v4/price?ids=${tokenSymbols.join(',')}`);
            if (!tokenPricesResponse.ok) {
            throw new Error('Failed to fetch token prices.');
            }
            const tokenPricesData = await tokenPricesResponse.json();
            // console.log('tokenPricesData', tokenPricesData);
            return tokenPricesData;
        } catch (error) {
            console.error('Error fetching token prices:', error);
            throw error;
        }
        }
                      

        useEffect(() => {
            if (publicKey) {
              const fetchData = async () => {
                try {
                  await getBalance();
                  await getTokens();
                  await fetchSolPrice();
                  // Extract unique token symbols from tokenBalances
                  const tokenSymbols = Array.from(new Set(tokenBalances.map(token => token.tokenSymbol)));
                //   console.log('tokenSymbols', tokenSymbols);
          
                  // Fetch token prices based on unique token symbols
                  const tokenPricesData = await fetchTokenPrices(tokenSymbols);
                  
                //   console.log('Type of tokenPricesData:', typeof tokenPricesData);
                //   console.log('tokenPricesData', tokenPricesData);
  
          
                  // Update tokenBalances with prices
                  const updatedTokenBalances = tokenBalances.map(token => {
                    const tokenSymbol = token.tokenSymbol;
                    const priceData = tokenPricesData.data[tokenSymbol]?.price;
                    // console.log('priceData', priceData)
                    return {
                      ...token,
                      price: priceData !== undefined ? priceData : null,
                    };
                  });
                  setUpdatedTokenBalances(updatedTokenBalances);
                //   console.log('updatedTokenBalances', updatedTokenBalances);
                } catch (error) {
                //   console.error('Error fetching data:', error);
                }
              };
          
              fetchData();
            }
          }, [publicKey]);
          
  

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index_tab: number) => {
    setActiveTab(index_tab);
  };

  // Sample data for the token
 
  return (
    <div>
      <PieChartComponent solanaPrice={solPrice} solanaAmount={solBalance} tokenPrices={tokenBalances} tokenAmounts={tokenBalances} />
      <div className="tabs">
        <a
          className={`font-bold text-white hover:text-gray-300 tab tab-lifted ${activeTab === 0 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Tokens
        </a>
        <a
          className={`font-bold text-white hover:text-gray-300 tab tab-lifted ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          NFTs
        </a>
      </div>

      <div className="tab-content">
        {activeTab === 0 && (
          <div className="tab-pane">
            <div className="overflow-y-auto">
                <table className="table min-w-full">
                    <thead>
                        <tr>
                        <th></th>
                        <th> Name </th>
                        <th> Symbol </th>
                        <th> Balance </th>
                        <th> Amount (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {updatedTokenBalances
                        .filter((token) => token.tokenAmount.decimals !== 0 && token.tokenAmount.uiAmount !== 0)
                        .map((token, index) => (
                            <tr key={index} className="hover">
                                <th>
                                    <img src={token.tokenIcon} alt="Token Logo" className="w-6 h-6 rounded-full" />
                                </th>
                                <th>{token.tokenName}</th>
                                <th>{token.tokenSymbol}</th>
                                <th>{token.tokenAmount.uiAmountString}</th>
                                <th>
                                {token.price
                                    ? `$${(token.price * parseFloat(token.tokenAmount.uiAmountString)).toFixed(2)}`
                                    : 'Price not available'}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    <tbody>
                        <tr className="hover">
                        <th> <img src={"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"} alt="Avatar" className="w-6 h-6 rounded-full" /></th>
                        <th> Solana </th>
                        <th> SOL </th>
                        <th> {solBalance !== null ? solBalance.toFixed(4) : 'Loading...'} </th>
                        <th> {solPrice !== null ? `$${(solPrice * solBalance).toFixed(2)}` : 'Loading...'} </th>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="tab-pane">
          <div className="overflow-y-auto">
              <table className="table min-w-full">
                  <thead>
                      <tr>
                      <th></th>
                      <th> Name </th>
                      <th> Symbol </th>
                      <th> Balance </th>
                      <th> Amount (USD)</th>
                      </tr>
                  </thead>
                  <tbody>
                        <tr className="hover">
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                  </tbody>
              </table>
          </div>
          </div>
        )}

    </div>
    </div>
    );
};

export default TokenMenu;