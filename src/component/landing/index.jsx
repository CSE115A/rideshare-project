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

  //Hard coding address of google
  const startLocation = {
    address: "1600 Amphitheatre Parkway, Mountain View, California",
    geoCodes: {
      lat: 37.42216,
      lng: -122.08427,
    },
  };

  const endLocation = {
    address: "1701 Airport Blvd, San Jose, California",
    geoCodes: {
      lat: 37.3639,
      lng: -121.9289,
    },
  };

  const pathCoords = [
    { lat: startLocation.lat, lng: startLocation.lng },
    { lat: endLocation.lat, lng: endLocation.lng },
  ];

  return (
    <div className="LandingPage">
      <h1>Service Price Comparer</h1>
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
      <Map
        pathCoords={pathCoords}
        startLocation={startLocation}
        endLocation={endLocation}
        zoomLevel={11}
      />
      {Object.keys(uberPrices).length !== 0 &&
        Object.keys(lyftPrices).length !== 0 && (
          <PricesOutput lyftPrices={lyftPrices} uberPrices={uberPrices} />
        )}
    </div>
  );
};

export default LandingPageView;
