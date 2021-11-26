import React, { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Coin from "../../components/Navbar/Coin/Coin";
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
  //Filtrar las monedas con el input que tenemos
  const filteredCoins =
    coins &&
    coins.filter((coin) =>
      coin.name.toLowerCase().includes(inputValue.toLowerCase())
    );
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
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          {!loading && (
            <div>
              {filteredCoins.map((coin) => {
                return (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
