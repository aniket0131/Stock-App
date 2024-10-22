const apiUrlIndiaBse = process.env.REACT_APP_STOCK_INDIA_BSE_URL;
const apiUrlWiproBse = process.env.REACT_APP_STOCK_WIPRO_BSE_URL;
const apiUrlTSCOBse = process.env.REACT_APP_STOCK_TSCO_BSE_URL;

console.log(apiUrlIndiaBse,"apiUrlIndiaBse ");
<<<<<<< HEAD
// Fetch Reliance stock data
=======

>>>>>>> 9f4db9f (changes)
export const fetchRelianceStockDetails = async () => {
    const response = await fetch(apiUrlIndiaBse);
    const data = await response.json();
    return data;
  };

<<<<<<< HEAD
// Fetch Ibm stock data
=======

>>>>>>> 9f4db9f (changes)
export const fetchWiproStockDetails = async () => {
    const response = await fetch(apiUrlWiproBse);
    const data = await response.json();
    return data;
  };

<<<<<<< HEAD
  // Fetch Wipro stock data
=======

>>>>>>> 9f4db9f (changes)
export const fetchTSCOStockDetails = async () => {
    const response = await fetch(apiUrlTSCOBse);
    const data = await response.json();
    return data;
  };
