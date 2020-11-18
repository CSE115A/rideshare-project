import React from "react";
import "./maps.scss";
import GoogleMapReact from "google-map-react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

//Map component that takes in a location and zoom level
const Map = ({ location, zoomLevel }) => {
  return (
    <div id="map" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.long}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
