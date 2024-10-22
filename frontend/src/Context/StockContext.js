import React, { createContext, useState, useEffect } from 'react';

<<<<<<< HEAD
// Create the context
export const StockContext = createContext();

// Create the provider component
export const StockProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    // Retrieve watchlist from localStorage if available
=======

export const StockContext = createContext();


export const StockProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {

>>>>>>> 9f4db9f (changes)
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [currentPrices, setCurrentPrices] = useState(null);
  const [stockData, setStockData] = useState(() => {
<<<<<<< HEAD
    // Retrieve stockData from localStorage if available
=======

>>>>>>> 9f4db9f (changes)
    const savedData = localStorage.getItem('stockData');
    return savedData ? JSON.parse(savedData) : null;
  });

<<<<<<< HEAD
  // Save stockData to localStorage whenever it changes
=======

>>>>>>> 9f4db9f (changes)
  useEffect(() => {
    if (stockData) {
      localStorage.setItem('stockData', JSON.stringify(stockData));
    }
  }, [stockData]);

<<<<<<< HEAD
  // Save watchlist to localStorage whenever it changes
=======
 
>>>>>>> 9f4db9f (changes)
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

<<<<<<< HEAD
  // Periodically check for alerts
=======

>>>>>>> 9f4db9f (changes)
  useEffect(() => {
    const checkAlerts = () => {
      alerts.forEach(alert => {
        const currentStockPrice = stockData[alert.symbol]?.[Object.keys(stockData[alert.symbol])[0]]?.['4. close'];
        if (currentStockPrice && parseFloat(currentStockPrice) >= alert.threshold) {
<<<<<<< HEAD
          alertUser(alert.symbol, currentStockPrice); // Trigger alert
=======
          alertUser(alert.symbol, currentStockPrice); 
>>>>>>> 9f4db9f (changes)
        }
      });
    };

<<<<<<< HEAD
    const intervalId = setInterval(checkAlerts, 60000); // Check every minute

    return () => clearInterval(intervalId); // Cleanup interval on unmount
=======
    const intervalId = setInterval(checkAlerts, 60000); 

    return () => clearInterval(intervalId); 
>>>>>>> 9f4db9f (changes)
  }, [stockData, alerts]);

  const alertUser = (symbol, price) => {
    alert(`Price Alert: ${symbol} has reached ${price}!`);
<<<<<<< HEAD
    // Optionally, you can implement a more sophisticated notification system here
  };

  // Function to add stock to watchlist
=======
    
  };


>>>>>>> 9f4db9f (changes)
  const addToWatchlist = (symbol) => {
    if (!watchlist.includes(symbol)) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, symbol]);
    }
  };

<<<<<<< HEAD
  // Function to remove stock from watchlist
=======
  
>>>>>>> 9f4db9f (changes)
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
