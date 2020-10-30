import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../component/landing/index";

const Routes = () => {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
