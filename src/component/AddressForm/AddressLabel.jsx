import React, { useState } from "react";

const AddressLabel = (props) => {
  const [address, changeAddress] = useState("");

  return (
    <label className={props.labelClassName}>
      {props.label}
      <input
        id={props.inputId}
        type="text"
        value={address}
        onChange={(e) => changeAddress(e.target.value)}
      />
    </label>
  );
};

export default AddressLabel;
