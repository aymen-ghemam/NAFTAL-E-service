import React from "react";
import {Link} from 'react';

import "./NavigationBar.css";
const NavigationBar = (props) => {
  return (
    
      <div className="navbar">
        <a href='#' className="iconContainer">
          {/* <MapIcon className="icon" /> */}
          <img className="icon-img" src="../../assets/profil.svg"/>
          <p className="icon-text"> Profil</p>
        </a>
        <a href='#' className="iconContainer">
          {/* <MapIcon className="icon" /> */}
          <img className="icon-img" src="../../assets/map.svg"/>
          <p className="icon-text"> Map</p>
        </a>

        <a href='#' className="iconContainer" >
          {/* <MapIcon className="icon" /> */}

          <img className="icon-img"  src="../../assets/payment.svg"/>
          <p className="icon-text"> Payment</p>
        </a>
      </div>
  
  );
};

export default NavigationBar;
