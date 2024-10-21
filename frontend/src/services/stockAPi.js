const apiUrlIndiaBse = process.env.REACT_APP_STOCK_INDIA_BSE_URL;
const apiUrlWiproBse = process.env.REACT_APP_STOCK_WIPRO_BSE_URL;
const apiUrlIbmBse = process.env.REACT_APP_STOCK_TSCO_BSE_URL;

console.log(apiUrlIndiaBse,"apiUrlIndiaBse ");
// Fetch Reliance stock data
export const fetchRelianceStockDetails = async () => {
    const response = await fetch(apiUrlIndiaBse);
    const data = await response.json();
    return data;
  };

// Fetch Ibm stock data
export const fetchWiproStockDetails = async () => {
    const response = await fetch(apiUrlWiproBse);
    const data = await response.json();
    return data;
  };

  // Fetch Wipro stock data
export const fetchIbmStockDetails = async () => {
    const response = await fetch(apiUrlIbmBse);
    const data = await response.json();
    return data;
  };