import React from "react";
import "./maps.scss";
import GoogleMapReact from "google-map-react";


import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import Polyline from "google-map-react";
const google_maps_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Location1 = ({ text1 }) => (
  <div className="LocationPin">
    <Icon icon={locationIcon} className="LocationPin__icon" />
  </div>
);
const Location2 = ({ text2 }) => (
  <div className="LocationPin">
    <Icon icon={locationIcon} className="LocationPin__icon" />
  </div>
);
const Marker = ({ text }) => <div>{text}</div>;



//Map component that takes in a location and zoom level
const Map = ({pathCoords, startLocation, endLocation, zoomLevel }) => {
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_maps_key }}
        defaultCenter={startLocation}
        defaultZoom={zoomLevel}
      >
         <Location1 className="pin"
          lat={startLocation.lat}
          lng={startLocation.lng}
          text1={startLocation.address}
        /> 

        <Location2
          lat={endLocation.lat}
          lng={endLocation.lng}
          text2={endLocation.address}
        /> 
        {/* <Polyline 
        path = {pathCoords}
        geodesic = {true}
        strokeColor = {'#669DF6'}
        strokeOpacity = {1.0}
        strokeWeight = {2}
        /> */}
      </GoogleMapReact>
    </div>
  );
};


export default Map;
