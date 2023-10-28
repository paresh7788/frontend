import React from 'react';
import "./css/Footer.css";

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p>"Empowering Your Digital Success with Excellence."</p>
            </div>
            <div className="col-md-4">
              <h3>Services</h3>
              <ul>
                <li>SEO</li>
                <li>Digital Marketing</li>
                <li>website development</li>
                <li>App development</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <ul>
                <li><i className="fas fa-envelope"></i>Email: info@RGOIT.com</li>
                <li><i className="fas fa-phone"></i>Phone: 123-456-7890</li>
                <li><i className="fas fa-map-marker-alt"></i>Address: 123 Main St, Bhubaneswar, Odisha</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;