import React from "react";
<<<<<<< HEAD
=======
import {Link} from 'react';

>>>>>>> 675253896143c2167918cce583ef79b25ba61726
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    
      <div className="navbar">
        <a href='#' to={'#'} className="iconContainer">
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
