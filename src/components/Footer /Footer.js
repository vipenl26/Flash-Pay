import React from "react";
import "./Footer.css";
import "./Socials.css"
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
function Footer() {
  return (
    <div className="footerHolder">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
          <ul className="social-icon">
            {/* <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li> */}
            <li className="social-icon__item">
              <a className="social-icon__link" target="_blank" href="https://twitter.com/vipenl26">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" target="_blank" href="https://www.linkedin.com/in/vipen-loka-75291b124/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" target="_blank" href="https://www.instagram.com/vipenl26/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>                
                    <ul class="list-unstyled SocialCol ">

<li class="icon-item">
<a href="https://instagram.com" class="icon-link"><FaInstagram></FaInstagram></a>
</li>
<li class="icon-item">
<a href="https://facebook.com" class="icon-link"><FaFacebook></FaFacebook></a>
    </li>
<li class="icon-item">
<a href="https://twitter.com" class="icon-link"><FaTwitter></FaTwitter></a>
</li>

<li class="icon-item">
<a href="https://github.com" class="icon-link"><FaGithub></FaGithub></a>
</li>    
</ul>

            
          <p>&copy;2022 NGIT | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
