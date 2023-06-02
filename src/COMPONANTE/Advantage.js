import React from "react";
import "./Advantage.css";

let six = require("../ASSETES/six.png");
let seven = require("../ASSETES/seven.png");
let eight = require("../ASSETES/eight.png");
let nine = require("../ASSETES/nine.png");
let ten = require("../ASSETES/ten.png");

const items = [
  {
    image: six,
    text: "BREAKFAST",
    subtext:
      "There has never been a sadness that can not be cured with breakfast food",
  },
  {
    image: seven,
    text: "WIFI",
    subtext: "Get the best wifi connectivity without any interference",
  },
  {
    image: eight,
    text: "PICKUP",
    subtext:
      "Ride out of town at affordable one-way and round-trip fares with us intercity travel service",
  },
  {
    image: nine,
    text: "AIR TICKETS",
    subtext:
      "Flight booking, cheap air ticket of domestic & international airlines with us",
  },
  {
    image: ten,
    text: "FREE PARKING",
    subtext: "Free parking will be provides ,feel like Home.",
  },
];

function Advantage() {
  return (
    <>
      <div className="advantages">
        <div className="advantages_info">
          <div className="adv_header">
            <h1>Advantages of Staying with us</h1>
            <h4>sapien gravida dolor commodo.</h4>
          </div>
          <div style={{ justifyContent: "center", marginTop: 5 }}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  alignItems: "center",
                  marginRight: 30,
                  display: "flex",
                  marginLeft: "143px",
                }}
              >
                <img src={items[index].image} className="adv_img" alt="" />
               <div>
               <h5 className="adv_h5">
                     {items[index].text}
                   </h5>
                   <h5 className="adv_h">
                     {items[index].subtext}
                   </h5>
               </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Advantage;
