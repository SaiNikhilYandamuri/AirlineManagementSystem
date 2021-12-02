import React, { useState } from "react";
import { Col, Button, Form, Alert } from "react-bootstrap";
import Axios from "axios";
import endPointObj from "../../endPointObj";

const flightNoofPassengers = sessionStorage.getItem("noofpassengers");
let parsedInfo = JSON.parse(sessionStorage.getItem("selectFlight"));

if (parsedInfo == undefined) {
  parsedInfo = {};
}

const source = parsedInfo.source_city;
const destination = parsedInfo.destination_city;
const flightOperator = "Quatar";
const startTime = parsedInfo.start_time;
console.log(startTime);
const end_time = parsedInfo.end_time;
const flightDate = parsedInfo.start_date;
const day = new Date(flightDate).getUTCDate();
const month = new Date(flightDate).getUTCMonth();
const year = new Date(flightDate).getUTCFullYear();
const newDate = year + "-" + month + "-" + day;
const price = parsedInfo.price;


function Thankyou() {
  const [alert, setAlert] = useState("");
  const handlecancel = (e) => {
    e.preventDefault();
    const startDate = newDate;
    
  };

  const showBooking = () => {
    return (
      <div>
        <h5>
          <strong className="color-red-3">{flightOperator}</strong>
        </h5>
        <h4>
          <b>
            {source}
            to {destination}
          </b>
        </h4>
        <h5>
          {flightOperator} -{" "}
          <span className="color-red-3">
            {" "}
            One Way - Economy - Adults : {flightNoofPassengers}
          </span>
        </h5>

        <div className="fi_block">
          <div className="flight-icon col-xs-4 col10">
            <img
              className="fi_icon"
              src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png"
              height="25"
              width="25"
              alt=""
            />
            <div className="fi_content">
              <div className="fi_title color-dark-2">
                <h5>Depart</h5>
              </div>
              <div className="fi_title color-dark-2">
                {startTime}
                <br />
                {newDate}
              </div>
            </div>
          </div>

          <div className="flight-icon col-xs-4 col10">
            <img
              className="fi_icon"
              src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png"
              height="25"
              width="25"
              alt=""
            />
            <div className="fi_content">
              <div className="fi_title color-dark-2">
                <h5>Arrive</h5>
              </div>
              <div className="fi_title color-dark-2">
                {end_time}
                <br />
              </div>
            </div>
          </div>
          <div className="flight-icon col-xs-4 col10"></div>
        </div>

        <div className="col-sm-12">
          <h4>
            <strong className="color-red-3">FARE DETAILS</strong>
          </h4>
          <br />

          <div className="col-sm-2">
            <h6>Adults</h6>
          </div>

          <div className="col-sm-2">
            <h6>Base</h6>
          </div>

          <div className="col-sm-2">
            <h6>Taxes & Fees</h6>
          </div>

          <div className="col-sm-4">
            <h6>Per Traveller</h6>
          </div>

          <div className="2">
            <h6>Total</h6>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="col-sm-2">
            <h6>
              <span className="color-red-3">{flightNoofPassengers}</span>
            </h6>
          </div>

          <div className="col-sm-2">
            <h6>
              <span className="color-red-3">{price}</span>
            </h6>
          </div>

          <div className="col-sm-2">
            <h6>
              <span className="color-red-3">{(price * 0.09).toFixed(2)}</span>
            </h6>
          </div>

          <div className="col-sm-4">
            <h6>
              <span className="color-red-3">{(price * 1.09).toFixed(2)}</span>
            </h6>
          </div>

          <div className="col-sm-2">
            <h4>
              <strong>
                <span className="color-red-3">
                  {(price * flightNoofPassengers * 1.09).toFixed(2)}
                </span>
              </strong>
            </h4>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <hr />
      <div>
        <div className="container">
          <div className="row list-wrapper  bg-grey-2">
            <div className="col-md-12">
              <div className="list-content clearfix">
                <div className="list-item-entry">
                  <div className="hotel-item style-10 bg-white">
                    <div className="table-view">
                      <div className="title hotel-middle cell-view">
                        <h3>Thank you ! Your payment is successful :)</h3>

                        <br />

                        <h4>The booking details are</h4>

                        {showBooking()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
