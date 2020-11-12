/* eslint-disable no-unused-vars */ /* DELETE THIS ENTIRE LINE WHEN WE USE THE VARIABLE */
import React, { useState, useEffect } from "react";
import "./index.scss";
import AddressForm from "../AddressForm/AddressForm";
import PricingButton from "../PricingButton/PricingButton";

const LandingPageView = () => {
  const [originAddress, changeOriginAddress] = useState("");
  const [destinationAddress, changeDestinationAddress] = useState("");
  const [pricingToDisplay, changeDisplayPricing] = useState({
    error: true,
    status: undefined,
    message: {
      lyft: undefined,
      uber: undefined,
    },
  });
  const [uberPrices, changeUberPrices] = useState([]);
  const [lyftPrices, changeLyftPrices] = useState([]);

  useEffect(() => {
    if (!pricingToDisplay.error) {
      changeUberPrices(pricingToDisplay.message.uber);
      changeLyftPrices(pricingToDisplay.message.lyft);
    }
  }, [pricingToDisplay]);

  return (
    <div className="LandingPage">
      <h1>Service Price Comparer</h1>
      <AddressForm
        originAddress={originAddress}
        destinationAddress={destinationAddress}
        changeOriginAddress={changeOriginAddress}
        changeDestinationAddress={changeDestinationAddress}
      />
      <PricingButton changeDisplayPricing={changeDisplayPricing} />
    </div>
  );
};

export default LandingPageView;
