import React from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";

const autocompleteEndpoint = process.env.REACT_APP_AUTOCOMPLETE_ENDPOINT;
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
      return { value: description, label: description };
    });
    callback(options);
  };

  return (
    <AsyncSelect
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary25: "#0CC4F8",
          primary: "#0BD989",
          neutral20: "#0CC4F8",
          neutral30: "#0CC4F8",
        },
        borderColor: "red",
        borderWidth: "5px",
      })}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      defaultOptions={defaultOption}
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
