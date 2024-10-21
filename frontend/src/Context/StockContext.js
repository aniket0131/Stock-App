import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const StockContext = createContext();

// Create the provider component
export const StockProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    // Retrieve watchlist from localStorage if available
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [currentPrices, setCurrentPrices] = useState(null);
  const [stockData, setStockData] = useState(() => {
    // Retrieve stockData from localStorage if available
    const savedData = localStorage.getItem('stockData');
    return savedData ? JSON.parse(savedData) : null;
  });

  // Save stockData to localStorage whenever it changes
  useEffect(() => {
    if (stockData) {
      localStorage.setItem('stockData', JSON.stringify(stockData));
    }
  }, [stockData]);

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  // Periodically check for alerts
  useEffect(() => {
    const checkAlerts = () => {
      alerts.forEach(alert => {
        const currentStockPrice = stockData[alert.symbol]?.[Object.keys(stockData[alert.symbol])[0]]?.['4. close'];
        if (currentStockPrice && parseFloat(currentStockPrice) >= alert.threshold) {
          alertUser(alert.symbol, currentStockPrice); // Trigger alert
        }
      });
    };

    const intervalId = setInterval(checkAlerts, 60000); // Check every minute

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [stockData, alerts]);

  const alertUser = (symbol, price) => {
    alert(`Price Alert: ${symbol} has reached ${price}!`);
    // Optionally, you can implement a more sophisticated notification system here
  };

  // Function to add stock to watchlist
  const addToWatchlist = (symbol) => {
    if (!watchlist.includes(symbol)) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, symbol]);
    }
  };

  // Function to remove stock from watchlist
  const removeFromWatchlist = (symbol) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter(item => item !== symbol));
  };

  return (
    <StockContext.Provider value={{
      watchlist,
      setWatchlist,
      stockData,
      setStockData,
      alerts,
      setAlerts,
      currentPrices,
      setCurrentPrices,
      alertMessage,
      setAlertMessage,
      addToWatchlist,
      removeFromWatchlist
    }}>
      {children}
    </StockContext.Provider>
  );
};
