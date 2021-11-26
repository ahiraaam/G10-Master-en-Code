import React, { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";

export default function Home() {
  const [coins, setCoins] = useState([]); //guardar monedas de la API
  const [inputValue, setInputValue] = useState("");

  const { response, error, loading } = useAxios({
    method: "GET",
    url: "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
  });
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if (response != null) {
      console.log("No esta vacio");
      setCoins(response);
    }
  }, [response]);
  return (
    <div>
      <h1>Home</h1>
      <div className="bitcoin-app">
        <div className="bitcoin-app__search">
          <form>
            <input
              className="bitcoin-app__search-input"
              type="text"
              onChange={inputHandler}
              placeholder="Buscar"
            />
          </form>
          {coins && (
            <div>
              {coins.map((coin) => (
                <p>{coin.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
