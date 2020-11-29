import React from "react";
import axios from "axios";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const authToken = process.env.REACT_APP_PRICES_AUTH_TOKEN;
const pricesEndpoint = process.env.REACT_APP_PRICES_ENDPOINT;
const useStyles = makeStyles({
  PricingButton__button: {
    background: "linear-gradient(45deg, #0BD989 30%, #0BD989 99%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

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
  const classes = useStyles();
  return (
    <div className="PricingButton">
      <Button
        className={classes.PricingButton__button}
        onClick={() => getPrices({ changeDisplayPricing })}
      >
        Compare!
      </Button>
    </div>
  );
};

export default PricingButton;
