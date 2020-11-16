import React, { useState } from "react";
import { getPredictions } from "./Predictions";
import "./AddressForm.scss";

const AddressForm = ({
  originAddress,
  destinationAddress,
  changeOriginAddress,
  changeDestinationAddress,
}) => {
  const [originSuggestions, changeOriginSuggestions] = useState([]);
  const [destinationSuggestions, changeDestinationSuggestions] = useState([]);

  return (
    <div className="AddressForm">
      <div className="AddressForm__originContainer">
        <div className="AddressForm__originLabel">Pick-Up Location:</div>
        <input
          id="FromInput"
          type="text"
          className="AddressForm__originInput"
          placeholder="Enter Pickup Location"
          value={originAddress}
          onChange={async (e) => {
            changeOriginAddress(e.target.value);
            changeOriginSuggestions(
              await getPredictions({ input: e.target.value })
            );
          }}
        />
        {originSuggestions !== undefined &&
          originSuggestions.map(({ description }) => (
            <li
              key={description}
              onClick={() => changeOriginAddress(description)}
            >
              {description}
            </li>
          ))}
      </div>
      <div className="AddressForm__destinationContainer">
        <div className="AddressForm__destinationLabel">Drop Off Location:</div>
        <input
          id="ToInput"
          type="text"
          placeholder="Enter Dropoff Location"
          value={destinationAddress}
          onChange={async (e) => {
            changeDestinationAddress(e.target.value);
            changeDestinationSuggestions(
              await getPredictions({ input: e.target.value })
            );
          }}
        />
        {destinationSuggestions !== undefined &&
          destinationSuggestions.map(({ description }) => (
            <li
              key={description}
              onClick={() => changeDestinationAddress(description)}
            >
              {description}
            </li>
          ))}
      </div>
    </div>
  );
};

export default AddressForm;
