<<<<<<< HEAD
// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { StockContext } from '../Context/StockContext';

// const StockDetails = () => {
//   const { symbol } = useParams();
//   const { stockData, setStockData } = useContext(StockContext);
//   const [loading, setLoading] = useState(!stockData); // If stockData is null, its initial state start with loading
  
//   useEffect(() => {
//     // If stockData is missing, fetch it again
//     if (!stockData) {
//       const fetchStockData = async () => {
//         setLoading(true); // Start loading while fetching
//         const response = await fetch(
//           `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=demo`
//         );
//         const data = await response.json();
//         setStockData(data); // Set the fetched data into context
//         setLoading(false); // Stop loading
//       };
//       fetchStockData();
//     }
//   }, [symbol, stockData, setStockData]);
   
//   // Show loading while fetching the data
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Access the last refreshed date and the corresponding data from Time Series
//   const lastRefreshed = stockData?.['Meta Data']?.['3. Last Refreshed'];
//   const dailyTimeSeries = stockData?.['Time Series (Daily)'];
  
//   // Get the stock data for the latest date
//   const latestData = dailyTimeSeries?.[lastRefreshed];
  
//   if (!latestData) {
//     return <div>No data available for the latest date.</div>;
//   }

//   // Destructure the latest stock data (open, high, low, close, volume)
//   const {
//     '1. open': open,
//     '2. high': high,
//     '3. low': low,
//     '4. close': close,
//     '5. volume': volume
//   } = latestData;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Stock Details for {symbol}</h1>
//       <div className="bg-gray-100 p-4 rounded shadow-md">
//         <h2 className="text-xl font-semibold">Symbol:</h2>
//         <p className="text-lg text-gray-700">{symbol}</p>

//         <h2 className="text-xl font-semibold mt-4">Last Refreshed:</h2>
//         <p className="text-lg text-gray-700">{lastRefreshed}</p>

//         <h2 className="text-xl font-semibold mt-4">Latest Stock Data:</h2>
//         <ul>
//           <li><strong>Open:</strong> {open}</li>
//           <li><strong>High:</strong> {high}</li>
//           <li><strong>Low:</strong> {low}</li>
//           <li><strong>Close:</strong> {close}</li>
//           <li><strong>Volume:</strong> {volume}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StockDetails;
=======
>>>>>>> 9f4db9f (changes)

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StockContext } from '../Context/StockContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';

const StockDetails = () => {
  const { symbol } = useParams();
  const { stockData, setStockData } = useContext(StockContext);
  const [loading, setLoading] = useState(!stockData);
  const [selectedMonth, setSelectedMonth] = useState(moment().format('YYYY-MM'));
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // if (!stockData) {
      const fetchStockData = async () => {
        setLoading(true);
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=demo`
        );
        const data = await response.json();
        setStockData(data);
        setLoading(false);
      };

      fetchStockData();
    // }
  }, [symbol, setStockData]);

  useEffect(() => {
    if (stockData && stockData['Time Series (Daily)']) {
      const dailyTimeSeries = stockData['Time Series (Daily)'];

      // Filter the data based on the selected month
      const filteredData = Object.keys(dailyTimeSeries)
        .filter(date => moment(date).format('YYYY-MM') === selectedMonth)
        .map(date => ({
          date,
          open: parseFloat(dailyTimeSeries[date]['1. open']),
          high: parseFloat(dailyTimeSeries[date]['2. high']),
          low: parseFloat(dailyTimeSeries[date]['3. low']),
          close: parseFloat(dailyTimeSeries[date]['4. close']),
          volume: parseInt(dailyTimeSeries[date]['5. volume'], 10),
        }));

      setChartData(filteredData.reverse());
    }
  }, [stockData, selectedMonth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const months = Object.keys(stockData['Time Series (Daily)'])
    .map(date => moment(date).format('YYYY-MM'))
    .filter((value, index, self) => self.indexOf(value) === index);

  // Extract metadata
  const metaData = stockData['Meta Data'];
  const latestDate = Object.keys(stockData['Time Series (Daily)'])[0];
  const latestStockInfo = stockData['Time Series (Daily)'][latestDate];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Stock Details for {symbol}</h1>
      
      {/* Display Meta Data and Latest Stock Information in one row */}
      <div className="flex justify-between mb-6 space-x-8">
        {/* Company Information Card */}
        <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex-1">
          <h2 className="text-2xl font-semibold text-gray-700">Company Information:</h2>
          <div className="mt-4">
            <p className="text-lg text-gray-600"><strong>Symbol:</strong> {metaData['2. Symbol']}</p>
            <p className="text-lg text-gray-600"><strong>Last Refreshed:</strong> {metaData['3. Last Refreshed']}</p>
            <p className="text-lg text-gray-600"><strong>Output Size:</strong> {metaData['4. Output Size']}</p>
            <p className="text-lg text-gray-600"><strong>Time Zone:</strong> {metaData['5. Time Zone']}</p>
          </div>
        </div>

        {/* Latest Stock Information Card */}
        <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex-1">
          <h2 className="text-2xl font-semibold text-gray-700">Latest Stock Info:</h2>
          <div className="mt-4">
            <p className="text-lg text-gray-600"><strong>Date:</strong> {latestDate}</p>
            <p className="text-lg text-gray-600"><strong>Open:</strong> ₹{parseFloat(latestStockInfo['1. open']).toLocaleString()}</p>
            <p className="text-lg text-gray-600"><strong>High:</strong> ₹{parseFloat(latestStockInfo['2. high']).toLocaleString()}</p>
            <p className="text-lg text-gray-600"><strong>Low:</strong> ₹{parseFloat(latestStockInfo['3. low']).toLocaleString()}</p>
            <p className="text-lg text-gray-600"><strong>Close:</strong> ₹{parseFloat(latestStockInfo['4. close']).toLocaleString()}</p>
            <p className="text-lg text-gray-600"><strong>Volume:</strong> {parseInt(latestStockInfo['5. volume']).toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Month Selection and Chart */}
      <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mt-4">Select Month:</h2>
        <select
          className="text-lg mb-4 p-2 border border-gray-300 rounded"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((month, idx) => (
            <option key={idx} value={month}>
              {moment(month, 'YYYY-MM').format('MMMM YYYY')}
            </option>
          ))}
        </select>

        <h2 className="text-xl font-semibold mt-4">Stock Data (Month: {moment(selectedMonth).format('MMMM YYYY')}):</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(tick) => moment(tick).format('DD MMM')} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="open" stroke="#8884d8" name="Open Price" />
            <Line type="monotone" dataKey="close" stroke="#82ca9d" name="Close Price" />
            <Line type="monotone" dataKey="high" stroke="#ff7300" name="High Price" />
            <Line type="monotone" dataKey="low" stroke="#ff0000" name="Low Price" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockDetails;
