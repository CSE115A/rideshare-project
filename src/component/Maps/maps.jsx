import React from "react";
import "./maps.scss";
import GoogleMapReact from "google-map-react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const google_maps_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const LocationPin = ({ text }) => (
  <div className="LocationPin">
    <Icon icon={locationIcon} className="LocationPin__icon" />
    <p className="LocationPin__text">{text}</p>
  </div>
);

//Map component that takes in a location and zoom level
const Map = ({ location, zoomLevel }) => {
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_maps_key }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
