import React from "react";
import "./maps.scss";
import GoogleMapReact from 'google-map-react';

//Hard coding address of google 
const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, California.',
    lat: 37.42216,
    long: -122.08427,
  }

//Map component that takes in a location and zoom level
const Map = ({location, zoomLevel})=>{
    return(
    <div class="map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'API key goes here' }}
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

