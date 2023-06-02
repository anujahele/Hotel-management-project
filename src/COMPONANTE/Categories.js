import React from "react";

let one = require("../ASSETES/one.png");
let two = require("../ASSETES/two.png");
let three = require("../ASSETES/three.png");
let four = require("../ASSETES/four.png");
let five = require("../ASSETES/five.png");

const items = [
  {
    image: one,
    text: "pick-up",
  },
  {
    image: two,
    text: "soft Drinks",
  },
  {
    image: three,
    text: "Bakery Items",
  },
  {
    image: four,
    text: "Fast Food",
  },
  {
    image: five,
    text: "Deals",
  },
];

function Categories() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5px",
        padding: "15px",
        backgroundColor: "#fff",
        marginBottom: "10px",
      }}
    >
      {items.map((item, index) => (
        <div key={index} style={{ alignItems: "center", marginRight: "150px" }}>
          <img
            src={items[index].image}
            alt=""
            style={{ width: "50px", height: "50px", resizeMode: "contain" }}
          />
          <h5
            style={{
              fontFamily: "lexend",
              fontSize: "16px",
              fontweight: "400",
              lineHeight: "20px",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}>
            {items[index].text}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default Categories;
