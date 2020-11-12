import React from "react";
import "./index.scss";
import AddressForm from "../AddressForm/AddressForm";

const LandingPageView = () => {
  return (
    <div className="LandingPage">
      <h1>Service Price Comparer</h1>
      <AddressForm />
    </div>
  );
};

export default LandingPageView;
