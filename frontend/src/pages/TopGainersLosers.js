// src/pages/TopGainersLosers.js
import React, { useEffect, useState } from 'react';

const TopGainersLosers = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo');
        const stockData = await response.json();
        setData(stockData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  // Helper function to get the top 5 stocks
  const getTopFive = (arr) => arr.slice(0, 5);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top Gainers, Losers, and Most Actively Traded</h1>

      <div className="grid grid-cols-3 gap-4">
        {/* Top Gainers Table */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Top Gainers:</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Ticker</th>
                <th className="py-2 px-4 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              {data.top_gainers && getTopFive(data.top_gainers).map((stock, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{stock.ticker}</td>
                  <td className="py-2 px-4 border-b">{stock.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Losers Table */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Top Losers:</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Ticker</th>
                <th className="py-2 px-4 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              {data.top_losers && getTopFive(data.top_losers).map((stock, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{stock.ticker}</td>
                  <td className="py-2 px-4 border-b">{stock.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Most Actively Traded Table */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Most Actively Traded:</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Ticker</th>
                <th className="py-2 px-4 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              {data.most_actively_traded && getTopFive(data.most_actively_traded).map((stock, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{stock.ticker}</td>
                  <td className="py-2 px-4 border-b">{stock.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopGainersLosers;
