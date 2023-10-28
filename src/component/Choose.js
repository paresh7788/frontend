import React from 'react';
import './css/Choose.css';

function Choose() {
  return (  
   <div className="main-container">
      <h1 className="main-heading">Why Choose Us?</h1>
      <div className="sub-container">
        <div className="sub-image">
          <img src="/image/expo.png" alt="Image 1" />
        </div>
        <div className="sub-content">
          <h2>Expertise</h2>
          <p>At <b>RGOIT</b>, we pride ourselves on our team's exceptional expertise. Our professionals are masters in their respective fields, whether it's SEO, web development, app development, or digital marketing. They have a wealth of experience and a proven track record of success. When you choose us, you're partnering with experts who understand the nuances of the digital landscape and can provide you with the best strategies and solutions to help your business thrive.</p>
        </div>
      </div>
      <div className="sub-container reverse">
        <div className="sub-content">
          <h2>Custom Solutions</h2>
          <p>We understand that one-size-fits-all solutions don't work in the digital world. That's why we're committed to providing tailored, custom solutions for your business. We take the time to understand your unique needs, challenges, and goals. Our team will work closely with you to create a strategy that's designed specifically for your business. You won't get a cookie-cutter approach; instead, you'll receive a personalized plan that maximizes your digital success.</p>
        </div>
        <div className="sub-image">
          <img src="/image/sus.png" alt="Image 2" />
        </div>
      </div>
      <div className="sub-container">
        <div className="sub-image">
          <img src="/image/afp.png" alt="Image 3" />
        </div>
        <div className="sub-content">
          <h2>Affordable Pricing</h2>
          <p>At <b>RGOIT</b>, we believe that quality digital services shouldn't break the bank. We offer competitive and transparent pricing packages to ensure that businesses of all sizes can access the digital tools they need to succeed. Our commitment to affordable pricing means you can achieve your online goals without the financial strain. We're dedicated to providing value for your investment, helping you reach your full digital potential while staying within your budget.Feel free to use these descriptions to emphasize these key selling points on your website and marketing materials.

          </p>
        </div>
      </div>
    </div>
  );
}

export default Choose;