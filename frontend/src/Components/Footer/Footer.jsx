import React from 'react'
import './Footer.css';
import {assets} from '../../assets/assets';
import  {FaFacebook} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa";
import { FaInstagramSquare} from "react-icons/fa";

function Footer(){
  return(
    <div className="Footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt=""/>
          <p>hello I create a food delivery website so I launch this website in July month because on July I celebrate my birthday. So Thanks for this website.</p>
          <div className="footer-social-icons">
            <FaFacebook className="icon"/>
            <FaTwitter className="icon"/>
            <FaInstagramSquare className="icon"/>
          </div>
        </div>
        
         <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8768667875</li>
            <li>skv@tomato.com</li>
          </ul>
        </div>
      
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
    );
}

export default Footer;