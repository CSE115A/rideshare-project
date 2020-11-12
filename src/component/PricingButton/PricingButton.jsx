import React from "react";
import axios from "axios";
import "./index.scss";

async function getPrices({ pricingEndpoint, changeDisplayPricing }) {
  const params = {
    headers: {
      authentication: "3529c67e-78c2-4b05-9216-4c38b29624fa",
    },
    params: {
      start_lat: "38.0067935",
      start_lng: "-122.5496167",
      end_lat: "37.9742222",
      end_lng: "-122.5329032",
    },
  };
  const response = await axios
    .get(pricingEndpoint, params)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data;
    });
  changeDisplayPricing(response);
}

const PricingButton = ({ changeDisplayPricing }) => {
  const pricingEndpoint = "http://localhost:5000/cse115a/us-central1/getPrices";
  return (
    <div className="PricingButton">
      <button
        className="PricingButton__button"
        onClick={() => getPrices({ pricingEndpoint, changeDisplayPricing })}
      >
        Get Price!
      </button>
    </div>
  );
};

export default PricingButton;
