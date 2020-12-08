/* eslint-disable no-unused-vars */ /* DELETE THIS ENTIRE LINE WHEN WE USE THE VARIABLES uberPrices AND lyftPrices */
import React, { useState, useEffect } from "react";
import "./index.scss";
import AddressForm from "component/AddressForm/AddressForm";
import PricingButton from "component/PricingButton/PricingButton";
import Map from "component/Maps/maps";
import PricesOutput from "component/PricesOutput/index";

const LandingPageView = () => {
  const [originAddress, changeOriginAddress] = useState({
    address: "",
    geoCodes: {},
  });
  const [destinationAddress, changeDestinationAddress] = useState({
    address: "",
    geoCodes: {},
  });
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
      <div className="LandingPage__topHalf">
        <div className="LandingPage__topLeftSide">
          <AddressForm
            originAddress={originAddress}
            destinationAddress={destinationAddress}
            changeOriginAddress={changeOriginAddress}
            changeDestinationAddress={changeDestinationAddress}
          />
          <PricingButton
            changeDisplayPricing={changeDisplayPricing}
            originAddress={originAddress}
            destinationAddress={destinationAddress}
          />
        </div>
        <div className="LandingPage__topRightSide">
          <Map
            startLocation={originAddress}
            endLocation={destinationAddress}
            zoomLevel={9}
          />
        </div>
      </div>
      <div className="LandingPage__bottomHalf">
        {Object.keys(uberPrices).length !== 0 &&
          Object.keys(lyftPrices).length !== 0 && (
            <PricesOutput lyftPrices={lyftPrices} uberPrices={uberPrices} />
          )}
      </div>
    </div>
  );
};

export default LandingPageView;
