import React from 'react';
import './css/map.css'; // Import your CSS styles

const Map = () => {
  return (
    <div className="cont">
      <div className="company-details">
        {/* Add your company details here */}
        <h2>Further Query Contact us!</h2>
        <p><i className="fas fa-map-marker-alt"></i>Address: 123 Company St,main building,Bhubaneswar</p>
        <p><i className="fas fa-phone"></i>Phone: (123) 456-7890</p>
        <p><i className="fas fa-envelope"></i>Email: info@RGOIT.com</p>
      </div>
      <div className="map">
        {/* Embed your map component or iframe here */}
        <iframe
          title="Company Location"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-80.123456!3d35.678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNTXCsDQzJzMwLjkiTiA4MMKwMTMnMzEuOCJF!5e0!3m2!1sen!2sus!4v1234567890123"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Map;