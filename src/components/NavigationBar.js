import React from "react";
// import MapIcon from "@mui/icons-material/Map";

import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    
      <div className="navbar">
        <div className="iconContainer">
          {/* <MapIcon className="icon" /> */}
          <img className="icon-img" src="../../assets/profil.svg"/>
          <p className="icon-text"> Profil</p>
        </div>
        <div className="iconContainer">
          {/* <MapIcon className="icon" /> */}
          <img className="icon-img" src="../../assets/map.svg"/>
          <p className="icon-text"> Map</p>
        </div>

        <div className="iconContainer" >
          {/* <MapIcon className="icon" /> */}

          <img className="icon-img"  src="../../assets/payment.svg"/>
          <p className="icon-text"> Payment</p>
        </div>
      </div>
  
  );
};

export default NavigationBar;
