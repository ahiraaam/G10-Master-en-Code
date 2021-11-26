import React from "react";
import "./coin.css";
export default function Coin({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h3>{name}</h3>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}</p>
          <p className="coin-volume">$ {volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: $ {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
