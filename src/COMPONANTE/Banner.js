import { Button } from "@mui/material";
import React,{ useState } from "react";
import "./Banner.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";


let vector = require("../ASSETES/date.png");
let adult = require("../ASSETES/Adult.png");
let child = require("../ASSETES/Child.png");

function Banner() {
 const navigate = useNavigate();


  const [date, setDate] = useState([
    {
      startDate:new Date(),
      endDate: new Date(), 
      key: "selection",
    },
  ]);

  const [options, setoptions] = useState({
    adult: 1,
    children: 0,
  })
  const [showSearch, setShowSearch] = useState(false);

  const handleOption = (name, operation) =>
   {
    setoptions((prev) =>
     {
      return {
        ...prev,
        [name]:operation==='i'?options[name]+1:options[name]-1,
      };
    })
  }
  
  const handle = () =>
  {
    navigate("/search");
  }

  return (
    <>
      <div className="banner">
        <div className="banner_search">
          {
            showSearch && <DateRange 
            editableDateInputs={true}
            onChange={(item)=>setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
            />
          }
        </div>
        <div className="banner_info">
          <h4>Enjoy Your Vacation With Natural Hotels</h4>
          <h1 style={{ marginTop: "0px", color: "#E88A04" }}>
            Let us plan you a perfect International Holiday
          </h1>
          <Button onClick={handle}>Explore Now</Button>
        </div>
      </div>
      <div className="booking_div">
        <div className="booking">
          <div
            style={{
              display: "flex",
              alignItem: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div className="banner_main_div">
              <div className="booking_header">
                <img
                  className="booking_vector"
                  alt=""
                  src={vector}
                  style={{ height: "28px" }}
                />
                <h4>Arrival Date</h4>
                <img className="img" src="../IMAGES/down.png"
                  alt="" onClick={() => setShowSearch(true)} style={{ height: "28px" }}/>
              </div>
              <div className="booking_bof">
                <h2>{`${format(date[0].startDate,"dd MMM")}`}</h2>
                <h4>{`${format(date[0].startDate,"EEEE")}`}</h4>
              </div>
            </div>
            <div className="banner_main_div">
              <div className="booking_header">
                <img
                  className="booking_vector"
                  alt=""
                  src={vector}
                  style={{ height: "28px" }}
                />
                <h4>Check Out</h4>
                <img className="img" src="../IMAGES/down.png"
                  alt="" onClick={() => setShowSearch(true)} style={{ height: "28px" }}/>
              </div>
              <div className="booking_bof">
                <h2>{`${format(date[0].endDate,"dd MMM")}`}</h2>
                <h4>{`${format(date[0].endDate,"EEEE")}`}</h4>
              </div>
            </div>
            <div className="banner_main_div">
              <div className="booking_header">
                <img
                  className="booking_vector"
                  alt=""
                  src={adult}
                  style={{ height: "28px" }}
                />
                <h4>Adult</h4>
              </div>
              <div className="booking_bo">
                <h2>{`${options.adult}`}</h2>
                <div className="booking_nooo">
                  <div onClick={()=>handleOption("adult","i")}>
                    <img
                      src="../IMAGES/up.png"
                      className="img"
                      alt=""
                      style={{ height: "20px" }}
                    />
                  </div>
                  <div>
                    <button
                      style={{ border: "none", background: "transparent"}}
                     disabled={options.adult<= 1}onClick={()=>handleOption("adult","d")}>
                      <img
                        src="../IMAGES/down.png"
                        className="img"
                        alt=""
                        style={{ height: "25px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner_main_div">
              <div className="booking_header">
                <img
                  className="booking_vector"
                  alt=""
                  src={child}
                  style={{ height: "28px" }}
                />
                <h4>Children</h4>
              </div>
              <div className="booking_bo">
                <h2>{`${options.children}`}</h2>
                <div className="booking_nooo">
                  <div onClick={()=>handleOption("children","i")}>
                    <img
                      src="../IMAGES/up.png"
                      className="img"
                      alt=""
                      style={{ height: "20px" }}
                    />
                  </div>
                  <div>
                    <button
                      style={{ border: "none", background: "transparent" }}
                      disabled={options.children<= 0}onClick={()=>handleOption("children","d")}>
                      <img
                        src="../IMAGES/down.png"
                        className="img"
                        alt=""
                        style={{ height: "25px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner_main_div" style={{ paddingTop: "0px" }}>
              <h4 className="fadded_text">
                Hope You Have A Nice Exeperience...
              </h4>
              <div className="booking_button">
                <button onClick={handle}>Check Availability</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }
export default Banner;
