import React from "react";
import "./index.scss";

const PricesOutput = ({ lyftPrices, uberPrices }) => {
  const pricesObject = {
    "Lyft Prices": lyftPrices,
    "Uber Prices": uberPrices,
  };

  return (
    <div className="PricesOutput">
      {Object.entries(pricesObject).map(([type, prices]) => (
        <div className="PricesOutput__pricesContainer">
          <span className="PricesOutput__header">{type}</span>
          {prices.map(({ displayName, price }) => (
            <div key={displayName} className="PricesOutput__priceItemContainer">
              <span className="PricesOutput__pricesItem">{displayName}</span>
              <span className="PricesOutput__pricesItem">
                {price ? price : "Not Available"}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricesOutput;
