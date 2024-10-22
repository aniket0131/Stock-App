<<<<<<< HEAD
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TopGainersLosers from './TopGainersLosers';
import SetAlert from '../components/SetAlert';
import { StockContext } from '../Context/StockContext';
import { fetchIbmStockDetails, fetchRelianceStockDetails, fetchTSCOStockDetails, fetchWiproStockDetails } from '../services/stockAPi';
=======
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TopGainersLosers from "./TopGainersLosers";
import SetAlert from "../components/SetAlert";
import { StockContext } from "../Context/StockContext";
import {
  fetchIbmStockDetails,
  fetchRelianceStockDetails,
  fetchTSCOStockDetails,
  fetchWiproStockDetails,
} from "../services/stockAPi";
>>>>>>> 9f4db9f (changes)

const Dashboard = () => {
  const [relianceData, setRelianceData] = useState({});
  const [ibmData, setIbmData] = useState({});
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [relianceSymbol, setRelianceSymbol] = useState('');
  const [ibmSymbol, setibmSymbol] = useState('');
  const [tscoSymbol, settscoSymbol] = useState('');
  const navigate = useNavigate();

  const { addToWatchlist } = useContext(StockContext);
  
=======
  const [relianceSymbol, setRelianceSymbol] = useState("");
  const [ibmSymbol, setibmSymbol] = useState("");
  const [tscoSymbol, settscoSymbol] = useState("");
  const navigate = useNavigate();

  const { addToWatchlist } = useContext(StockContext);

>>>>>>> 9f4db9f (changes)
  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);

<<<<<<< HEAD
      // Check localStorage for Reliance data
      const storedRelianceData = localStorage.getItem('relianceStockData');
=======
      const storedRelianceData = localStorage.getItem("relianceStockData");
>>>>>>> 9f4db9f (changes)
      if (storedRelianceData) {
        const relianceData = JSON.parse(storedRelianceData);
        setRelianceSymbol(relianceData["Meta Data"]["2. Symbol"]);
        setRelianceData(relianceData);
      } else {
<<<<<<< HEAD
        // Fetch Reliance data
=======
>>>>>>> 9f4db9f (changes)
        const relianceData = await fetchRelianceStockDetails();
        if (relianceData["Meta Data"]) {
          setRelianceSymbol(relianceData["Meta Data"]["2. Symbol"]);
          setRelianceData(relianceData);
<<<<<<< HEAD
          localStorage.setItem('relianceStockData', JSON.stringify(relianceData));
        }
      }

      // Check localStorage for Wipro data
      const storedWiproData = localStorage.getItem('IbmStockData');
=======
          localStorage.setItem(
            "relianceStockData",
            JSON.stringify(relianceData)
          );
        }
      }

      const storedWiproData = localStorage.getItem("IbmStockData");
>>>>>>> 9f4db9f (changes)
      if (storedWiproData) {
        const wiproData = JSON.parse(storedWiproData);
        setibmSymbol(wiproData["Meta Data"]["2. Symbol"]);
        setIbmData(wiproData);
      } else {
<<<<<<< HEAD
        // Fetch Wipro data
=======
>>>>>>> 9f4db9f (changes)
        const wiproData = await fetchWiproStockDetails();
        if (wiproData["Meta Data"]) {
          setibmSymbol(wiproData["Meta Data"]["2. Symbol"]);
          setIbmData(wiproData);
<<<<<<< HEAD
          localStorage.setItem('IbmStockData', JSON.stringify(wiproData));
        }
      }

      // Check localStorage for TSCO data
      const storedTSCOData = localStorage.getItem('TSCOData');
=======
          localStorage.setItem("IbmStockData", JSON.stringify(wiproData));
        }
      }

      const storedTSCOData = localStorage.getItem("TSCOData");
>>>>>>> 9f4db9f (changes)
      if (storedTSCOData) {
        const TSCOData = JSON.parse(storedTSCOData);
        settscoSymbol(TSCOData["Meta Data"]["2. Symbol"]);
        setIbmData(TSCOData);
      } else {
<<<<<<< HEAD
        // Fetch TSCO data
=======
>>>>>>> 9f4db9f (changes)
        const TSCOData = await fetchTSCOStockDetails();
        if (TSCOData["Meta Data"]) {
          settscoSymbol(TSCOData["Meta Data"]["2. Symbol"]);
          setIbmData(TSCOData);
<<<<<<< HEAD
          localStorage.setItem('TSCOData', JSON.stringify(TSCOData));
=======
          localStorage.setItem("TSCOData", JSON.stringify(TSCOData));
>>>>>>> 9f4db9f (changes)
        }
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

<<<<<<< HEAD
      {/* Reliance Stock Data */}
=======
>>>>>>> 9f4db9f (changes)
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Symbol: {relianceSymbol}</h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => handleClick(relianceSymbol)}
<<<<<<< HEAD
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-black text-white shadow-lg'}`}
=======
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
              loading
                ? "bg-gray-400 opacity-40 text-white cursor-not-allowed"
                : "bg-black text-white shadow-lg"
            }`}
>>>>>>> 9f4db9f (changes)
            disabled={loading}
          >
            See more
          </button>
          <button
            onClick={() => handleAddToWatchlist(relianceSymbol)}
<<<<<<< HEAD
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'}`}
=======
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
              loading
                ? "bg-gray-400 opacity-40 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 shadow-lg"
            }`}
>>>>>>> 9f4db9f (changes)
            disabled={loading}
          >
            Add to Watchlist
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Wipro Stock Data */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Stock Symbol: {ibmSymbol}</h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => handleClick(ibmSymbol)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-black text-white shadow-lg'}`}
=======
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">
          Stock Symbol: {ibmSymbol}
        </h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => handleClick(ibmSymbol)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
              loading
                ? "bg-gray-400 opacity-40 text-white cursor-not-allowed"
                : "bg-black text-white shadow-lg"
            }`}
>>>>>>> 9f4db9f (changes)
            disabled={loading}
          >
            See more
          </button>
          <button
            onClick={() => handleAddToWatchlist(ibmSymbol)}
<<<<<<< HEAD
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'}`}
=======
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
              loading
                ? "bg-gray-400 opacity-40 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 shadow-lg"
            }`}
>>>>>>> 9f4db9f (changes)
            disabled={loading}
          >
            Add to Watchlist
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* TSCO Stock Data */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Stock Symbol: {tscoSymbol}</h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => handleClick(tscoSymbol)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-black text-white shadow-lg'}`}
=======
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">
          Stock Symbol: {tscoSymbol}
        </h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => handleClick(tscoSymbol)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
              loading
                ? "bg-gray-400 opacity-40 text-white cursor-not-allowed"
                : "bg-black text-white shadow-lg"
            }`}
>>>>>>> 9f4db9f (changes)
            disabled={loading}
          >
            See more
          </button>
          <button
            onClick={() => handleAddToWatchlist(tscoSymbol)}
<<<<<<< HEAD
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${loading ? 'bg-gray-400 opacity-40 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'}`}
=======
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
              loading
                ? "bg-gray-400 opacity-40 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 shadow-lg"
            }`}
>>>>>>> 9f4db9f (changes)
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

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> 9f4db9f (changes)
