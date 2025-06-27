// these  hooks can also use inbuilt hooks

import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
  const[data, setData] = useState({})

}
let currencyCode = 'zmw'; // you can change this dynamically
let url = `https://currency-rate-exchange-api.onrender.com/${currencyCode}`;

https://currency-rate-exchange-api.onrender.com/inr