import React from "react";
import SelectLocation from "component/SelectMenu/Select";
import "./AddressForm.scss";

const AddressForm = ({
  originAddress,
  destinationAddress,
  changeOriginAddress,
  changeDestinationAddress,
}) => {
  const mapping = [
    {
      type: "origin",
      title: "Pickup Location",
      placeholderText: "Enter Pickup Location",
      option: originAddress,
      onChange: changeOriginAddress,
    },
    {
      type: "destination",
      title: "Dropoff Location",
      placeholderText: "Enter Dropoff Location",
      option: destinationAddress,
      onChange: changeDestinationAddress,
    },
  ];
  return (
    <div className="AddressForm">
      {mapping.map(({ type, title, placeholderText, option, onChange }) => (
        <div key={type} className="AddressForm__intakeContainer">
          <div className="AddressForm__intakeTitle">{title}</div>
          <div className="AddressForm__intakeInput">
            <SelectLocation
              defaultOption={option}
              onChange={onChange}
              placeholder={placeholderText}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressForm;
