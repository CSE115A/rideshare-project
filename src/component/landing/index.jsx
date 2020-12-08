import React, { useState, useEffect } from "react";
import AddressForm from "component/AddressForm/index";
import PricingButton from "component/PricingButton/index";
import Map from "component/Maps/index";
import PricesOutput from "component/PricesOutput/index";
import "./index.scss";
import ButtonAppBar from "component/AppBar/AppBar";

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
      <ButtonAppBar classname="LandingPage__title" />
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
