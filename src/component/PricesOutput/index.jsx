import React from "react";
import "./index.scss";

const PricesOutput = ({ lyftPrices, uberPrices }) => {
  return (
    <div className="PricesOutput">
      {lyftPrices.map(({ displayName, price }) => (
        <div>
          {displayName}
          {price}
        </div>
      ))}
      {uberPrices.map(({ displayName, price }) => (
        <div>
          {displayName}
          {price}
        </div>
      ))}
    </div>
  );
};

export default PricesOutput;
