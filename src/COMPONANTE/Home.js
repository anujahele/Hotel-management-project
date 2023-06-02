import React from "react";
import Advantage from "./Advantage";
import Banner from "./Banner";
import Card from "./Card";
import Categories from "./Categories";
import Footer from "./Footer";
import "./Home.css";

let p1 = require("../ASSETES/ITC.jpg" );
let p2 = require("../ASSETES/HYATT.jpg");
let p3 = require("../ASSETES/EVEN.jpg");
//let p4 = require("../ASSETES/p4.png");

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_categories">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "180px",
            marginBottom: "90px",
            height: "15vh",
          }}
        >
          <div 
            style={{
              background: "#E54",
              height: "170px",
              width: "50%",
              zIndex: "-1",
              position: "absolute",
              
            }}
          ></div>
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              background: "transparent",
              zIndex: "1",
              marginRight: "480px",
            }}
          >
            <h1
              style={{ marginBottom: "0px" }}
              className="quote_h1"
            >
              Full service, at your disposal
            </h1>
            <h4
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "gray",
                marginTop: "0px",
              }}
              className="quote_h4"
            >
              More than you can Imagine
            </h4>
          </div>
        </div>
        <Categories />
        <div
          style={{
            display: "",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "60px",
            marginBottom: "120px",
            height: "15vh",
          }}
        >
          <div
            style={{
              background: "#E88A04",
              height: "170px",
              width: "50%",
              zIndex: "-1",
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              background: "transparent",
              zIndex: "1",
              marginRight: "480px",
            }}
          >
            <h1
              style={{ color: "rgb(11, 93, 93)", marginBottom: "0px" }}
              className="quote_h1"
            >
              Choose What's Best For You!
            </h1>
            <h4
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "gray",
                marginTop: "0px",
              }}
              className="quote_h4"
            >
              Make Your Vacation Comfortable.
            </h4>
          </div>
        </div>
      </div>
      <div className="home_section">
        <Card src={p1} title="Hotel ITC By Natural Hotels"
          description="Start your Weekend at the Hotel ITC by Natural Hotels with a fUll breakfast,
          then visit the museum and Art Gallary,
           home to a beautiful collection of histrorical document, 
           Indian art and a beautiful exhibition on the region's history."/>
         <Card src={p2} title="Hotel HYATT By Natural Hotels"
          description="Start your Weekend at the Hotel ITC by Natural Hotels with a fUll breakfast,
          then visit the museum and Art Gallary,
           home to a beautiful collection of histrorical document, 
           Indian art and a beautiful exhibition on the region's history."/>
           <Card src={p3} title="Hotel EVEN By Natural Hotels"
          description="Start your Weekend at the Hotel ITC by Natural Hotels with a fUll breakfast,
          then visit the museum and Art Gallary,
           home to a beautiful collection of histrorical document, 
           Indian art and a beautiful exhibition on the region's history."/>
        </div>
      <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "60px",
            marginBottom: "120px",
            height: "15vh",
          }}
        >
          <div
            style={{
              background: "#E54",
              height: "170px",
              width: "50%",
              zIndex: "-1",
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              background: "transparent",
              zIndex: "1",
              marginRight: "480px",
            }}
          >
            <h1
              style={{ color: "rgb(11, 93, 93)", marginBottom: "0px" }}
              className="quote_h1"
            >
            Luxury redefined
            </h1>
            <h4
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "gray",
                marginTop: "0px",
              }}
              className="quote_h4"
            >
              Luxury is Personal
            </h4>
          </div>
        </div> 
        <div className="some_quotes">
          <h4>
            Natural Hotels stand as a true paragon of world class hospitality
            and have some of the best luxury hotels and resorts in india.
            They are synonymous with excellence in hospitality and being
            able to offer unforgettable holiday and stay experience to guests in the most 
            exquisite settings. with "stay with us, stay with nature" being the sustained outlook 
            of this luxury hotels chain ,a stay at any of its properties truly brings
            guests closer to a sense of wellbeing and oneness with nature. Natural Hotels
            offers a safe and secure enviroment,authentic hospitality, thoughful service,
            lavish accommodation and worls class facilities.    
          </h4>
        </div>
        <Advantage />
        <div
          style={{
            display: "",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "60px",
            marginBottom: "120px",
            height: "15vh",
          }}
        >
          <div
            style={{
              background: "#E88A04",
              height: "170px",
              width: "50%",
              zIndex: "-1",
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              background: "transparent",
              zIndex: "1",
              marginRight: "480px",
            }}>
            <h1
              style={{ color: "rgb(11, 93, 93)", marginBottom: "0px" }}
              className="quote_h1">
            They Loved Our Hospitality 
            </h1>
            <h4
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "gray",
                marginTop: "0px",
              }}
              className="quote_h4">
              Explore the world with Ease.
            </h4>
          </div>
          <div>
        <h1 className="quotes_card">
        🥰Natural Hotels stand as a true paragon of world class hospitality 
          and have some of the best luxury hotels and resorts in india, 
          book handpicked  hotels with certified quality !
        </h1>
      </div>
       <Footer/>
        </div>
    </div>
  );
}

export default Home;
