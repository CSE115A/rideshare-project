import React from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";

const autocompleteEndpoint = process.env.REACT_APP_AUTOCOMPLETE_ENDPOINT;
const getGeoEndpoint = process.env.REACT_APP_GETGEO_ENDPOINT;
const authToken = process.env.REACT_APP_PRICES_AUTH_TOKEN;

const SelectLocation = ({ defaultOption, onChange, placeholder }) => {
  const loadOptions = async (inputValue, callback) => {
    const axiosConfig = {
      params: { input: inputValue },
      headers: { authentication: authToken },
    };
    const results = await axios
      .get(autocompleteEndpoint, axiosConfig)
      .then((res) => {
        return res.data.message;
      })
      .catch(() => {
        return [];
      });
    const options = results.map(({ description }) => {
      const value = description.split(",").slice(0, 3).join(",");
      return { value: value, label: description };
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
      onChange={async (change) => {
        const toChange = change ? change.value : "";
        let geoCodes = {};
        if (toChange !== "") {
          geoCodes = await axios
            .get(getGeoEndpoint, {
              headers: { authentication: authToken },
              params: { address: toChange },
            })
            .then((res) => {
              return res.data.message.geo;
            })
            .catch(() => {
              return {};
            });
        }
        onChange({ address: toChange, geoCodes: geoCodes });
      }}
      loadOptions={loadOptions}
      placeholder={placeholder}
      noOptionsMessage={() => "No Results Found"}
      isClearable
    />
  );
};

export default SelectLocation;
