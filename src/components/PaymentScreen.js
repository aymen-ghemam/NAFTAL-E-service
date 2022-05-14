import React from "react";
import "./PaymentScreen.css";

const PaymentScreen = (props) => {
  return (
    <img onClick={() => props.onClick(2)} className='baridi' src='/assets/baridi.jpg' alt='' />
  );
};

export default PaymentScreen;
