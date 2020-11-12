import React, { useState } from "react";
import "./AddressForm.scss";

const AddressForm = () => {
  const [originAddress, changeOriginAddress] = useState("");
  const [destinationAddress, changeDestinationAddress] = useState("");

  return (
    <>
      <form className="InputForm">
        <label className="FromLabel">
          Pick-Up Location:
          <input
            id="FromInput"
            type="text"
            value={originAddress}
            onChange={(e) => changeOriginAddress(e.target.value)}
          />
        </label>
        <label className="ToInput">
          Drop Off Location:
          <input
            id="ToInput"
            type="text"
            value={destinationAddress}
            onChange={(e) => changeDestinationAddress(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};

export default AddressForm;
