import React from 'react';
import "./Footer.css";
import Logo from "../ASSETES/logo.png";
import { Link } from 'react-router-dom';


function Footer() {
  return (
     <div className="footer_top" style={{paddingTop:"100px"}}>
        <div className="footer">
            <div className="footer_left">
            <Link to="/" style={{textDecoration:"none"}}>
            <img className='logo_header_footer' src={Logo} alt=""/>
      </Link>
                <div style={{display:"flex",alignItems:"center",
                justifyContent:"space-between",width:"300px"}}>
                    <img src='../IMAGES/fb.jpg' alt=''/>
                    <img src='../IMAGES/insta.jpg' alt=''/>
                    <img src='../IMAGES/twit.jpg' alt=''/>
                    <img src='../IMAGES/linkdin.jpg' alt=''/>
                </div>
            </div>
            <div className="footer_right">
                <div style={{display:"flex",alignItems:"center",
                 padding:"10px"}} className="address_footer">
                    <img src='../IMAGES/locate.jpg' alt='' style={{marginLeft:"34px",width:"19px"}}/>
                    shop no.3/26A,5th floor,next level mall,
                    Amravati,444601
                </div>
                <div style={{display:"flex",alignItems:"center",
                padding:"10px"}} >
                    <img src='../IMAGES/email.jpg' alt=''style={{marginLeft:"34px",width:"19px"}}/>
                    anujahele10@gmail.com
                </div>
                <div style={{display:"flex",alignItems:"center",
                 padding:"10px"}}>
                    <img src='../IMAGES/phone.jpg' alt=''style={{marginLeft:"34px",width:"19px"}}/>
                    +91 9067193451
                </div>
            </div>
        </div>
        <div style={{backgroundColor:"rgb(13, 110, 110)"}}>
        <p>Copyright @2022 All rights reserved</p>
        </div>
     </div>
  );
}

export default Footer;


