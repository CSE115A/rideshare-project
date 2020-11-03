import React from "react";
import Address from "../Address";
import "./index.scss";

const LandingPageView = () => {
  return (
    <div className="LandingPage">
      <h1>Service Price Comparer</h1>
      <div className ="Tab1">Rideshare</div>
      <div className = "Tab2">Food Delivery</div>
      <Address text="Enter Pickup Location:" render={() => <Address />} />
      <Address text="Enter Destination:" render={() => <Address />} />
      <button class="submitButton" type="button">
        Submit
      </button>
    </div>
  );
};

export default LandingPageView;
