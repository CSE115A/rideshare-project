import React from "react";
import axios from "axios";
import "./index.scss";

const authToken = process.env.REACT_APP_PRICES_AUTH_TOKEN;
const pricesEndpoint = process.env.REACT_APP_PRICES_ENDPOINT;

async function getPrices({ changeDisplayPricing }) {
  const params = {
    headers: {
      authentication: authToken,
    },
    params: {
      start_lat: "38.0067935",
      start_lng: "-122.5496167",
      end_lat: "37.9742222",
      end_lng: "-122.5329032",
    },
  };
  const response = await axios
    .get(pricesEndpoint, params)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data;
    });
  changeDisplayPricing(response);
}

const PricingButton = ({ changeDisplayPricing }) => {
  return (
    <div className="PricingButton">
      <button
        className="PricingButton__button"
        onClick={() => getPrices({ changeDisplayPricing })}
      >
        Compare!
      </button>
    </div>
  );
};

export default PricingButton;
