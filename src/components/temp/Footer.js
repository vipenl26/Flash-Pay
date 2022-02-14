import React, { Component } from 'react'
import './Footer.css'
import './Socials.css'
import {FaInstagram,FaTwitter,FaFacebook,FaGithub} from 'react-icons/fa'
function Footer(props) {
    return(
   <div className="footer">
       <div className="container">
           <div className="footer_grid">
               <div className="footer_col " >
                   <span className="text">About us</span>
                   <ul className="list-unstyled ">
                        <li><h6 className="link">Home</h6></li>
                        <li><h6 className="link">Staff</h6></li>
                        <li><h6 className="link">Story</h6></li>
                        <li><h6 className="link">Opporutnites</h6></li>
                    </ul>
               </div>
               <div className="footer_col">
               <span className="text">Services</span>
                    <ul className="list-unstyled ">
                        <li><h6 className="link">Clients</h6></li>
                        <li><h6 className="link">API</h6></li>
                        <li><h6 className="link">Partnership</h6></li>
                        <li><h6 className="link">Integration</h6></li>
                    </ul>
                </div>
                <div className="footer_col">
                <span className="text">Contact us</span>
                    <ul className="list-unstyled ">
                        <li><h6 className="link">India</h6></li>
                        <li><h6 className="link">USA</h6></li>
                        <li><h6 className="link">United Kingdom</h6></li>
                        <li><h6 className="link">Support</h6></li>
                        
                    </ul>

                </div>
                <div className="footer_col">
                <span className="text">Socials</span>
                
                    <ul class="list-unstyled ">

                        <li class="icon-item">
                        <a href="#" class="icon-link"><FaInstagram></FaInstagram></a>
                        </li>
                        <li class="icon-item">
                        <a href="#" class="icon-link"><FaFacebook></FaFacebook></a>
                        </li>
                        <li class="icon-item">
                        <a href="#" class="icon-link"><FaTwitter></FaTwitter></a>
                        </li>
                        
                        <li class="icon-item">
                        <a href="#" class="icon-link"><FaGithub></FaGithub></a>
                        </li>    
                    </ul>

    
                </div>

           </div>
       </div>
   </div>
    )
}

export default Footer;
