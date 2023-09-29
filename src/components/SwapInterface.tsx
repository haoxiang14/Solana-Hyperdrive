// src/components/SwapForm.tsx
import React, { useState } from 'react';

const SwapForm: React.FC = () => {
  const [inputTokenAmount, setInputTokenAmount] = useState('');
  const [outputTokenAmount, setOutputTokenAmount] = useState('');

  const handleInputTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTokenAmount(event.target.value);
    // Add logic to calculate outputTokenAmount based on inputTokenAmount and swap rate
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>
      <div className="mb-4">
        <label htmlFor="inputToken">Input Token Amount:</label>
        <input
          type="number"
          id="inputToken"
          value={inputTokenAmount}
          onChange={handleInputTokenChange}
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="outputToken">Output Token Amount:</label>
        <input
          type="number"
          id="outputToken"
          value={outputTokenAmount}
          readOnly
          placeholder="Output amount"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Swap
      </button>
    </div>
  );
};

export default SwapForm;
