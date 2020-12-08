import React from "react";
import axios from "axios";
import "./index.scss";

const authToken = process.env.REACT_APP_PRICES_AUTH_TOKEN;
const pricesEndpoint = process.env.REACT_APP_PRICES_ENDPOINT;



async function getPrices({
  changeDisplayPricing,
  originGeocode,
  destinationGeocode,
}) {
  const params = {
    headers: {
      authentication: authToken,
    },
    params: {
      start_lat: originGeocode.lat,
      start_lng: originGeocode.lng,
      end_lat: destinationGeocode.lat,
      end_lng: destinationGeocode.lng,
    },
  };
  const response = await axios
    .get(pricesEndpoint, params)
    .then((res) => {
      
      return res.data;
    })
    .catch((error) => {
      return {
        error: true,
        status: error.response.status,
        message: {
          lyft: undefined,
          uber: undefined,
        },
      };
    });
  if (response) changeDisplayPricing(response);
}

const PricingButton = ({
  changeDisplayPricing,
  originAddress,
  destinationAddress,
}) => {

  function clearDisplay() {
    const default_display = {
      error: true,
      status: undefined,
      message: {
        lyft: undefined,
        uber: undefined,
      },
    }
    changeDisplayPricing(default_display);
  }

  return (
    <div className="PricingButton">
      <button
        className="PricingButton__button"
        onClick={() => {
          clearDisplay();
          getPrices({
            changeDisplayPricing,
            originGeocode: originAddress.geoCodes,
            destinationGeocode: destinationAddress.geoCodes,
            });
          }
        }
      >
        Compare!
      </button>
    </div>
  );
};

export default PricingButton;
