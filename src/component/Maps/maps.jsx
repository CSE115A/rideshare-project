import React from "react";
import "./maps.scss";
import GoogleMapReact from "google-map-react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const google_maps_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const LocationPin1 = ({ text1 }) => (
  <div className="LocationPin">
    <Icon icon={locationIcon} className="LocationPin__icon" />
    <p className="LocationPin__text">{text1}</p>
  </div>
);
const LocationPin2 = ({ text2 }) => (
  <div className="LocationPin">
    <Icon icon={locationIcon} className="LocationPin__icon" />
    <p className="LocationPin__text">{text2}</p>
  </div>
);

//Map component that takes in a location and zoom level
const Map = ({ startLocation, endLocation, zoomLevel }) => {
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_maps_key }}
        defaultCenter={startLocation}
        defaultZoom={zoomLevel}
      >
        <LocationPin1
          lat={startLocation.lat}
          lng={startLocation.lng}
          text1={startLocation.address}
        />
        <LocationPin2
          lat={endLocation.lat}
          lng={endLocation.lng}
          text2={endLocation.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
