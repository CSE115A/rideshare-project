import React from "react";
import Address from "../Address";
import "./index.scss";

const LandingPageView = () => {
  return (
    <div className="LandingPage">
      <h1>Service Price Comparer</h1>
      <Address text="From:" render={() => <Address />} />
      <Address text="To:" render={() => <Address />} />
      <button class="submitButton" type="button">
        Submit
      </button>
    </div>
  );
};

export default LandingPageView;
