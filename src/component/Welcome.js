import React from 'react';
import './css/Welcome.css';


function Welcome(props) {
    window.addEventListener('load', function() {
        var welcomeBanner = document.querySelector('.welcome-banner');
        welcomeBanner.style.animationDelay = '1s';
    });
    return ( 
        <div className="welcome-banner">
          <h1>{props.head}</h1>
          <p>{props.pass}</p>
        </div>
        
     );
}

export default Welcome;