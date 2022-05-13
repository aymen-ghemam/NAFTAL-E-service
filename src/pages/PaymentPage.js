import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="container">
      <Header />
      <table className="commandeTotal">
        <thead>
          {" "}
          <th>Command</th>
          <th>Total</th>
        </thead>
        <tbody>
          <td>42342</td>
          <td>2000.00DZD</td>
        </tbody>
      </table>
      <form>
        <div className="input">
          <laber> Credit card number</laber>
          <input type="number"></input>
        </div>
        <div className="input ">
          <label> Expiration Date</label>
          <div className="expiration">
            <input type="Date"></input>
            <p> / </p>

            <input type="number"></input>
          </div>
        </div>
        <div className="input">
          <laber> Your name</laber>
          <input type="number"></input>
        </div>
        <div className="input">
          <laber> CVC2/CW2 code</laber>
          <input type="number" placeholder="..."></input>
        </div>
        <input type="button" classname="validate" value="validate" />{" "}
      </form>
      <NavigationBar />
    </div>
  );
};

export default PaymentPage;
