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
      }));

      // Remove duplicates based on 'name' property
      const uniqueData = extractedData.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.name === item.name)
      );
      
      uniqueData.sort((a, b) => b.h24 - a.h24);
      const gainers = [];
      const losers = [];

      // Categorize into gainers and losers
      uniqueData.forEach((item) => {
        if (item.h24 > 0) {
          gainers.push(item);
        } else {
          losers.push(item);
        }
      });

      res.status(200).json({ gainers, losers });
    } else {
      res.status(400).json({ error: 'Invalid data structure: not in the expected format' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};
