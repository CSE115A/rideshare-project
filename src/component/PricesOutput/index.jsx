import React from "react";
import "./index.scss";

const PricesOutput = ({ lyftPrices, uberPrices }) => {
  const pricesObject = [lyftPrices, uberPrices];

  return (
    <div className="PricesOutput">
      {pricesObject.map((ridesharePrices) => (
        <div className="PricesOutput__pricesContainer">
          {ridesharePrices.map(({ displayName, price }) => (
            <div key={displayName} className="PricesOutput__priceItemContainer">
              <span className="PricesOutput__pricesItem">{displayName}</span>
              <span className="PricesOutput__pricesItem">{price}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricesOutput;
