import React from 'react'
import "./Header.css"
import Logo from "../ASSETES/logo.png";
import { Button } from '@mui/material';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none"}}>
      <img className='header_logo' alt='' src={Logo}/>
      </Link>
      <div className="header_center">
        <div className="center_button">Home</div>
        <div className="center_button">Rooms & Suits</div>
        <div className="center_button">Offers</div>
        <div className="center_button">My Bookings</div>
        <div className="center_button">Profiles</div>
      </div>
      <div className="header_right">
        <div className="headerContainer">
          <Button className='header_button'>Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default Header;
