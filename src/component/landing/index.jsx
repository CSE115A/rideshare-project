import React, { useState } from "react";
import "./index.scss";
import AddressForm from "../AddressForm/AddressForm";

const LandingPageView = () => {
  const [originAddress, changeOriginAddress] = useState("");
  const [destinationAddress, changeDestinationAddress] = useState("");

  return (
    <div className="LandingPage">
      <h1>Service Price Comparer</h1>
      <AddressForm
        originAddress={originAddress}
        destinationAddress={destinationAddress}
        changeOriginAddress={changeOriginAddress}
        changeDestinationAddress={changeDestinationAddress}
      />
    </div>
  );
};

export default LandingPageView;
