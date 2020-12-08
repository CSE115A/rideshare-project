import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "component/LocationPin/index";
import "./index.scss";

const googleMapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = ({ startLocation, endLocation, zoomLevel }) => {
  const mapping = { startLocation, endLocation };
  const map = useRef(null);
  const [lineRef, setLine] = useState(null);

  useEffect(() => {
    if (map.current.maps_ != null) {
      const paths = [];
      for (const props of [startLocation, endLocation]) {
        if (typeof props.geoCodes.lng != "undefined") {
          paths.push(props.geoCodes);
        }
      }
      if (paths.length !== 0) {
        const bounds = new map.current.maps_.LatLngBounds();
        paths.map((geoCodes) =>
          bounds.extend(
            new map.current.maps_.LatLng(geoCodes.lat, geoCodes.lng)
          )
        );
        map.current.map_.fitBounds(bounds);
      }
      if (paths.length === 1) {
        map.current.map_.setZoom(14);
      }
      if (paths.length === 2) {
        lineRef.setPath(paths);
        lineRef.setMap(map.current.map_);
      } else {
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
        {Object.entries(mapping).map(([type, { address, geoCodes }]) => (
          <LocationPin
            key={type}
            type={type}
            address={address}
            lat={geoCodes.lat}
            lng={geoCodes.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
