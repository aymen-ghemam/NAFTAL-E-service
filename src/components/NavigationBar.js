import React from "react";
import MapIcon from "@mui/icons-material/Map";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="navbar">
      <div classname="iconContainer">
        <MapIcon className="icon" />
        <p> payment</p>
      </div>
      <div classname="iconContainer">
        <MapIcon className="icon" />
        <p> payment</p>
      </div>

      <div classname="iconContainer">
        <MapIcon className="icon" />
        <p> payment</p>
      </div>
    </div>
  );
};

export default NavigationBar;
