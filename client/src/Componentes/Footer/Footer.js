import React, { Fragment } from "react";
import "./style.css";





function Footer() { 
    return (
      <Fragment>
      
        <div className="container">
           
                <div className="colum">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                </div>
                <div className="colum">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className="colum">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="colum">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        
        <div className="footer-copyright">
            <p>C3-G61 © 2022</p>
        </div>

      </Fragment>
    );
  }
  
  export default Footer;