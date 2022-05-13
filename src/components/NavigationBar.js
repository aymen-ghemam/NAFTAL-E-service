import React from "react";
import { Link } from "react";

import "./NavigationBar.css";
const NavigationBar = (props) => {
  return (
    <div className="navbar">
      <a onClick={() => props.setPage(1)} href="#" className="iconContainer">
        {/* <MapIcon className="icon" /> */}
        {props.page == 1 ? (
          <img className="icon-img" src="../../assets/profilSelected.svg" />
        ) : (
          <img className="icon-img" src="../../assets/profil.svg" />
        )}
        <p className="icon-text"> Profil</p>
      </a>
      <a onClick={() => props.setPage(2)} href="#" className="iconContainer">
        {/* <MapIcon className="icon" /> */}
        {props.page == 2 ? (
          <img className="icon-img" src="../../assets/mapSelected.svg" />
        ) : (
          <img className="icon-img" src="../../assets/map.svg" />
        )}
        <p className="icon-text"> Map</p>
      </a>
      <a onClick={() => props.setPage(3)} href="#" className="iconContainer">
        {/* <MapIcon className="icon" /> */}
        {props.page == 3 ? (
          <img className="icon-img" src="../../assets/storeSelected.svg" />
        ) : (
          <img className="icon-img" src="../../assets/store.svg" />
        )}
        <p className="icon-text"> Store</p>
      </a>

      <a onClick={() => props.setPage(4)} href="#" className="iconContainer">
        {/* <MapIcon className="icon" /> */}
        {props.page == 4 ? (
          <img className="icon-img" src="/assets/paymentSelected.svg" />
        ) : (
          <img className="icon-img" src="../../assets/payment.svg" />
        )}
        <p className="icon-text"> Payment</p>
      </a>
    </div>
  );
};

export default NavigationBar;
