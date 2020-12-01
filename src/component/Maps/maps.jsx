import React from "react";
import "./maps.scss";
import GoogleMapReact from "google-map-react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const google_maps_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Marker = ({ text }) => (
  <div>
    <div className="LocationPin">
      <Icon icon={locationIcon} className="LocationPin__icon" />
    </div>
    <div>{text}</div>
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
        {[startLocation, endLocation].map((position) => (
          <Marker
            text={position.address}
            lat={position.lat}
            lng={position.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
