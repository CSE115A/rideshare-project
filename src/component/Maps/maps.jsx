import React from "react";
import "./maps.scss";
import GoogleMapReact from "google-map-react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const google_maps_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const Location1 = ({ text1 }) => (
  <div className="LocationPin">
    <Icon icon={locationIcon} className="LocationPin__icon1" />
  </div>
);
const Location2 = ({ text2 }) => (
  <div className="LocationPin">
    <Icon icon={locationIcon} className="LocationPin__icon2" />
  </div>
);
const renderPoly = (map, maps, locations) => {
  let line = new maps.Polyline({
    path: locations,
    geodesic: true,
    strokeColor: "#0CC4F8",
    strokeOpacity: 1.0,
    strokeWeight: 4,
  });
  line.setMap(map);

  // set bounds
  let bounds = new maps.LatLngBounds();
  for (let marker of locations) {
    bounds.extend(new maps.LatLng(marker.lat, marker.lng));
  }
  map.fitBounds(bounds);
};

//Map component that takes in a location and zoom level
const Map = ({ startLocation, endLocation, zoomLevel }) => {
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_maps_key }}
        defaultCenter={startLocation}
        defaultZoom={zoomLevel}
        onGoogleApiLoaded={({ map, maps }) => {
          renderPoly(map, maps, [startLocation, endLocation]);
        }}
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
      </GoogleMapReact>
    </div>
  );
};

export default Map;
