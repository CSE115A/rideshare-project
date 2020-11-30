/* eslint-disable no-unused-vars */ /* DELETE THIS ENTIRE LINE WHEN WE USE THE VARIABLE */
import React, { useState, useEffect } from "react";
import "./index.scss";
import AddressForm from "component/AddressForm/AddressForm";
import PricingButton from "component/PricingButton/PricingButton";
import ButtonAppBar from "component/AppBar/AppBar";

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
      <ButtonAppBar />
      <div className="top-half">
        <div className="top-left-side">
          <AddressForm
            originAddress={originAddress}
            destinationAddress={destinationAddress}
            changeOriginAddress={changeOriginAddress}
            changeDestinationAddress={changeDestinationAddress}
          />
        </div>
        <div className="top-right-side">GoogleMaps</div>
      </div>
      <PricingButton changeDisplayPricing={changeDisplayPricing} />
    </div>
  );
};

export default LandingPageView;
