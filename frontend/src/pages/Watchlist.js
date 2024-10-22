import React, { useContext } from 'react';
import { StockContext } from '../Context/StockContext';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist, stockData } = useContext(StockContext);
  const navigate = useNavigate();

  const handleViewStock = (symbol) => {
    navigate(`/stock/${symbol}`);
  };

<<<<<<< HEAD
  // Helper function to get today's high and low from stockData
=======

>>>>>>> 9f4db9f (changes)
  const getTodaysHighLow = () => {
    if (!stockData || !stockData["Time Series (Daily)"]) {
      return {};
    }
    const latestDate = Object.keys(stockData["Time Series (Daily)"])[0]; // Get the latest date
    const todayData = stockData["Time Series (Daily)"][latestDate]; // Get today's data
    return {
      high: todayData['2. high'],
      low: todayData['3. low']
    };
  };

  const { high, low } = getTodaysHighLow();

  return (
    <div className="container mx-auto p-4 flex lg:mt-12 items-center flex-col min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Watchlist</h1>
      <ul className="w-full max-w-3xl">
        {watchlist.length > 0 ? (
          watchlist.map((symbol, index) => (
            <li
              key={index}
              className="mb-4 p-6 bg-white rounded-lg shadow-lg flex justify-between items-center transition-all hover:shadow-xl"
            >
              <div className="flex flex-col text-left">
                <span className="text-2xl font-semibold">{symbol}</span>
                {high && low ? (
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center">
                      <FaArrowUp className="text-green-600 mr-1" />
                      <span className="text-lg">Today's High: {high}</span>
                    </div>
                    <div className="flex items-center">
                      <FaArrowDown className="text-red-600 mr-1" />
                      <span className="text-lg">Today's Low: {low}</span>
                    </div>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">Data not available</span>
                )}
              </div>
              <div className="flex">
                <button
                  onClick={() => handleViewStock(symbol)}
                  className="mr-4 text-green-800 hover:text-green-500 transition-colors"
                >
                  <FaEye size={24} />
                </button>
                <button
                  onClick={() => removeFromWatchlist(symbol)}
                  className="text-red-800 hover:text-red-500 transition-colors"
                >
                  <MdDelete size={24} />
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-lg">No stocks in your watchlist.</p>
        )}
      </ul>
    </div>
  );
};

export default Watchlist;
