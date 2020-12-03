import React from "react";
import "./maps.scss";
import GoogleMapReact from "google-map-react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const google_maps_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const Location = ({ text, index }) => (
  <div>
    <div className="LocationPin">
      <Icon icon={locationIcon} className={"LocationPin__icon" + index} />
    </div>
    <div className="LocationPin__text">{text}</div>
  </div>
);
const renderPoly = (map, maps, locations) => {
  const paths = [];
  for (const props of locations) {
    paths.push(props.geoCodes);
  }
  let line = new maps.Polyline({
    path: paths,
    geodesic: true,
    strokeColor: "#0CC4F8",
    strokeOpacity: 1.0,
    strokeWeight: 4,
  });
  if (
    Object.keys(locations[0].geoCodes).length !== 0 &&
    Object.keys(locations[1].geoCodes).length !== 0
  ) {
    line.setMap(map);

    // set bounds
    let bounds = new maps.LatLngBounds();
    for (let marker of locations) {
      bounds.extend(new maps.LatLng(marker.geoCodes.lat, marker.geoCodes.lng));
    }
    map.fitBounds(bounds);
  }
};

//Map component that takes in a location and zoom level
const Map = ({ startLocation, endLocation, zoomLevel }) => {
  const mapping = [
    { type: "origin", option: startLocation },
    { type: "destination", option: endLocation },
  ];
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_maps_key }}
        defaultCenter={{ lat: 37.3639, lng: -121.9289 }}
        defaultZoom={zoomLevel}
        onGoogleApiLoaded={({ map, maps }) => {
          renderPoly(map, maps, [startLocation, endLocation]);
        }}
        yesIWantToUseGoogleMapApiInternals
      >
        {mapping.map(({ type, option }, index) => {
          if (typeof option.geoCodes != {}) {
            console.log(option);
            console.log(index);
            return (
              <Location
                key={type}
                index={index + 1}
                text={option.address}
                lat={option.geoCodes.lat}
                lng={option.geoCodes.lng}
              />
            );
          }
          return null;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
