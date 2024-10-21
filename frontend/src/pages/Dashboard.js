// // src/components/Dashboard.js
// import React, { useEffect, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopGainersLosers from './TopGainersLosers';
// import SetAlert from '../components/SetAlert';
// import { StockContext } from '../Context/StockContext';

// const Dashboard = () => {
//   const [symbol, setSymbol] = useState('');
//   const [lastRefreshed, setLastRefreshed] = useState('');
//   const [stockData, setStockData] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStockData = async () => {
//       const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo');
//       const data = await response.json();
//       console.log();
      
      
//       if (data["Meta Data"]) {
//         const lastFetchedDate = data["Meta Data"]["3. Last Refreshed"]; // The latest date from API
//         const storedDate = localStorage.getItem('lastFetchedDate');

//         if (storedDate !== lastFetchedDate) {
//           // New data available, update the state and localStorage
//           setStockData(data);
//           setSymbol(data["Meta Data"]["2. Symbol"]);
//           setLastRefreshed(lastFetchedDate);
//           localStorage.setItem('lastFetchedDate', lastFetchedDate); // Store the latest date
//           localStorage.setItem('stockData', JSON.stringify(data)); // Store the stock data
//         } else {
//           // Use data from localStorage if the API data is not updated
//           const cachedData = JSON.parse(localStorage.getItem('stockData'));
//           setStockData(cachedData);
//           setSymbol(cachedData["Meta Data"]["2. Symbol"]);
//           setLastRefreshed(cachedData["Meta Data"]["3. Last Refreshed"]);
//         }
//       }
//     };

//     fetchStockData();
//   }, []);

//   const handleClick = () => {
//     navigate(`/stock/${symbol}`);
//   };

//   const { currentPrices, alertMessage } = useContext(StockContext);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <div className="bg-gray-100 p-4 rounded shadow-md">
//         <h2 className="text-xl font-semibold">Stock Symbol: {symbol}</h2>
//         <h2 className="text-xl font-semibold">Last Refreshed: {lastRefreshed}</h2>
//         <button onClick={handleClick} className="text-lg text-blue-500 underline">
//           See more
//         </button>

//         {alertMessage && (
//         <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
//           <strong>{alertMessage}</strong>
//         </div>
//       )}
         
//       </div>
//        <SetAlert/>
//        <TopGainersLosers />
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TopGainersLosers from './TopGainersLosers';
import SetAlert from '../components/SetAlert';
import { StockContext } from '../Context/StockContext';
import { fetchRelianceStockDetails, fetchWiproStockDetails } from '../services/stockAPi';

const Dashboard = () => {
  const [relianceData, setRelianceData] = useState({});
  const [ibmData, setIbmData] = useState({});
  const [loading, setLoading] = useState(true);
  const [relianceSymbol, setRelianceSymbol] = useState('');
  const [ibmSymbol, setibmSymbol] = useState('');
  const navigate = useNavigate();

  const { addToWatchlist } = useContext(StockContext);

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);

      // Fetch Reliance data
      const relianceData = await fetchRelianceStockDetails();
      if (relianceData["Meta Data"]) {
        setRelianceSymbol(relianceData["Meta Data"]["2. Symbol"]);
        setRelianceData(relianceData);
        localStorage.setItem('relianceStockData', JSON.stringify(relianceData));
      }

      // Fetch IBM data
      const wiproData = await fetchWiproStockDetails();
      if (wiproData["Meta Data"]) {
        setibmSymbol(wiproData["Meta Data"]["2. Symbol"]);
        setIbmData(wiproData);
        localStorage.setItem('IbmStockData', JSON.stringify(wiproData));
      }
      
      setLoading(false);
    };

    fetchStockData();
  }, []);

  const handleClick = (symbol) => {
    navigate(`/stock/${symbol}`);
  };

  const handleAddToWatchlist = (symbol) => {
    addToWatchlist(symbol);
    alert(`${symbol} added to your watchlist!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      {/* Reliance Stock Data */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Symbol: {relianceSymbol}</h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => handleClick(relianceSymbol)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-black text-white shadow-lg'}`}
            disabled={loading}
          >
            See more
          </button>
          <button
            onClick={() => handleAddToWatchlist(relianceSymbol)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'}`}
            disabled={loading}
          >
            Add to Watchlist
          </button>
        </div>
      </div>

      {/* Wipro Stock Data */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Stock Symbol: {ibmSymbol}</h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => handleClick(ibmSymbol)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-black text-white shadow-lg'}`}
            disabled={loading}
          >
            See more
          </button>
          <button
            onClick={() => handleAddToWatchlist(ibmSymbol)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'}`}
            disabled={loading}
          >
            Add to Watchlist
          </button>
        </div>
      </div>

      <SetAlert />
      <TopGainersLosers />
    </div>
  );
};

export default Dashboard;
