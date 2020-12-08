import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import cx from "classnames";
import "./index.scss";

const LocationPin = ({ type, address }) => {
  if (address === "") return null;

  return (
    <>
      <div className="LocationPin">
        <Icon
          icon={locationIcon}
          className={cx("LocationPin__icon", {
            "LocationPin__icon--origin": type === "startLocation",
            "LocationPin__icon--destination": type === "endLocation",
          })}
        />
      </div>
      <div className="LocationPin__text">{address}</div>
    </>
  );
};

export default LocationPin;
