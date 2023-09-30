import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Define your colors

const PieChartComponent = () => {
  const data = [
    { name: 'Solana', symbol: 'SOL', price: 1.02 },
    { name: 'USD Coin', symbol: 'USDC', price: 1.74 },
    { name: 'DeFi Land', symbol: 'DFL', price: 0.00 },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="price"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;

































// const PieChartComponent = ({ solanaAmount, solanaPrice, tokenPrices, tokenAmounts }) => {
//   const data = [
//     {
//       name: 'Solana',
//       value: solanaPrice * (solanaAmount || 0), // Assuming solanaAmountInTokens is the amount in SOL
//       symbol: 'SOL',
//     },
//     ...tokenAmounts.map((token) => ({
//       name: token.tokenSymbol,
//       value: (tokenPrices[token.tokenSymbol] || 0) * token.tokenAmount.uiAmount,
//       symbol: token.tokenSymbol,
//     })),
//   ];

//   return (
//     <PieChart width={200} height={200}>
//       <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
//       <Tooltip
//         formatter={(value, name, props) => {
//             if (typeof value === 'number') {
//             return [`${value.toFixed(2)} USD`, props.payload.symbol];
//             }
//             return [value, props.payload.symbol];
//         }}
//        />
//     </PieChart>
//   );
// };

// export default PieChartComponent;

