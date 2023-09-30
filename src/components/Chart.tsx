import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const PieChartComponent = ({ solanaAmount, solanaPrice, tokenPrices, tokenAmounts }) => {
  const data = [
    {
      name: 'Solana',
      value: solanaPrice * (solanaAmount || 0), // Assuming solanaAmountInTokens is the amount in SOL
      symbol: 'SOL',
    },
    ...tokenAmounts.map((token) => ({
      name: token.tokenSymbol,
      value: (tokenPrices[token.tokenSymbol] || 0) * token.tokenAmount.uiAmount,
      symbol: token.tokenSymbol,
    })),
  ];

  return (
    <PieChart width={200} height={200}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
      <Tooltip
        formatter={(value, name, props) => {
            if (typeof value === 'number') {
            return [`${value.toFixed(2)} USD`, props.payload.symbol];
            }
            return [value, props.payload.symbol];
        }}
       />
    </PieChart>
  );
};

export default PieChartComponent;

