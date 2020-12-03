import React from "react";
import "./index.scss";

const PricesOutput = ({ lyftPrices, uberPrices }) => {
  const pricesObject = [ { columnName: "Lyft Prices", prices: lyftPrices }, { columnName: "Uber Prices", prices: uberPrices }];

  return (
    <div className="PricesOutput">
      {pricesObject.map((ridesharePrices) => (
        <div className="PricesOutput__pricesContainer">
          <span className="PricesOutput__header">{ridesharePrices.columnName}</span>
          {ridesharePrices.prices.map(({ displayName, price }) => (
            <div key={displayName} className="PricesOutput__priceItemContainer">
              <span className="PricesOutput__pricesItem">{displayName}</span>
              <span className="PricesOutput__pricesItem">{price ? price : "Not Available"}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricesOutput;
