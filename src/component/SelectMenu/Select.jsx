import React from "react";
import AsyncSelect from "react-select/async";
import { getPredictions } from "component/AddressForm/Predictions";

const SelectLocation = ({ defaultOption, onChange, placeholder }) => {
  const loadOptions = async (inputValue, callback) => {
    const results = await getPredictions({ input: inputValue });
    const options = results.map(({ description }) => {
      return { value: description, label: description };
    });
    callback(options);
  };

  return (
    <AsyncSelect
      defaultOptions={defaultOption}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      onChange={(change) => {
        const toChange = change ? change.value : "";
        onChange(toChange);
      }}
      loadOptions={loadOptions}
      placeholder={placeholder}
      noOptionsMessage={() => "No Results Found"}
      isClearable
    />
  );
};

export default SelectLocation;
