// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req, res) => {
  const geckoAPI = "https://api.geckoterminal.com/api/v2/networks/solana/pools";

  try {
    const response = await fetch(geckoAPI);
    const data = await response.json();

    if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
      const extractedData = data.data.map((item) => ({
        name: item.attributes.name,
        h24: item.attributes.price_change_percentage.h24,
        baseTokenId: item.relationships.base_token.data.id.replace('solana_', ''),
        quoteTokenId: item.relationships.quote_token.data.id.replace('solana_', ''),
        liquidity: parseInt(item.attributes.reserve_in_usd),
        volume: parseInt(item.attributes.volume_usd.h24),
      }));

      // Remove duplicates based on 'name' property
      const GainersData = extractedData.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.name === item.name) && item.liquidity > 5000
      );
      
      const LosersData = extractedData.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.name === item.name) && item.liquidity > 5000
      );
      
      const VolumeData = extractedData.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.name === item.name) && item.liquidity > 5000
      );

      const LiquidityData = extractedData.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.name === item.name) 
      );

      GainersData.sort((a, b) => b.h24 - a.h24);
      LosersData.sort((a, b) => a.h24 - b.h24);
      VolumeData.sort((a, b) => b.volume - a.volume);
      LiquidityData.sort((a, b) => b.liquidity - a.liquidity);

      const gainers = [];
      const losers = [];
      const volume = [];
      const liquidity = [];

      // Categorize into gainers and losers
      GainersData.forEach((item) => {
        if (item.h24 > 0) {
          gainers.push(item);
        }
      });
      
      LosersData.forEach((item) => {
        if (item.h24 < 0) {
          losers.push(item);
        }
      });

      VolumeData.forEach((item) => {
        if (item.volume > 0) {
          volume.push(item);
        }
      });

      LiquidityData.forEach((item) => {
        if (item.liquidity > 0) {
          liquidity.push(item);
        }
      });

      res.status(200).json({ gainers, losers, volume, liquidity});
    } else {
      res.status(400).json({ error: 'Invalid data structure: not in the expected format' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};
