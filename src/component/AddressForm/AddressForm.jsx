import React from "react";
import { getPredictions } from "./Predictions";
import "./AddressForm.scss";

const AddressForm = ({
  originAddress,
  destinationAddress,
  changeOriginAddress,
  changeDestinationAddress,
}) => {
  return (
    <>
      <form className="InputForm" autoComplete="off">
        <label className="FromLabel">
          Pick-Up Location:
          <input
            id="FromInput"
            type="text"
            placeholder="Enter Pickup Location"
            value={originAddress}
            onChange={(e) => {
              changeOriginAddress(e.target.value);
              getPredictions({ input: e.target.value });
            }}
          />
        </label>
        <label className="ToInput">
          Drop Off Location:
          <input
            id="ToInput"
            type="text"
            placeholder="Enter Dropoff Location"
            value={destinationAddress}
            onChange={(e) => {
              changeDestinationAddress(e.target.value);
              getPredictions({ input: e.target.value });
            }}
          />
        </label>
      </form>
    </>
  );
};

export default AddressForm;
