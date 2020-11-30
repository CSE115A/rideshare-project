import React from "react";
import "./index.scss";

const PricesOutput = ({ lyftPrices, uberPrices }) => {
  return (
    <div className="PricesOutput">
      <div className="PricesOutput__pricesContainer">
        {lyftPrices.map(({ displayName, price }) => (
          <div className="PricesOutput__priceItemContainer">
            <span className="PricesOutput__pricesItem">{displayName}</span>
            <span className="PricesOutput__pricesItem">{price}</span>
          </div>
        ))}
      </div>
      <div className="PricesOutput__pricesContainer">
        {uberPrices.map(({ displayName, price }) => (
          <div className="PricesOutput__priceItemContainer">
            <span className="PricesOutput__pricesItem">{displayName}</span>
            <span className="PricesOutput__pricesItem">{price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricesOutput;
