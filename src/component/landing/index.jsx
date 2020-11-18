/* eslint-disable no-unused-vars */ /* DELETE THIS ENTIRE LINE WHEN WE USE THE VARIABLE */
//Google API credential: AIzaSyCfxGc5KaUEsaP1sCXoa96lMxQbH9XATZ4
import React, { useState, useEffect } from "react";
import "./index.scss";
import AddressForm from "component/AddressForm/AddressForm";
import PricingButton from "component/PricingButton/PricingButton";
import Map from "component/Maps/maps";

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

  //Hard coding address of google
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, California.",
    lat: 37.42216,
    long: -122.08427,
  };
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
      <Map location={location} zoomLevel={5} />
    </div>
  );
};

export default LandingPageView;
