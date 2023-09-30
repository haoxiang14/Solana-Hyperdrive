import { set } from 'date-fns';
import React, { useEffect, useState } from 'react';

interface Tab {
  label: string;
  content: string;
}

interface Token {
    address: string;
    chainId: number;
    decimals: number;
    name: string;
    symbol: string;
    logoURI: string;
}

const TokenMenu = () => {
  const tabs = [
    { label: 'Strict'},
    { label: 'All' },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index_tab: number) => {
    setActiveTab(index_tab);
  };

  // Sample data for the token
  const [strictTokenData, setStrictTokenData] = useState<Token[] | null>(null);
  const [tokenData, setTokenData] = useState<Token[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
        try{
            const strict_response = await fetch("https://token.jup.ag/strict")
            const all_response = await fetch("https://token.jup.ag/all")
            if (!strict_response.ok || !all_response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseStrict = await strict_response.json();
            const responseAll = await all_response.json();
            setStrictTokenData(responseStrict);
            setTokenData(responseAll);
            console.log(responseStrict);
            console.log(responseAll);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
    }, []);
        

  return (
    <div>
      <div className="tabs">
        <a
          className={`font-bold text-white hover:text-gray-300 tab tab-lifted ${activeTab === 0 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Strict
        </a>
        <a
          className={`font-bold text-white hover:text-gray-300 tab tab-lifted ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          All
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
                        </tr>
                    </thead>
                    <tbody>
                        {strictTokenData && strictTokenData.map((token, index) => (
                        <tr key={index} className="hover">
                            <th> <img src={token.logoURI} alt="Avatar" className="w-6 h-6 rounded-full" /></th>
                            <td>{token.name}</td>
                            <td>{token.symbol}</td>
                        </tr>
                        ))}
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
                      </tr>
                  </thead>
                  <tbody>
                    {tokenData && tokenData.map((token, index) => (
                        <tr key={index} className="hover">
                            <th> <img src={token.logoURI} alt="Avatar" className="w-6 h-6 rounded-full" /></th>
                            <td>{token.name}</td>
                            <td>{token.symbol}</td>
                        </tr>
                    ))}
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