import React, { useEffect, useRef, useState } from "react";
import "./maps.scss";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const googleMapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Location = ({ text, index }) => (
  <div>
    <div className="LocationPin">
      <Icon icon={locationIcon} className={"LocationPin__icon" + index} />
    </div>
    <div className="LocationPin__text">{text}</div>
  </div>
);

const Map = ({ startLocation, endLocation, zoomLevel }) => {
  const mapping = [startLocation, endLocation];
  const map = useRef(null);
  const [lineRef, setLine] = useState(null);
  useEffect(() => {
    if (map.current.maps_ != null) {
      const paths = [];
      // creates paths { lat, lng }
      for (const props of [startLocation, endLocation]) {
        if (typeof props.geoCodes.lng != "undefined") {
          paths.push(props.geoCodes);
        }
      }
      // sets the new bounds
      if (paths.length !== 0) {
        const bounds = new map.current.maps_.LatLngBounds();
        paths.map((geoCodes) =>
          bounds.extend(
            new map.current.maps_.LatLng(geoCodes.lat, geoCodes.lng)
          )
        );
        map.current.map_.fitBounds(bounds);
      }
      // resets zoom level
      if (paths.length === 1) {
        map.current.map_.setZoom(14);
      }
      // creates the polyline
      if (paths.length === 2) {
        lineRef.setPath(paths);
        lineRef.setMap(map.current.map_);
      } else {
        // removes polyline
        lineRef.setMap(null);
      }
    }
  }, [startLocation, endLocation, lineRef]);
  return (
    <div className="Map">
      <GoogleMapReact
        ref={map}
        bootstrapURLKeys={{ key: googleMapsKey }}
        defaultCenter={{ lat: 36.9881, lng: -122.0582 }}
        defaultZoom={zoomLevel}
        onGoogleApiLoaded={({ maps }) => {
          setLine(
            new maps.Polyline({
              geodesic: true,
              strokeColor: "#0CC4F8",
              strokeOpacity: 1.0,
              strokeWeight: 3,
              path: [],
            })
          );
        }}
        yesIWantToUseGoogleMapApiInternals
      >
        {mapping.map(({ address, geoCodes }, index) => {
          if (geoCodes.lng) {
            return (
              <Location
                key={index}
                index={index + 1}
                text={address}
                lat={geoCodes.lat}
                lng={geoCodes.lng}
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
