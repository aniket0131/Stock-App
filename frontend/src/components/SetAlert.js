import React, { useState, useEffect, useContext } from 'react';
import { StockContext } from '../Context/StockContext';

const SetAlert = () => {
<<<<<<< HEAD
  const { setCurrentPrices, setAlertMessage } = useContext(StockContext); 
=======
  const { setCurrentPrices, setAlertMessage , alertMessage } = useContext(StockContext); 
>>>>>>> 9f4db9f (changes)
  const [symbol, setSymbol] = useState('');
  const [threshold, setThreshold] = useState('');
  const [alertSet, setAlertSet] = useState(false);

  const checkPrice = async () => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=YOUR_API_KEY`
      );
      const data = await response.json();

      const latestPriceData = data?.['Time Series (Daily)'];
      if (!latestPriceData) {
        alert('Failed to fetch stock data');
        return;
      }

      const latestTime = Object.keys(latestPriceData)[0];
      const latestData = latestPriceData[latestTime];

      const openPrice = parseFloat(latestData['1. open']);
      const highPrice = parseFloat(latestData['2. high']);
      const lowPrice = parseFloat(latestData['3. low']);
      const closePrice = parseFloat(latestData['4. close']);
      const alertThreshold = parseFloat(threshold);

      if (openPrice === alertThreshold || highPrice === alertThreshold || lowPrice === alertThreshold || closePrice === alertThreshold) {
        setAlertMessage(`Price alert: ${symbol} has reached the threshold of ${threshold}.`);
<<<<<<< HEAD
        setAlertSet(false); // Reset after the alert
=======
        setAlertSet(false); 
>>>>>>> 9f4db9f (changes)
      }
      setCurrentPrices({ open: openPrice, high: highPrice, low: lowPrice, close: closePrice });

    } catch (error) {
      console.error('Error fetching stock price:', error);
      alert('Error fetching stock price. Please check the symbol.');
    }
  };

  useEffect(() => {
    if (alertSet) {
      const interval = setInterval(() => {
        checkPrice();
<<<<<<< HEAD
      }, 60000); //for every minute
=======
      }, 60000); 
>>>>>>> 9f4db9f (changes)

      return () => clearInterval(interval); 
    }
  }, [alertSet]);

  const handleSetAlert = () => {
    if (!symbol || !threshold || isNaN(threshold)) {
      alert('Please enter a valid symbol and threshold.');
      return;
    }

    setAlertSet(true);
    setAlertMessage(`Price alert set for ${symbol} at ${threshold}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Set Price Alert</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g. AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="border p-2 rounded mb-2"
        />
        <input
          type="number"
          placeholder="Enter price threshold"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          className="border p-2 rounded mb-2"
        />
      </div>

      <button
        onClick={handleSetAlert}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Set Alert
      </button>
<<<<<<< HEAD
=======
      <p className="text-gray-500">{alertMessage}</p>
>>>>>>> 9f4db9f (changes)
    </div>
  );
};

export default SetAlert;
