import React from "react";
import Address from "../Address";
import "./index.scss";
import AddressForm from "../AddressForm";
const LandingPageView = () => {
  return (
    <div className="LandingPage">
      <h1>Service Price Comparer</h1>
      <AddressForm render={() => <AddressForm />} />
    </div>
  );
};

export default LandingPageView;
